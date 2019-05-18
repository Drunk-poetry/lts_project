<template>
    <mdb-container fluid>
        <div class="wrapper">
            <mdb-btn color="grey lighten-2" :class="['btn-menu',{'btn-active':index==ActiveIndex}]"
                v-for="(item,index) in btnData" 
                :key="index"
                @click="menuBtnClickHandle(index)"
                :title="item.introduce" >
                <mdb-icon :icon="item.icon" size="2x" />
                <!-- <img src="../../assets/logo.png" class="img-fluid btn-img" alt="Responsive image"> -->
                <p>{{item.name}}</p>
            </mdb-btn>
            <div class="border-left border-light message">
                <p>运行时间 <span  class="running-time">{{runningTime}}</span></p>
                <p>当前工序 <span class="work-num">{{nowWorkNum}}</span></p>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                  <label class="custom-control-label" for="defaultUnchecked">训练：{{currentOperation}}</label>
                </div>
            </div>
        </div>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol,mdbBtn,mdbIcon,mdbBtnGroup } from 'mdbvue';
export default {
    name:'ControlMenu',
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
              {name:'编辑模式',icon:'edit',introduce:'编辑模式'},
              {name:'运行模式',icon:'spinner',introduce:'编辑模式'},
              {name:'重新开始',icon:'redo-alt',introduce:'编辑模式'},
              {name:'开始',icon:'play-circle',introduce:'编辑模式'},
              {name:'退出',icon:'sign-out-alt',introduce:'编辑模式'},
              {name:'控制面板',icon:'project-diagram',introduce:'编辑模式'},
              {name:'画面',icon:'laptop',introduce:'编辑模式'}
          ],
          nowWorkNum:999,//当前工序,
          runningTime: '99:99',//运行时间,
          currentOperation: '显示当前操作指导',
          ActiveIndex:null
      }
  },
  methods: {
      menuBtnClickHandle:function(index) {
          this.ActiveIndex = index;
      }
  }
}
</script>

<style>
.wrapper {
    display: flex;
    flex-wrap: wrap;
}
.btn-img {
    width: 80%;
    margin: 5px;
}
.wrapper .btn-menu {
    margin: 8px 3px 15px;
    padding: 10px;
    width: 5rem;
}
.wrapper .btn-menu p {
    margin-top: 1rem;
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
.wrapper .message {
    color: #fff;
    margin-left: .8rem;
    padding: .1rem .8rem;;
    align-self: center;
    height: 100%;
    flex-basis: 100;
    font-size: .8rem;
}
.wrapper .message .work-num {
    margin-left: 1rem;
    color: #4285F4;
}
.wrapper .message .running-time {
    margin-left: 1rem;
    color: #2BBBAD;
}
.wrapper .btn-menu.btn-active {
    background-color:#00C851 !important;
}
</style>

