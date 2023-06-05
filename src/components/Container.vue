<template>
  <div class="container">
    <json-editor-vue class="editor" v-if="showEditor" v-model="dataFrom.remark"  @blur="remarkValidate"/>\
    <el-scrollbar v-if="!showEditor" class="form">
      <BorderList v-if="Row === 0"></BorderList>
      <DecorationList v-if="Row === 1"></DecorationList>
    </el-scrollbar>
    <div class="form" v-else>
      <div class="c">
        <dv-active-ring-chart v-if="Row === 2" :config="config" style="width:100%;height:100%" />
        <dv-capsule-chart v-else-if="Row === 3" :config="config" style="top: calc(50% - 100px);left: calc(50% - 150px);width:300px;height:200px" />
        <dv-water-level-pond v-else-if="Row === 4" :config="config" style="top: calc(50% - 100px);left: calc(50% - 75px);width:150px;height:200px" />
        <dv-percent-pond v-else-if="Row === 5" :config="config" style="top: calc(50% - 50px);left: calc(50% - 100px);width:200px;height:100px;" />
        <dv-flyline-chart v-else-if="Row === 6" :config="config" :dev="true" style="width:100%;height:100%;" />
        <dv-conical-column-chart v-else-if="Row === 7" :config="config" style="top: calc(50% - 150px);left: calc(50% - 250px);width:500px;height:300px;" />
        <dv-digital-flop v-else-if="Row === 8" :config="config" style="top: calc(50% - 25px) ;height:50px;" />
        <dv-scroll-board v-else-if="Row === 9" :config="config" style="top: calc(50% - 110px);left: calc(50% - 250px);width:500px;height:220px" />
        <dv-scroll-ranking-board v-else-if="Row === 10" :config="config" style="top: calc(50% - 150px);left: calc(50% - 250px);width:500px;height:300px" />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 导入模块
import {computed, reactive, ref, watch} from "vue";
// @ts-ignore
import JsonEditorVue from "json-editor-vue3";
import BorderList from "./list/BorderList.vue"
import DecorationList from "./list/DecorationList.vue"

