<template>
<mdb-container fluid class="my-container">
    <div class="wrapper">
        <mdb-btn color="grey lighten-2 btn1" 
            v-for="btn in btnData2"
            :key="btn.id">{{btn.text}}</mdb-btn>
    </div>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol,mdbBtn } from 'mdbvue';
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
            ]
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