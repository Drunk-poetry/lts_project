<template>
<mdb-container fluid class="my-container">
    <div class="wrapper">
        <mdb-btn color="grey lighten-2 btn1" 
            v-for="(btn ,index) in currentData"
            @click="btnHandle(index)"
            :key="btn.id">{{btn.text}}</mdb-btn>
    </div>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol,mdbBtn } from 'mdbvue';
import { mapState, mapActions } from 'vuex'
export default {
    name: 'BottomMenu',
    components:{
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbBtn
    },
    data(){
        return {
            btnData1:[
                {id:1,text:'新建',btnFun:'showit'},
                {id:2,text:'打开',btnFun:'showit'},
            ],
            btnData2:[
                {id:1,text:'显示',btnFun:'showit'},
                {id:2,text:'清除',btnFun:'showit'},
                {id:3,text:'清除所有',btnFun:'showit'},
                {id:4,text:'上移',btnFun:'showit'},
                {id:5,text:'下移',btnFun:'showit'},
                {id:6,text:'删除',btnFun:'showit'},
                {id:7,text:'保存',btnFun:'showit'},
                {id:8,text:'退出',btnFun:'showit'}
            ],
            currentData:[]//当前按钮组
        }
    },
    methods:{
        ...mapActions({
            changeModalShow:'changeModalShow',
            changeModalMsg:'changeModalMessage',
            changeModalType:'changeModalType'
        }),
        btnHandle:function(index) {
            if(!this.isCreated && index == 0) {//给新建按钮绑定事件
                this.changeModalMsg('确定  已保存 然后创建新的Program');
                this.changeModalShow(true);
                this.changeModalType('newFile')
            }
        }
    },
    computed:{
        ...mapState({
            isCreated:'isCreated'
        })
    },
    watch:{
        isCreated:function(){
            if(this.isCreated) {
                this.currentData.splice(0,this.currentData.length);
                this.currentData = this.currentData.concat([],this.btnData2);
                
            } else {
                this.currentData.splice(0,this.currentData.length);
                this.currentData = this.currentData.concat([],this.btnData1);
            }
            }
    },
    mounted(){
        if(this.isCreated) {
                this.currentData.splice(0,this.currentData.length);
                this.currentData = this.currentData.concat([],this.btnData2);
                
            } else {
                this.currentData.splice(0,this.currentData.length);
                this.currentData = this.currentData.concat([],this.btnData1);
            }
    }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/globalStyle.less');
.my-container {
    padding: 0;
}
.wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .btn1 {
        width: 80px;
        padding: 6px 0;
        font-size: 16px;
        line-height:16px;
        margin: 2px 5px 2px 0;
        .btn-hover
    }
}

</style>