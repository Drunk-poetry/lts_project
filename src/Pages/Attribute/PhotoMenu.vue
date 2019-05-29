<template>
        <div class="wrapper">
            <div class="my-left">
                <div class="my-select">
                    <span>图片名</span>
                    <input class="form-control form-control-sm" v-model="ImageName">
                </div>
                <div class="my-select">
                    <span>备注</span>
                    <input type="text"  class="form-control form-control-sm" v-model="remark">
                </div>
            </div>
            <div class="my-center">
                 <div class="custom-control custom-checkbox my-checkbox">
                    <input type="checkbox" class="custom-control-input" id="IncludeTime" v-model="IncludeTime">
                    <label class="custom-control-label" for="IncludeTime">含时间戳</label>
                </div>
                <div class="custom-control custom-checkbox my-checkbox">
                    <input type="checkbox" class="custom-control-input" id="IncludeId" v-model="IncludeId">
                    <label class="custom-control-label" for="IncludeId">含工程序号</label>
                </div>
            </div>
        </div>
</template>

<script>
import { mdbInput,mdbBtn } from 'mdbvue'
export default {
    name: 'TextMenu',
    components:{
      mdbInput,
      mdbBtn
    },
    data() {
        return {
            TextBtns:['&#xe68d;','&#xe6ef;','&#xe628;','&#xe618;','&#xe61a;','&#xe632;'],
            ImageName:'',//图片名
            remark:'',//备注
            IncludeTime:false,//含时间戳
            IncludeId:false//含工程序号
        }
    },
    methods:{
       
    }
}
</script>

<style lang="less" scoped>
.wrapper {
    color: #fafafa;
    min-height: 110px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    .my-left {
        height: 100%;
        .my-select {
            display: flex;
            margin: 6px;
            font-size: 14px;
            span {
                width: 6rem;
                text-align: center;
                line-height: 25px;
            }
            input {
                color: #f8f8f8;
                font-size: 14px;
                padding: 2px;
                background: #757575;
            }
        }
    }
    .my-center {
        height: 80px;
        padding: 0 30px;
        border-left:1px solid #828282;
        border-right:1px solid #828282;
    }
}
</style>
