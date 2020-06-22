<template>
  <el-row id="myrow" style="width: 100%">
      <div id="mychart" style="height: 500px"></div>
  </el-row>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'visualization',
  data () {
    return {
      statData: [
        {
          k: 'totalNum',
          label: '填报总人数',
          v: 100
        },
        {
          k: 'huBei',
          label: '去过湖北',
          v: 0
        },
        {
          k: 'foreignRelatives',
          label: '有外国亲戚',
          v: 0
        },
        {
          k: 'abroad',
          label: '在国外',
          v: 0
        },
        {
          k: 'contactCase',
          label: '接触过疑似/确诊病例',
          v: 0
        },
        {
          k: 'contactForeigner',
          label: '接触外国人',
          v: 0
        },
        {
          k: 'myPhysicalCondition',
          label: '非健康状态',
          v: 0
        }
      ],
      mychart: null,
      timer: 0
    }
  },
  methods: {
    drawBar () {
      this.timer = setInterval(() => {
        var parentWidth = document.getElementById('myrow').offsetWidth
        if (parentWidth !== 0) {
          document.getElementById('mychart').style.width = parentWidth + 'px'
          this.mychart = echarts.init(document.getElementById('mychart'))
          this.mychart.setOption({
            title: {
              text: '本日健康状况填报人数统计图表'
            },
            tooltip: {},
            xAxis: {
              data: this.statData.map(item => item.label)
            },
            yAxis: {},
            series: [{
              type: 'bar',
              name: '人数',
              data: this.statData.map(item => item.v)
            }]
          })
          clearInterval(this.timer)
        }
      }, 2000)
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.drawBar()
    })
  },
  beforeDestroy: function () {
    clearInterval(this.timer)
  },
  created: function () {
    this.$axios.get('/health/countTodayTotalNum')
      .then(res => {
        if (res.data.success) {
          this.statData[0].v = res.data.data
        } else {
          console.log(res)
        }
      }).catch(res => {
        console.log(res)
      })
    this.$axios.get('/health/countTodayDangerousNum')
      .then(res => {
        if (res.data.success) {
          for (var i = 1; i < this.statData.length; i++) {
            this.statData[i].v = res.data.data[this.statData[i].k]
          }
        } else {
          console.log(res)
        }
      }).catch(res => {
        console.log(res)
      })
  }
}
</script>

<style scoped>

</style>
