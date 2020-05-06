<template>
    <div id="increaseMap"></div>
</template>

<script>
  import {IncreaseMapApi} from './api'

  export default {
    name: 'index',
    data() {
      return {

      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        IncreaseMapApi.getData().then(res => {
          const data = res.data.data;
         console.log(999,data)
          this.render()
        }).catch(res => {
          this.render()
        })
      },
      render() {
        let map = this.$echarts.init(document.getElementById('increaseMap'))
        var data = [{
          month: "1月",
          value: 11821
        },

          {
            month: "2月",
            value: 32741
          },

          {
            month: "3月",
            value: 3006
          },

          {
            month: "4月",
            value: 945
          },

          {
            month: "5月",
            value: 559
          }

        ];
        var xData = [],
          yData = [];
        var min = 50;
        data.map(function(a, b) {
          xData.push(a.month);
          if (a.value === 0) {
            yData.push(a.value + min);
          } else {
            yData.push(a.value);
          }
        });
        let option = {
          title: {
            text: '各月疫情情况',
            left: 'center',
            top: '2%',
            fontSize: 16,
            textStyle: {
              color: '#fff'
            }
          },
          color: ['#BE81F7'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line',
              lineStyle: {
                opacity: 0
              }
            },
            formatter: function(prams) {
              if (prams[0].data === min) {
                return "总确诊人数：0"
              } else {
                return "总确诊人数：" + prams[0].data
              }
            }
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '15%',
            height: '85%',
            containLabel: true,
            z: 22
          },
          xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: xData,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: '#0c3b71'
              }
            },
            axisLabel: {
              show: true,
              color: 'rgb(170,170,170)',
              fontSize:16
            }
          }],
          yAxis: [{
            type: 'value',
            nameTextStyle:{
              color:"rgb(170,170,170)"
            },
            gridIndex: 0,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            // min: min,
            // max: 100,
            axisLine: {
              lineStyle: {
                color: '#0c3b71'
              }
            },
            axisLabel: {
              color: 'rgb(170,170,170)',
              formatter: '{value}'
            }
          },
            {
              type: 'value',
              gridIndex: 0,
              min: min,
              max: 100,
              splitNumber: 12,
              splitLine: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitArea: {
                show: true,
                areaStyle: {
                  color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
              }
            }
          ],
          series: [{
            name: '合格率',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8258FA'
                  },
                    {
                      offset: 0.5,
                      color: '#A9F5BC'
                    },
                    {
                      offset: 1,
                      color: '#0286ff'
                    }
                  ]
                )
              }
            },
            data: yData,
            zlevel: 11

          },
            {
              name: '背景',
              type: 'bar',
              barWidth: '50%',
              xAxisIndex: 0,
              yAxisIndex: 1,
              barGap: '-135%',
              data: [100, 100, 100, 100, 100, 100, 100,100, 100, 100, 100, 100, 100, 100,100],
              itemStyle: {
                normal: {
                  color: 'rgba(255,255,255,0.1)'
                }
              },
              zlevel: 9
            },

          ]
        };

        map.setOption(option)
      }

    }
  }
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  #increaseMap
    width 100%
    height 100%
</style>
