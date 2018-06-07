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
        <div>
          <h3>公司简介</h3>
          <p>我们是一家非常NB的公司！！</p>
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
      showHideOnBlur: false
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
  height: 100px
}
.vux-x-icon {
  fill: #09BB07;
}
.overflow{
  right:3px;
}
</style>
