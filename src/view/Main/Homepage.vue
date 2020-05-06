<template>
  <div class="background" style="height: 100%;overflow: hidden">
    <div class="background2" v-if="background"></div>
    <div class="title"><span class="titleFont">国内疫情大数据统计</span></div>
    <div class="back" @click="back"></div>
    <div class="time">{{date}}</div>

    <div class="rectangle1" id="rectangle1">
      <bar-map></bar-map>
    </div>
    <div class="rectangle2" id="rectangle2">
      <increase-map></increase-map>
    </div>
    <div class="rectangle3" id="rectangle3">
     <total-count></total-count>
    </div>
    <div class="rectangle5" id="rectangle5">
      <trend-map></trend-map>
    </div>
    <div class="rectangle8" id="rectangle8">
      <ring-map></ring-map>
    </div>

    <div style="background-color: rgba(15, 235, 255, 0.1);position: absolute;width:32.5%;height:65.6%;top:8.5%;left:33.5%">
      <earth-map></earth-map>
    </div>
    </div>

</template>

<script>
  import RingMap from '../Map/RingMap/index.vue'
  import TrendMap from '../Map/TrendMap/index.vue'
  import BarMap from '../Map/BarMap/index.vue'
  import EarthMap from '../Map/EarthMap/index.vue'
  import TotalCount from '../Map/TotalCount/index.vue'
  import IncreaseMap from '../Map/IncreaseMap/index.vue'

  export default {
    components: {
      RingMap,
      TrendMap,
      BarMap,
      EarthMap,
      TotalCount,
      IncreaseMap
    },
    data() {
      return {
        date: '',
        interval: '',
        acceptanceTrendFunctionCount: 0,
        acceptanceAppealFunctionCount: 0,
        overdueChartFunctionCount: 0,
        discount: 0,
        sourceCount: 0,
        hotLineCount: 0,
        hotSpot: 0,
        municipalCount: 0,
        background: false,
        municipalRCount: 1,
        hotspotRCount: 1,
        number: 0
      }
    },
    mounted() {
      this.getCycleTime()
    },
    destroyed() {
      clearInterval(this.interval);
    },
    methods: {
      back() {
        this.$router.push('/')
      },
      getCycleTime() {
        this.getTime();
        document.addEventListener('visibilitychange', this.cycleDisplay);
        this.cycleDisplay();
      },
      cycleDisplay() {
        if (document.visibilityState === 'visible') {
          this.interval = setInterval(() => {
            this.getTime()
          }, 1000)
        } else {
          clearInterval(this.interval);
        }
      },
      getTime() {
        let data = new Date();
        let month = data.getMonth() + 1;
        let day = '';
        if (data.getDay() === 1) day = '星期一';
        else if (data.getDay() === 2) day = '星期二';
        else if (data.getDay() === 3) day = '星期三';
        else if (data.getDay() === 4) day = '星期四';
        else if (data.getDay() === 5) day = '星期五';
        else if (data.getDay() === 6) day = '星期六';
        else day = '星期日';
        this.date = data.getFullYear() + '年' + month + '月' + data.getDate() + '日\t\t\t' + (data.getHours() < 10 ? ('0' + data.getHours()) : data.getHours()) + ':' + (data.getMinutes() < 10 ? ('0' + data.getMinutes()) : data.getMinutes()) + ':' + (data.getSeconds() < 10 ? ('0' + data.getSeconds()) : data.getSeconds()) + '\t\t\t' + day;
      }
    },
  }
</script>
<style scoped>
  .background {
    width: 100%;
    height: 100%;
    background-image: url("/../../../static/image/background.png");
    background-size: cover;
    position: relative;
  }
  .background:after{
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background-color: #DA81F5;
    opacity: 0.2;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .background2 {
    width: 100%;
    height: 100%;
    opacity: 0.6;
    filter: alpha(opacity=40);
    background-color: black;
    background-size: cover;
    position: absolute;
    z-index: 100
  }

  .title {
    height: 6.7%;
    width: 100%;
    padding-top:1%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    background-image: url("../../../static/image/title.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }

  .titleFont {
    padding-top: 0.3%;
    padding-bottom: 0.3%;
    height: 80%;
    color: white;
    font-size: 173%;
    letter-spacing: 5px;
  }

  body {
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }

  @keyframes content {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.4;
    }
  }

  @keyframes content2 {
    from {
      opacity: 0.7;
    }
    to {
      opacity: 0.2;
    }
  }

  @keyframes content3 {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 0.2;
    }
  }




  .rectangle1 {
    position: absolute;
    width: 32.7%;
    height: 41.5%;
    background-size: 100% 100%;
    background-color: rgba(15, 235, 255, 0.1);
    top: 8.6%;
    left: 0.4%;
    transition: width 1s, height 1s, margin-left 1s, margin-top 1s;
    -webkit-transition: width 1s, height 1s, margin-top 2s, margin-left 2s;
    z-index: 99;
  }

  .rectangle2 {
    position: absolute;
    width: 32.7%;
    height: 48%;
    /*background: url("../../../static/image/rectangle2.png");*/
    background-size: 100% 100%;
    background-color: rgba(15, 235, 255, 0.1);
    top: 51%;
    left: 0.4%;
    transition: width 1s, height 1s, margin-left 1s, margin-top 1s;
    -webkit-transition: width 1s, height 1s, margin-top 2s, margin-left 2s;
    z-index: 99;
  }

  .rectangle3 {
    position: absolute;
    width: 32.5%;
    height: 24.2%;
    background-color: rgba(15, 235, 255, 0.1);
    background-size: 100% 100%;
    top: 74.9%;
    left: 33.5%;
    transition: width 1s, height 1s, margin-left 1s, margin-top 1s;
    -webkit-transition: width 1s, height 1s, margin-top 2s, margin-left 2s;
    z-index: 99;
  }

  .rectangle5 {
    position: absolute;
    width: 33.4%;
    height: 39.1%;
    background-size: 100% 100%;
    background-color: rgba(15, 235, 255, 0.1);
    top: 8.6%;
    left: 66.4%;
    transition: width 1s, height 1s, margin-left 1s, margin-top 1s;
    -webkit-transition: width 1s, height 1s, margin-top 2s, margin-left 2s;
    z-index: 99;
  }

  .rectangle8 {
    position: absolute;
    width: 33.4%;
    height: 50%;
    background-size: 100% 100%;
    background-color: rgba(15, 235, 255, 0.1);
    top: 48.9%;
    left: 66.4%;
    transition: width 1s, height 1s, margin-left 1s, margin-top 1s;
    -webkit-transition: width 1s, height 1s, margin-top 2s, margin-left 2s;
    z-index: 99;
  }


  .time {
    position: absolute;
    right: 1%;
    top: 2.4%;
    color: white;
    font-size: 120%;
    text-shadow: 0 0 8px #379a96, 0 0 42px #0febff, 0 0 72px #577886, 0 0 150px #89bfd6;
  }

  .back {
    width: 1.1%;
    height: 3.5%;
    position: absolute;
    top: 1.7%;
    left: 1.4%;
    background: url("../../../static/image/back.png") no-repeat;
    background-size: 100% 100%;
    z-index: 9999;
  }
</style>