const getData = (data) => {
  return {
    code: 0,
    message: "success",
    data: data
  }
}
const ringData = getData([
  {"name":"周口","value":50}, {"name":"南阳","value":150}, {"name":"西峡","value":250}, {"name":"驻马店","value":80}, {"name":"新乡","value":70}
])
const DataList = [[],[],ringData, ringData, getData([55]),
    getData(58),
    getData({
      "points":[
        {
          position: [0.52, 0.235],
          text: '新乡'
        },
        {
          position: [0.43, 0.29],
          text: '焦作'
        },
        {
          position: [0.59, 0.35],
          text: '开封'
        },
        {
          position: [0.53, 0.47],
          text: '许昌'
        },
        {
          position: [0.45, 0.54],
          text: '平顶山'
        },
        {
          position: [0.36, 0.38],
          text: '洛阳'
        },
        {
          position: [0.62, 0.55],
          text: '周口'
        },
        {
          position: [0.56, 0.56],
          text: '漯河'
        },
        {
          position: [0.37, 0.66],
          text: '南阳'
        },
        {
          position: [0.55, 0.81],
          text: '信阳'
        },
        {
          position: [0.55, 0.67],
          text: '驻马店'
        },
        {
          position: [0.37, 0.29],
          text: '济源'
        },
        {
          position: [0.20, 0.36],
          text: '三门峡'
        },
        {
          position: [0.76, 0.41],
          text: '商丘'
        },
        {
          position: [0.59, 0.18],
          text: '鹤壁'
        },
        {
          position: [0.68, 0.17],
          text: '濮阳'
        },
        {
          position: [0.59, 0.10],
          text: '安阳'
        }
      ],
      "centerPoint": [0.45,0.5]
    }),
    getData([
      {
        name: '周口',
        value: 55
      },
      {
        name: '南阳',
        value: 120
      },
      {
        name: '西峡',
        value: 71
      },
      {
        name: '驻马店',
        value: 66
      },
      {
        name: '新乡',
        value: 80
      },
      {
        name: '信阳',
        value: 35
      },
      {
        name: '漯河',
        value: 15
      }
    ]),
    getData([2023, 6, 6, 18]),
    getData([
        ['张三', '80', '90', '100', '270'],
        ["李四", '75', '85', '80', '240'],
        ['王五', '86', '84', '90', '260'],
        ['张大大', '80', '82', '84', '246'],
        ['李大大', '81', '85', '84', '250'],
        ['武大', '92', '98', '90','280'],
        ['章工', '90', '90', '90','270'],
        ['许一', '91', '93', '91','285'],
        ['俞二', '90', '92', '92','274'],
        ['唐钰小宝', '93', '96', '90','279']
    ]),
  getData([
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 71
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    },
    {
      name: '信阳',
      value: 35
    },
    {
      name: '漯河',
      value: 15
    }
  ]),
]
const props = defineProps(['mode'])
const mode = computed(()=> {
  return props.mode
})
const config = computed(()=>{
  let configData = {}
  switch (Row.value) {
    case 2:
      configData['radius'] = '50%'
      configData['activeRadius'] = '55%'
      configData['data'] = dataFrom.remark['data']
      configData['lineWidth'] =  20
      configData['activeTimeGap'] = 3000
      configData['color'] = ['rgba(255,255,255,0.8)', '#7ec699', 'green', 'yellow', 'blue']
      configData['digitalFlopStyle'] = [2]
      configData['digitalFlopToFixed'] = 0
      configData['digitalFlopUnit'] = ''
      configData['animationCurve'] = 'easeOutCubic'
      configData['animationFrame'] = 50
      configData['showOriginValue'] = false
      break
    case 3:
      configData['data'] = dataFrom.remark['data']
      configData['unit'] = '单位'
      configData['colors'] = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c']
      configData['showValue'] = true
      break
    case 4:
      configData['data'] = dataFrom.remark['data']
      configData['shape'] = [2]
      configData['colors'] = []
      configData['waveNum'] = 4
      configData['waveHeight'] = 40
      configData['waveOpacity'] = 0.4
      configData['formatter'] = '{value}%'
      break
    case 5:
      configData['value'] = dataFrom.remark['data']
      break
    case 6:
      configData['points'] = dataFrom.remark['data']['points']
      configData['bgImgUrl'] = '/map.jpg'
      configData['centerPointImg'] = {
        url: '/mapCenterPoint.png',
        width: 40,
        height: 40
      }
      configData['pointsImg'] = {
        url: '/mapPoint.png',
        width: 20,
        height: 20
      }
      configData['centerPoint'] = dataFrom.remark['data']['centerPoint']
      break
    case 7:
      configData['data'] = dataFrom.remark['data']
      configData['img'] = ['/1st.png','/2st.png','/3st.png','/4st.png','/5st.png','/6st.png','/7st.png']
      break
    case 8:
      configData['number'] = dataFrom.remark['data']
      configData['content'] = '日期：{nt}年{nt}月{nt}日{nt}时'
      break
    case 9:
      configData['header'] = ["姓名", "语文", "数学", "英语", "总分"]
      configData['data'] = dataFrom.remark['data']
      break
    case 9:
      configData['header'] = ["姓名", "语文", "数学", "英语", "总分"]
      configData['data'] = dataFrom.remark['data']
      break
    case 10:
      configData['data'] = dataFrom.remark['data']
      break
  }
  console.log('====', configData)
  return configData
})
const Row = computed(()=> {
  console.log("===row=====change====", mode.value.row)
  dataFrom.remark = DataList[mode.value.row]
  return mode.value.row
})
const showEditor = computed(()=> Row.value > 1)

const dataFrom = reactive({
  remark: {}
})
let editorFlag = ref(false)
const remarkValidate = async (editor) => {
  // if (!editor) return;
  const res = await editor.validate();
  // res 是错误列表，如果是空数组，则表示检测没有错误
  if(res.length != 0){
    editorFlag.value = false;
  }else {
    editorFlag.value = true;
  }
};
</script>

<style lang="less" scoped>
.container{
  display: flex;
  flex-direction: row;
}
.editor{
  width: 40%;
  height: 100%;
}
.form{
  flex: 1;
  position: relative;
  background: #f8f8f8;
  .c{
    left: 20px;
    width: calc(100% - 40px);
    height: 500px;
    top: 20px;
    background: #282c34;
  }
}
</style>
