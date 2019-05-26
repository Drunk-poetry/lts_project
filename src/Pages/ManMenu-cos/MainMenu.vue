<template>
    <div class="bg">
        <mdb-container fluid>
                <div class="wrapper">
                    <mdb-btn color="grey lighten-2" :class="['btn-menu',{'btn-active':index==ActiveIndex}]"
                        v-for="(item,index) in btnData" 
                        :key="index"
                        @click="menuBtnClickHandle(index)"
                        :title="item.introduce" >
                        <span class="iconfont" v-html="item.icon"></span>
                        <!-- <mdb-icon :icon="item.icon" size="2x" /> -->
                        <!-- <img :src="item.icon" class="img-fluid btn-img" alt="Responsive image"> -->
                        <p>{{item.name}}</p>
                    </mdb-btn>
                </div>
        </mdb-container>
    </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol,mdbBtn,mdbIcon,mdbBtnGroup } from 'mdbvue';
export default {
    name:'MainMenu',
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
              {name:'新建',icon:'&#xe639;',introduce:'新建'},
              {name:'打开',icon:'&#xe607;',introduce:'打开'},
              {name:'保存',icon:'&#xe601;',introduce:'保存'},
              {name:'导出',icon:'&#xe605;',introduce:'导出'},
              {name:'设置',icon:'&#xe642;',introduce:'设置'},
              {name:'传感器',icon:'&#xe61b;',introduce:'传感器'},
              {name:'帮助',icon:'&#xe630;',introduce:'帮助'},
              {name:'退出',icon:'&#xe64a;',introduce:'退出'}
          ],
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

<style scoped>
.bg {
    background-image: url(../../assets/images/bg1.jpg);
    background-size: cover;
}
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

