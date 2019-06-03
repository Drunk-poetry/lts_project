<template>
     <div>
         <!-- 消息提示 -->
        <mdb-modal :show="isShow" @close="closeSetting" size="lg">
            <mdb-modal-header class="bg2 set-header" color="light-blue lighten-2">
                <mdb-modal-title class="title"><span class="iconfont logo">&#xe642;</span>设置</mdb-modal-title>
            </mdb-modal-header>
            <mdb-modal-body class="bg1 set-content">
                    <div class="btn-wrapper">
                        <mdb-btn-group col="sm-5" class="btn-group">
                        <mdb-btn-group size="sm">
                            <mdb-btn color="grey darken-1" class="btn-border"
                                :active="index == activeIndex"
                                v-for="(tool,index) in tools" 
                                :key="index" 
                                @click="toolsClickHandle(index)">{{tool}}</mdb-btn>
                        </mdb-btn-group>
                    </mdb-btn-group>
                    </div>
                    <div>
                        <default-set v-show="activeIndex == 0" />
                        <user-set v-show="activeIndex == 1" />
                        <path-set v-show="activeIndex == 2" />
                        <screen-set v-show="activeIndex == 5" />
                    </div>
            </mdb-modal-body>
            <mdb-modal-footer class="bg1">
                <mdb-btn size="sm" color="primary" @click="closeSetting">保存</mdb-btn>
                <mdb-btn size="sm" color="primary"  @click="closeSetting">取消</mdb-btn>
                <mdb-btn size="sm" color="amber lighten-1" >重置</mdb-btn>
            </mdb-modal-footer>
        </mdb-modal>
     </div>
</template>

<script>
import defaultSet from './components/defaultSet'
import userSet from './components/userSet'
import pathSet from './components/pathSet'
import ScreenSet from './components/ScreenOut'
import { mdbBtnGroup,mdbInput,mdbBtn,mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter,mdbCol } from 'mdbvue'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'SettingContent',
    components:{
        mdbBtnGroup,
        mdbInput,
        mdbBtn,
        mdbModal,
        mdbModalHeader,
        mdbModalTitle,
        mdbModalBody,
        mdbModalFooter,
        mdbCol,
        defaultSet,
        userSet,
        pathSet,
        ScreenSet
    },
    props:['isShow'],
    data(){
        return {
            activeIndex:0,
            tools:["常规","用户","路径","硬件","变量","画面输出","数据"],
        }
    },
    methods:{
       closeSetting:function(){
           this.$emit("hideSetting",false);
       },
        toolsClickHandle:function(index){//导航
          this.activeIndex = index;
      },
    },
    computed:{
        ...mapState({
            ModalType:'ModalType',
            isShowMsg:'isShowMes',
            ModalMessage:'ModalMessage'
        })
    }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/globalStyle.less');
.bg1 {
        color: #f8f8f8;
        background: #3f3f3f;
    }
.bg2 {
    color: #f8f8f8;
    background: #FF8800;
}
.set-header {
    padding: 3px;
    .title {
        font-size: 1rem;
        .logo {
            font-size: 1.1rem;
            margin: 0 10px;
        }
    }
}
.set-content {
    padding: 0;
    height: 30rem;
    overflow: hidden;
    .btn-wrapper {
        background:#616161;
    }
    .btn-group {
        height: 1.7rem;
        margin: 0;
        padding: 0;
        .btn-border {
            .btn-hover
        }
        button {
            padding: 3px 9px;
        }
    }
}
</style>
