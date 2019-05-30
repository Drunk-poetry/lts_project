<template>
        <div class="wrapper">
            <div class="my-left">
                <div class="my-select">
                    <span>投影输出</span>
                    <select class="custom-select custom-select-sm" name="variable" v-model="ScreenName">
                        <option value="0">Screnn1</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="my-select">
                    <span>注释</span>
                    <input type="text"  class="form-control form-control-sm" v-model="remark">
                </div>
            </div>
            <div class="my-center">
                 <div class="custom-control custom-checkbox my-checkbox">
                    <input type="checkbox" class="custom-control-input" id="isClearAll" v-model="isClearAll">
                    <label class="custom-control-label" for="isClearAll">清除所有(包含免清除内容)</label>
                </div>
            </div>
        </div>
</template>

<script>
import { mdbInput,mdbBtn } from 'mdbvue'
export default {
    name: 'ClearMenu',
    components:{
      mdbInput,
      mdbBtn
    },
    data() {
        return {
            ScreenName:'0',//投影输出
            remark:'',//备注
            isClearAll:false,//含时间戳
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
                width: 6.5rem;
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
        margin-top: 10px;
        border-right:1px solid #828282;
    }
}
</style>
