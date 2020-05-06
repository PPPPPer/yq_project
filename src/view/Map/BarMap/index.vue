<!--左上角，严重地区-->

<template>
    <div id="barMap"></div>
</template>

<script>
  import {BarMapApi} from './api'
  export default {
    name: 'index',
    data() {
      return {
        xData: [],
        yData: []
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        BarMapApi.getData().then(res => {
          const data = res.data.data;
          for(let value of data) {
            // this.xData.push(value.areaName)
            // this.xData.push(value.total)
            // this.yData.push(value.total)
          }
          this.render()
        }).catch(res => {
          this.xData = ['湖北', '广东', '浙江']
          this.yData = [30573, 1588, 1268]
          this.render()
        })
      },
      render() {
        let map = this.$echarts.init(document.getElementById('barMap'))
        let option = {
          title: {
            text: '全国感染城市Top3',
            left: 'center',
            top: '5%',
            textStyle: {
              color: '#fff'
            }
          },
          "grid": {
            "top": "25%",
            "left": "-5%",
            "bottom": "5%",
            "right": "5%",
            "containLabel": true
          },
          animation: false,
          "xAxis": [{
            "type": "category",
            "data": this.xData,
            "axisTick": {
              "alignWithLabel": true
            },
            "nameTextStyle": {
              "color": "#82b0ec"
            },
            "axisLine": {
              show: false,
              "lineStyle": {
                "color": "#82b0ec"
              }
            },
            "axisLabel": {
              "textStyle": {
                "color": "#fff"
              },
              margin: 30
            }
          }],
          "yAxis": [{
            show: false,
            "type": "value",
            "axisLabel": {
              "textStyle": {
                "color": "#fff"
              },
            },
            "splitLine": {
              "lineStyle": {
                "color": "#0c2c5a"
              }
            },
            "axisLine": {
              "show": false
            }
          }],
          "series": [{
            "name": "",
            type: 'pictorialBar',
            symbolSize: [35, 10],
            symbolOffset: [0, -6],
            symbolPosition: 'end',
            z: 12,
            // "barWidth": "0",
            "label": {
              "normal": {
                "show": true,
                "position": "top",
                // "formatter": "{c}%"
                fontSize: 25,
                fontWeight: 'bold',
                color: '#0174DF'
              }
            },
            color: "#8258FA",
            data: this.yData
          },
            {
              name: '',
              type: 'pictorialBar',
              symbolSize: [30, 10],
              symbolOffset: [0, 7],
              // "barWidth": "20",
              z: 12,
              "color": "#8181F7",
              "data": this.yData
            },
            {
              name: '',
              type: 'pictorialBar',
              symbolSize: [40, 15],
              symbolOffset: [0, 12],
              z: 10,
              itemStyle: {
                normal: {
                  color: 'transparent',
                  borderColor: '#D8CEF6',
                  borderType: 'solid',
                  borderWidth: 1
                }
              },
              data: this.yData
            },
            {
              name: '',
              type: 'pictorialBar',
              symbolSize: [60, 20],
              symbolOffset: [0, 18],
              z: 10,
              itemStyle: {
                normal: {
                  color: 'transparent',
                  borderColor: '#819FF7',
                  borderType: 'solid',
                  borderWidth: 2
                }
              },
              data: this.yData
            },
            {
              type: 'bar',
              "barWidth": "35",
              barGap: '10%',
              barCateGoryGap: '10%',
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 0.7, [{
                    offset: 0,
                    color: "#8258FA"
                  },
                    {
                      offset: 1,
                      color: "#0B3147"
                    }
                  ]),
                  opacity: .8
                },
              },
              data: this.yData
            }
          ]
        };
        console.log(222)
        map.setOption(option)
      }

    }
  }
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  #barMap
    width 100%
    height 100%
</style>
