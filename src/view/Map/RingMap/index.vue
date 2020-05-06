<template>
    <div id="ringMap"></div>
</template>

<script>
  import {RingMapApi} from './api'

  export default {
    name: 'index',
    data() {
      return {
        scaleData: []
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        RingMapApi.getData().then(res => {
          const data = res.data.data;
          let confirmedNumber = 0;
          let cureNumber = 0;
          let deathNumber = 0;
          for(let value of data) {
            confirmedNumber += value.confirmedNumber;
            cureNumber += value.cureNumber;
            deathNumber += value.deathNumber;
          }
          this.scaleData.push({name: '确诊人数', value: confirmedNumber})
          this.scaleData.push({name: '治愈人数', value: cureNumber})
          this.scaleData.push({name: '死亡人数', value: deathNumber})
          this.render()
        }).catch(res => {
          this.scaleData = [
            {name: '确诊人数', value: 579},
            {name: '治愈人数', value: 573},
            {name: '死亡人数', value: 6},
          ]
          this.render()
        })
      },
      render() {
        let map = this.$echarts.init(document.getElementById('ringMap'))
        let that = this;
        var rich = {
          white: {
            color: '#ddd',
            align: 'center',
            padding: [5, 0]
          }
        };
        var placeHolderStyle = {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
          }
        };
        var data = [];
        for (var i = 0; i < this.scaleData.length; i++) {
          data.push({
            value: this.scaleData[i].value,
            name: this.scaleData[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 30,
                borderColor: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                  offset: 0,
                  color: '#7777eb'
                }, {
                  offset: 1,
                  color: '#70ffac'
                }]),
                shadowColor: 'rgba(142, 152, 241, 0.6)'
              }
            }
          }, {
            value: 4,
            name: '',
            itemStyle: placeHolderStyle
          });
        }
        var seriesObj = [{
          name: '',
          type: 'pie',
          clockWise: false,
          radius: [135, 140],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < that.scaleData.length; i++) {
                    total += that.scaleData[i].value;
                  }
                  percent = ((params.data.value / total) * 100).toFixed(0);
                  if(params.data.name !== '' && percent !== 0) {
                    return params.data.name + '\n{white|' + '占比' + percent + '%}';
                  }else {
                    return '';
                  }
                },
                rich: rich
              },
              labelLine: {
                show: false
              }
            }
          },
          data: data
        }];
        let option = {
          // backgroundColor: '#04243E',
          title: {
            text: '重庆疫情情况',
            left: 'center',
            fontSize: 16,
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            show: false
          },
          legend: {
            show: false
          },
          toolbox: {
            show: false
          },
          series: seriesObj
        }
        map.setOption(option)
      }

    }
  }
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  #ringMap
    width 100%
    height 100%
    padding-top 15px
</style>
