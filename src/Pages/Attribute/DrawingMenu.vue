<template>
        <div class="wrapper">
            <div class="content">
                <!-- 带选择框的容器 -->

               <div class="custom-control custom-checkbox my-checkbox">
                    <input type="checkbox" class="custom-control-input" id="drawBorder" v-model="drawBorder">
                    <label class="custom-control-label" for="drawBorder">轮廓</label>
                    <!-- 颜色选择 -->
                    <mdb-btn color="" id="borderColor"
                        class="my-btn color-btn"
                        @click="btnClick(1)">
                        <span class="iconfont" >&#xe632;</span>
                    </mdb-btn>
                    <!-- 触发颜色面板 -->
                    <input type="color" class="form-control form-control-sm my-color" 
                            ref="myBorderColor" 
                            v-model="borderColor"
                            @change="ChangeBorderColor">
                </div>

                <div class="custom-control custom-checkbox my-checkbox">
                    <!-- 颜色选择2 -->
                    <input type="checkbox" class="custom-control-input" id="drawFill" v-model="drawFill">
                    <label class="custom-control-label" for="drawFill">填充</label>
                    <mdb-btn color="" id="fillColor"
                        class="my-btn color-btn"
                        @click="btnClick(2)">
                        <span class="iconfont" >&#xe632;</span>
                    </mdb-btn>
                    <input type="color" class="form-control form-control-sm my-color" 
                            ref="myFillColor" 
                            v-model="fillColor"
                            @change="ChangeFillColor">
                </div>
                <!-- 是否闭合线条 -->
                <div class="custom-control custom-checkbox my-checkbox">
                    <input type="checkbox" class="custom-control-input" id="drawClose" v-model="drawClose">
                    <label class="custom-control-label" for="drawClose">闭合</label>
                </div>
            </div>

                <!-- 容器2 -->
            <div class="content">
                    <!-- 线条样式 -->
                    <label for="">线形：</label>
                    <select class="custom-select custom-select-sm my-select" v-model="borderStyle">
                        <option selected>默认</option>
                        <option value="solid">solid</option>
                        <option value="dash1">dash1</option>
                        <option value="dash2">dash2</option>
                        <option value="dash3">dash3</option>
                    </select>

                    <!-- 线宽 -->
                    <label>线宽</label>
                    <input type="number" class="num-input" placeholder="24" min="1" max="50"
                            v-model="borderWidth">
                <div class="my-left">
                        <span>备注：</span>
                        <input type="text" id="example3" class="form-control form-control-sm" v-model="remark">
                </div>
            </div>
        </div>
</template>

<script>
import { mdbInput,mdbBtn } from 'mdbvue'
export default {
    name: 'DrawingMenu',
    components:{
      mdbInput,
      mdbBtn
    },
    data() {
        return {
            drawBorder:'',//轮廓
            drawClose:'',//闭合
            drawFill:'',//填充
            borderColor:'',//边框颜色
            fillColor:'',//填充颜色
            borderStyle:'solid',//线条样式
            borderWidth:2,//线条宽度
            remark:''//备注
        }
    },
    methods:{
        btnClick:function(index) {
            switch(index) {
                case 1:{
                    let colorInput = this.$refs.myBorderColor;
                    colorInput.click();
                    break;
                }//加粗
                case 2:{
                    let colorInput = this.$refs.myFillColor;
                    colorInput.click();
                    break;
                }//选色
            }
        },
        ChangeBorderColor:function(event){//改变颜色后执行
            let colorBtn = document.getElementById('borderColor');
            colorBtn.style.backgroundColor = this.borderColor;
            console.log(colorBtn)
        },
        ChangeFillColor:function(event){//改变颜色后执行
            let colorBtn = document.getElementById('fillColor');
            colorBtn.style.backgroundColor = this.fillColor;
            console.log(colorBtn)
        }
    }
}
</script>

<style lang="less" scoped>
.wrapper {
    color: #fafafa;
    min-height: 110px;
    display: flex;
    align-items: center;
    .my-left {
        height: 100%;
        width: 20rem;
        margin-top: 5px;
        display: flex;
        span {
            width: 50px;
            text-align: center;
        }
        input {
            width: 12rem;
            color: #f8f8f8;
            font-size: 14px;
            padding: 2px;
            background: #757575;
        }
    }
    .content {
        border-right: 1px solid #fafafa;
        padding: 0 2rem;
        .my-btn {
            span {
                font-size: 22px;
                line-height: 25px;
            }
            background: #616161;
            display: inline-block;
            padding: 0;
            min-width: 25px;
            height: 25px;
            margin: 6px 1px 2px;
            transition: .3s;
            &:hover{
                color: #f8f8f8;
                animation: pulse .3s;
                background-color: #4285F4!important;
            }
        }
        .my-color {
            display: none;
        }
        .my-checkbox {
            display: flex;
            align-items: center;
            .color-btn {
                margin-left: 15px;
            }
        }
        .my-select {
            font-size: 14px;
            width: 7rem;
            margin-right: 1rem;
        }
        .num-input {
            color: #4285F4;
            text-align: center;
            margin-left: 15px;
            margin-top: 5px;
            font-size: 14px;
            line-height: 14px;
            width: 40px;
            height: 20px;
            background: transparent;
            border: none;
            border-bottom: 1px solid #fafafa;
        }
    }
    
}
</style>
