<template>
  <div class="total">
    <div class="font border">
      <div class="yellow">{{infected}}</div>
      <div class="white">全国总感染病例数</div>
    </div>
    <div class="font">
      <div class="yellow">{{cure}}</div>
      <div class="white">全国总治愈病例数</div>
    </div>
  </div>
</template>

<script>
  import {TotalCountApi} from './api'

  export default {
    name: 'index',
    data() {
      return {
        infected: 84406,
        cure: 79204
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        TotalCountApi.getData().then(res => {
          // const data = res.data.data;
          // for(let value of data) {
          //   this.infected += value.confirmedNumber
          //   this.cure += value.cureNumber;
          // }
        })
      }
    }

  }
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  .font
    width 50%
    height 100%
    text-align center
    box-sizing border-box
    float left
  .total
    width 100%
    height 100%
  .yellow
    color #F3F781
    font-size 35px
    height 30%
    padding-top 25%
  .white
    color white
    font-size 20px
  .border
    border-right 1px dashed white
</style>
