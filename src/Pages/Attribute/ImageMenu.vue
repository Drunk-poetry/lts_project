<template>
    <div class="wrapper">
        <div class="img-content">
            <div class="img" :style="{'background-image':'url('+imgUrl+')'}"></div>
        </div>

        <div class="choose-content">
            <span class="file-name">{{imgName}}</span>
            <mdb-btn color="grey lighten-2" @click="chooseFile" class="my-btn">
                <span>选择图片</span>
            </mdb-btn>
            <input type="file" size="sm" class="file-input" accept="image/*" ref="fileInput" @change="fileChange" />

            <div class="my-select">
                <span>备注</span>
                <input type="text" id="example3" class="form-control form-control-sm" v-model="remark">
            </div>
        </div>

        <div class="right">
            <!-- 图片参数 -->
            <div class="custom-control custom-checkbox my-checkbox">
                <input type="checkbox" class="custom-control-input" id="testShow" v-model="testShow">
                <label class="custom-control-label" for="testShow">在考评模式下保持显示</label>
            </div>

            <div class="custom-control custom-checkbox my-checkbox">
                <input type="checkbox" class="custom-control-input" id="colorCard" v-model="colorCard">
                <label class="custom-control-label" for="colorCard">开启颜色滤片</label>
                <mdb-btn color="" id="myColor"
                    class="my-btn color-btn"
                    @click="btnClick">
                    <span class="iconfont" >&#xe632;</span>
                </mdb-btn>
                <!-- 触发颜色面板 -->
                <input type="color" class="form-control form-control-sm my-color" 
                        ref="myColor" 
                        v-model="myColor"
                        @change="ChangeMyColor">
            </div>

            <div>
                <!-- 透明度 -->
                <label>透明度</label>
                <input type="number" class="num-input" placeholder="1.00" min="0" max="1" step="0.01"
                        v-model="colorOpacity">
            </div>
        </div>
    </div>
</template>

<script>
import { mdbInput,mdbBtn } from 'mdbvue'
export default {
    name:'ImageMenu',
    components:{
        mdbInput,
        mdbBtn
    },
    data(){
        return{
            imgUrl:'',//图片地址
            imgName:'请选择图片',//图片名
            testShow:false,//是否考评模式下显示
            colorCard:false,//是否显示蒙版颜色
            myColor:'',//蒙版颜色
            colorOpacity:1,//蒙版透明度
            remark:''//注释
        }
    },
    methods:{
        chooseFile:function(){//选择文件的按钮事件
            let fileInput = this.$refs.fileInput;
            fileInput.click();//触发input
        },
        fileChange:function(){//文件选择后执行
            let fileInput = this.$refs.fileInput;
            this.imgName = fileInput.files[0].name;//获得文件名
            let url = window.URL.createObjectURL(fileInput.files[0]);//获得文件地址
            this.imgUrl = url;
        },
        btnClick:function(){//颜色按钮绑定事件
            let colorInput = this.$refs.myColor;
            colorInput.click();//触发颜色input事件
        },
        ChangeMyColor:function(event){//改变颜色后执行
            let colorBtn = document.getElementById('myColor');
            colorBtn.style.backgroundColor = this.myColor;
        }
    }
}
</script>

<style lang="less" scoped>
.wrapper {
    min-height: 110px;
    display: flex;
    align-items: center;
    // 图片样式
    .img-content {
        height: 100%;
        padding: 0 15px;
        border-right: 1px solid #f8f8f8;
        .img{
            border: 1px solid #acacac;
            height: 5rem;
            width: 5rem;
            background-size: cover;
            background-position: center;
        }
    }

    // 选择图片/备注
    .choose-content {
        padding-right: 15px;
        border-right: 1px solid #f8f8f8;
        margin-right: 15px;
        .file-name {
            display: inline-block;
            color: #f8f8f8;
            min-width: 8rem;
            text-align: center;
            border-bottom: 1px solid #80deea;
            margin-left: 15px;
        }
        .file-input {
            display: none;
        }
        .my-select {
            color: #f8f8f8;
            display: flex;
            margin: 6px;
            font-size: 14px;
            span {
                width: 4rem;
                text-align: center;
                line-height: 2rem;
            }
            input {
                color: #f8f8f8;
                font-size: 14px;
                padding: 2px;
                background: #757575;
            }
        }
    }
    // 图片参数 样式
    .right {
        color: #f8f8f8;
        .my-checkbox {
            display: flex;
            align-items: center;
            .color-btn {
                margin-left: 15px;
            }
            .my-btn {
                span{
                    font-size: 22px;
                    line-height: 25px;
                }
                padding: 0 2px;
                min-width: 25px;
                height: 25px;
            }
        }
        .my-color {
            display: none;
        }
        .num-input {
            color: #4285F4;
            text-align: center;
            margin-left: 15px;
            margin-top: 5px;
            font-size: 14px;
            line-height: 14px;
            width: 45px;
            height: 20px;
            background: transparent;
            border: none;
            border-bottom: 1px solid #fafafa;
        }
    }

    .my-btn {
        background-color: #757575;
        span {
            font-size: 18px;
            line-height: 18px;
        }
        display: inline-block;
        padding: 6px 10px;
        min-width: 30px;
        height: 30px;
        transition: .3s;
        &:hover{
            animation: pulse .3s;
            background-color: #4285F4!important;
        }
    }
}
</style>
