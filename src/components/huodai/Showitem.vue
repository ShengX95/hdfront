<template>
  <div class='item-wapper'>
    <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r first-content">
          <span>{{ item.rate }}</span>
          <br/> 参考利率
        </div>
        <div class="vux-1px-r">
          <span>{{ item.title }}</span>
          <br/> {{ item.detail }}
        </div>
        <div class="vux-1px-r">
          <span>{{ item.limitTime }}</span>
          <br/> 借款期限
        </div>
        <div class="vux-1px-r" style="margin: auto;">
          <x-button mini @click.native="to(item.url,item.id)">
            <p style="color:#4876FF">查看详情</p>
          </x-button>
        </div>
      </div>
    </card>
  </div>
</template>
<script>
import { AjaxPlugin } from 'vux'
const urlClick = '/api/show/click/huodai/'
export default {
  components: {
    AjaxPlugin
  },
  props: ['item'],
  methods: {
    to (url, id) {
      AjaxPlugin.$http({
        method: 'get',
        url: urlClick + id
      }).then((data) => {
        console.log(data)
      })
      window.location = url
    }
  }
}
</script>
<style>
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 5px;
  color: gray;
}
.card-demo-flex span {
  color: #f74c31;
  font-size: 15px;
}
.flex-demo {
  text-align: center;
  background-clip: padding-box;
}
.item-wapper {
  background: white;
}
.flex-box {
  background: orange;
}
.small-gray {
  font-size: 20%;
  color: gray;
}
</style>