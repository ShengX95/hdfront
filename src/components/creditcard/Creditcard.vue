<template>
  <div>
    <div id="swiper-wapper">
      <swiper :list="swiperList" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div id="content-wapper">
      <button-tab>
        <button-tab-item @on-item-click="consoleIndex('first')" :key="0" selected>点击最多</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex('second')" :key="1">发款最快</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex('third')" :key="2">最新发布</button-tab-item>
      </button-tab>
      <!-- <Showitem v-for="item in items" v-bind:item="item"></Showitem> -->
      <div v-if="items.length==0" style="text-align: center;">
        <p>暂无信息</p>
      </div>
      <panel :list="items" :type="type" @on-img-error="onImgError" @on-click-item="onItemClick"></panel>
    </div>
  </div>
</template>
<script>
import Showitem from '@/components/creditcard/Showitem'
import { AjaxPlugin } from 'vux'
const swiperData = []
const header = ['点击最多', '发款最快', '最新发布']
const items = []
const allContent = []
const urlContent = '/api/show/cdcontent/all'
const urlSwiper = '/api/show/swiper/creditcard/'
const urlClick = '/api/show/click/creditcard/'
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
      allContent: allContent,
      type: '6'
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
      // that.$vux.loading.hide()
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
      console.log(index)
      this.items = this.allContent[index]
    },
    onImgError (item, $event) {
      console.log(item, $event)
    },
    onItemClick (item, $event) {
      //  点击量
      AjaxPlugin.$http({
        method: 'get',
        url: urlClick + item.id
      }).then((data) => {
        console.log(data)
      })
      window.location = item.tourl
    }
  }
}
</script>
<style>
</style>