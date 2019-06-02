<template>
 <mdb-container fluid>
        <div class="wrapper">
            <div class="border-right border-light select-wrapper">
                <p>投影输出：</p>
                <select class="custom-select custom-select-sm my-select" v-model="ScreenOutup">
                <option :value="screnn" 
                        v-for="(screnn,index) in Screens" 
                        :key="index"
                        :selected="{selected:index==0}"
                        >{{screnn}}</option>
                </select>
            </div>
            <mdb-btn color="grey lighten-2" :class="['btn-menu',{'btn-active':index==ActiveIndex}]"
                v-for="(item,index) in btnData" 
                :key="index"
                @click="menuBtnClickHandle(index)"
                :title="item.introduce"
                :disabled="item.disable" >
                <span class="iconfont" v-html="item.icon"></span>
                <!-- <mdb-icon :icon="item.icon" size="2x" /> -->
                <!-- <img :src="item.icon" class="img-fluid btn-img" alt="Responsive image"> -->
                <p>{{item.name}}</p>
            </mdb-btn>
        </div>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol,mdbBtn,mdbIcon,mdbBtnGroup } from 'mdbvue';
export default {
    name:'InsertMenu',
    components:{
      mdbBtn,
      mdbIcon,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtnGroup
  },
   data(){
      return {
          btnData:[
              {name:'步骤',icon:'&#xe682;',introduce:'步骤'},
              {name:'文本',icon:'&#xe6ec;',introduce:'文本'},
              {name:'路径文本',icon:'&#xe686;',introduce:'路径文本'},
              {name:'画图',icon:'&#xe64c;',introduce:'画图'},
              {name:'图片',icon:'&#xe656;',introduce:''},
              {name:'视频',icon:'&#xe600;',introduce:''},
              {name:'音频',icon:'&#xe644;',introduce:''},
              {name:'倒计时',icon:'&#xe62b;',introduce:''},
              {name:'拍照',icon:'&#xe612;',introduce:''},
              {name:'确认条件',icon:'&#xe6d8;',introduce:''},
              {name:'资源',icon:'&#xe67d;',introduce:'',disable:true},
              {name:'清除',icon:'&#xe623;',introduce:''},
              {name:'考评',icon:'&#xe86c;',introduce:''},
          ],
          nowWorkNum:999,//当前工序,
          runningTime: '99:99',//运行时间,
          currentOperation: '显示当前操作指导',
          ActiveIndex:null,
          Screens: ["screen-1","screen-2","screen-3","screen-4"],
          ScreenOutup:'screen-1'
      }
  },
  methods:{
      menuBtnClickHandle:function(index){
          switch(index) {
              case 0:{
                  this.$store.dispatch("changeAttribute",'progress')
                  break;
              }
              case 1:{//插入文字
                  let worklist = {
                    name:'work1',
                    work:{
                        id:this.$store.state.WorkListIndex,
                        attr:'text',
                        text:true,
                        message:'文字：请输入文字',
                    }
                  }
                  this.$store.dispatch("AddWorkStepAfter",worklist)
                  this.$store.dispatch("changeAttribute",'text')
                  break;
              }
              case 2:{
                  let worklist = {
                    name:'work1',
                    work:{
                        id:this.$store.state.WorkListIndex,
                        attr:'text',
                        text:true,
                        message:'文字：请输入文字',
                    }
                  }
                  this.$store.dispatch("AddWorkStepAfter",worklist)
                  this.$store.dispatch("changeAttribute",'text')
                  break;
              }
              case 3:{//画图
                  let worklist = {
                    name:'work1',
                    work:{
                        id:this.$store.state.WorkListIndex,
                        attr:'draw',
                        message:'自定义画图',
                    }
                  }
                  this.$store.dispatch("AddWorkStepAfter",worklist)
                  this.$store.dispatch("changeAttribute",'draw')
                  break;
              }
              case 4:{//插入图片
                  let worklist = {
                    name:'work1',
                    work:{
                        id:this.$store.state.WorkListIndex,
                        workStep:null,
                        attr:'image',
                        url:'',
                        name:'',
                        message:'图片：请选择图片',
                        more:''
                    }
                  }
                  this.$store.dispatch("AddWorkStepAfter",worklist)
                  this.$store.dispatch("changeAttribute",'image')
                  break;
              }
              case 5:{//插入视频
                  let worklist = {
                    name:'work1',
                    work:{
                        id:this.$store.state.WorkListIndex,
                        attr:'video',
                        url:'',
                        name:'',
                        message:'视频：请选择视频',
                        more:''
                    }
                  }
                  this.$store.dispatch("AddWorkStepAfter",worklist)
                  this.$store.dispatch("changeAttribute",'video')
                  break;
              }
              case 6:{//插入音频
                  let worklist = {
                    name:'work1',
                    work:{
                        id:this.$store.state.WorkListIndex,
                        attr:'audio',
                        url:'',
                        name:'',
                        message:'音频：请选择音频',
                        more:''
                    }
                  }
                  this.$store.dispatch("AddWorkStepAfter",worklist)
                  this.$store.dispatch("changeAttribute",'audio')
                  break;
              }
              case 7:{//倒计时
                  let worklist = {
                    name:'work1',
                    work:{
                        id:this.$store.state.WorkListIndex,
                        attr:'count',
                        message:'倒计时：时间',
                        more:''
                    }
                  }
                  this.$store.dispatch("AddWorkStepAfter",worklist)
                  this.$store.dispatch("changeAttribute",'count')
                  break;
              }
              case 8:{//拍照
                  let worklist = {
                    name:'work1',
                    work:{
                        id:this.$store.state.WorkListIndex,
                        attr:'photo',
                        message:'拍照：图片名',
                        more:''
                    }
                  }
                  this.$store.dispatch("AddWorkStepAfter",worklist)
                  this.$store.dispatch("changeAttribute",'photo')
                  break;
              }
              case 9:{
                   this.$store.dispatch("changeAttribute",'progress')
                  break;
              }
              case 10:{
                   
                  break;
              }
              case 11:{//清除
                  let worklist = {
                    name:'work1',
                    work:{
                        id:this.$store.state.WorkListIndex,
                        attr:'clear',
                        message:'清除',
                        clear:true,
                        more:''
                    }
                  }
                  this.$store.dispatch("AddWorkStepAfter",worklist)
                  this.$store.dispatch("changeAttribute",'clear')
                  break;
              }
              case 12: {
                  let worklist = {
                    name:'work1',
                    work:{
                        id:this.$store.state.WorkListIndex,
                        attr:'test',
                        message:'-- 考评 --',
                        more:''
                    }
                  }
                  this.$store.dispatch("AddWorkStepAfter",worklist)
                   this.$store.dispatch("changeAttribute",'appraisal')
                  break;
              }
             default: {
                 break;
             }
          }
          this.$router.push('/attribute');
      }
  }
}
</script>

<style scoped>
.wrapper {
    color: #fafafa;
    display: flex;
    flex-wrap: wrap;
}
.wrapper .select-wrapper{
    color: #fff;
    margin-right: .8rem;
    padding: .1rem .8rem;;
    align-self: center;
    height: 100%;
    flex-basis: 100;
    font-size: .8rem;
}
.wrapper .select-wrapper .my-select {
    width: 8rem;
    height: 1.5rem;
    font-size: .8rem;
    line-height: .8rem;
}
.wrapper .select-wrapper .my-select:hover {
    animation: pulse .3s;
}
.btn-img {
    width: 55%;
    margin: 4px;
}
.wrapper .btn-menu {
    margin: 8px 3px 15px;
    padding:1.5px;
    width: 5rem;
}
.wrapper .btn-menu p {
    margin-top: .4rem;
    margin-bottom: .6rem;
}
.wrapper .btn-menu:hover {
    animation: pulse .3s;
    background-color: #4285F4!important;
}
.active {
    background: #faf!important;
}
.custom-control-label {
    line-height: 1.5rem;
}

.wrapper .btn-menu.btn-active {
    background-color:#00C851 !important;
}
.iconfont {
    font-size:1.9rem;
}
</style>