<template>
  <div>
    <!-- top tab-->
    <div id="my-tab">
      <tab v-model="sysIndex" prevent-default @on-before-index-change="switchTabItem">
        <tab-item :key="0" class="vux-center" selected>货代超市</tab-item>
        <tab-item :key="1" class="vux-center">信用卡超市</tab-item>
      </tab>
    </div>
    <!-- tab content -->
    <div id="tab-content">
      <div @click="showHideOnBlur=true" class="overflow">
        <x-icon type="ios-help" size="30"></x-icon>
      </div>
      <component v-bind:is="currentTabComponent"></component>
      <div v-transfer-dom>
        <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
          <div class="leftalign">
            <h3>连云港市瀚锐文化传播有限公司</h3>
            <p>瀚锐是一家针对互联网公司产品推广需求而生的，专注于互联网推广。</p>
            <h4>公司地址</h4>
            <p>江苏省连云港市海州区花果山大道17号科创城3号楼404室</p>
            <h4>成立时间</h4>
            <p>2016年11月</p>
            <h4>业务简介</h4>
            <p>针对互联网公司的手机端APP 网站 公众号 信用卡 p2p 贷款等等的推广。公司另外专业定制网站 开发微信平台 已有不少成功案例</p>
            <h4>活动介绍</h4>
            <p>公司有自己的地推团队，线上资源，线上推广团队。公司独有全国高校优质渠道资源对大学生有推广要求的产品方可配合实行路演 晚会等形式多样的品牌推广定制服务。服务过客户有 ：借贷宝 网信理财 草根投资 yo会 花椒直播 平安wifi 人人投 平安信用卡 兴业信用卡 浦发信用卡 等等</p>
            <img :src="src" class="ximg" />
          </div>
          <div @click="showHideOnBlur=false">
            <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
          </div>
        </x-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import Huodai from '@/components/huodai/Huodai'
import Creditcard from '@/components/creditcard/Creditcard'
import { TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Huodai,
    Creditcard
  },
  data () {
    return {
      sysIndex: 0,
      showHideOnBlur: false,
      src: '/static/logo_small.jpg'
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.sysIndex === 0 ? 'Huodai' : 'Creditcard'
    }
  },
  methods: {
    switchTabItem (index) {
      console.log('on-before-index-change', index)
      this.sysIndex = index
    },
    success (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
.vux-x-icon {
  fill: #09bb07;
}
.overflow {
  right: 3px;
}
.leftalign {
  text-align: left;
  margin: 10px;
}
.ximg {
  width: 100%;
  height: auto;
}
</style>
