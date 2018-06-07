<template>
  <div>
    <div id="swiper-wapper">
      <swiper :list="swiperList" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div id="content-wapper">
      <button-tab>
        <button-tab-item @on-item-click="consoleIndex('first')" :key="0" selected>最新入驻平台</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex('second')" :key="1">平台力荐</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex('third')" :key="2">下款最快</button-tab-item>
      </button-tab>
      <Showitem v-for="item in items" v-bind:item="item" v-bind:key="item.id"></Showitem>
      <div v-if="items.length==0" style="text-align: center;">
        <p>暂无信息</p>
      </div>
    </div>
  </div>
</template>
<script>
import Showitem from '@/components/huodai/Showitem'
import { AjaxPlugin } from 'vux'
const swiperData = []
const header = ['最新入驻平台', '平台力荐', '下款最快']
const items = []
const allContent = []
let urlContent = '/api/show/hdcontent/all'
let urlSwiper = '/api/show/swiper/huodai'
export default {
  components: {
    Showitem,
    AjaxPlugin
  },
  data () {
    return {
      index: 1,
      header: header,
      swiperList: swiperData,
      items: items,
      allContent: allContent
    }
  },
  mounted: function () {
    let that = this
    // this.$vux.loading.show({
    //   text: 'Loading'
    // })
    AjaxPlugin.$http({
      method: 'get',
      url: urlSwiper
    }).then((data) => {
      console.log(data)
      that.swiperList = data.data
    })

    AjaxPlugin.$http({
      method: 'get',
      url: urlContent
    }).then((data) => {
      console.log(data)
      that.allContent = data.data
      that.items = that.allContent.first
      // that.$vux.loading.hide()
    })
  },
  methods: {
    consoleIndex (index) {
      this.items = this.allContent[index]
    },
    onImgError (item, $event) {
      console.log(item, $event)
    }
  }
}
</script>
<style lang="less">
.overflow {
  z-index: 99999;
  position: absolute;
}
</style>