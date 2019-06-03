<template>
     <div>
         <!-- 消息提示 -->
        <mdb-modal :show="isShowMsg" @close="changeModalShow(false)" side position="top-left" direction="left">
            <mdb-modal-header class="bg2">
                <mdb-modal-title>警告:</mdb-modal-title>
            </mdb-modal-header>
            <mdb-modal-body class="bg1">{{ModalMessage}}</mdb-modal-body>
            <mdb-modal-footer class="bg1">
                <mdb-btn color="amber lighten-1" @click="changeModalShow(false)">关闭</mdb-btn>
                <mdb-btn color="primary"  @click="btnSureDo">确认</mdb-btn>
            </mdb-modal-footer>
        </mdb-modal>
     </div>
</template>

<script>
import { mdbInput,mdbBtn,mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter } from 'mdbvue'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'MyModal',
    components:{
        mdbInput,
        mdbBtn,
        mdbModal,
        mdbModalHeader,
        mdbModalTitle,
        mdbModalBody,
        mdbModalFooter
    },
    data(){
        return {
            
        }
    },
    methods:{
        ...mapActions({
            changeModalShow:'changeModalShow',
            changeCreated:'changeCreated'
        }),
        btnSureDo:function(){
            this.changeModalShow(false);
            switch(this.ModalType) {
                case 'newFile': {//确认新建文件
                    this.changeCreated(true);
                    this.$router.push('/insert');
                }
            }
        }
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
.bg1 {
        color: #f8f8f8;
        background: #757575;
    }
.bg2 {
    color: #f8f8f8;
    background: #FF8800;
}
</style>
