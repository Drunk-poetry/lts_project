<template>
        <div class="wrapper">
            <div class="my-left">
                <div class="my-select">
                    <span>文本</span>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" v-model="MainText"></textarea>
                </div>
                <div class="my-select">
                    <span>备注</span>
                    <input type="text" id="example3" class="form-control form-control-sm" v-model="remark">
                </div>
            </div>
            <div class="my-center">
                <div style="display:flex">
                    <select class="custom-select custom-select-sm my-select" v-model="FontFamily">
                        <option selected>默认</option>
                        <option v-for="(font,index) in FontArr"
                                :key=index
                                :value="font">{{font}}</option>
                    </select>

                    <!-- Group of default radios - option 3 -->
                    <input type="number" class="num-input" placeholder="24" min="5" max="50"
                            v-model="FontSize">
                </div>



                <mdb-btn color="grey lighten-2" 
                    :class="['my-btn',{'btn-active':isActive0}]"
                    @click="btnClick(0)">
                    <span class="iconfont" >&#xe68d;</span>
                </mdb-btn>

                <mdb-btn color="grey lighten-2" 
                    :class="['my-btn',{'btn-active':isActive1}]"
                    @click="btnClick(1)">
                    <span class="iconfont" >&#xe6ef;</span>
                </mdb-btn>

                <mdb-btn color="grey lighten-2" 
                    :class="['my-btn',{'btn-active':isActive2}]"
                    @click="btnClick(2)">
                    <span class="iconfont" >&#xe628;</span>
                </mdb-btn>

                <mdb-btn color="grey lighten-2" 
                    :class="['my-btn',{'btn-active':isActive3}]"
                    @click="btnClick(3)">
                    <span class="iconfont" >&#xe618;</span>
                </mdb-btn>

                <mdb-btn color="grey lighten-2" 
                    :class="['my-btn',{'btn-active':isActive4}]"
                    @click="btnClick(4)">
                    <span class="iconfont" >&#xe61a;</span>
                </mdb-btn>

                <mdb-btn color="" id="colorBtn"
                    class="my-btn"
                    @click="btnClick(5)">
                    <span class="iconfont" >&#xe632;</span>
                </mdb-btn>
                <input type="color" class="form-control form-control-sm my-color" 
                        ref="myColor" 
                        v-model="CurrentColor"
                        @change="ChangeColor">



                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked" v-model="IsMultiple">
                    <label class="custom-control-label" for="defaultUnchecked">多行文本</label>
                </div>
                <!-- 测试 -->
                <!-- <p style="color:red;">{{MainText}} + {{remark}} + {{IsMultiple}} + {{FontFamily}} ++ {{CurrentColor}}</p> -->
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
            MainText:'',//主要文本
            remark:'',//备注
            IsMultiple:false,//多行文本
            FontFamily:'微软雅黑',//字体
            FontSize: '24',//字体大小
            FontArr:['微软雅黑','黑体','宋体','华文行楷'],//字体
            CurrentColor:'',
            isActive0:false,
            isActive1:false,
            isActive2:false,
            isActive3:false,
            isActive4:false
        }
    },
    methods:{
        btnClick:function(index) {
            this['isActive'+index] = ! this['isActive'+index];
            switch(index) {
                case 0:{
                    break;
                }//加粗
                case 1:{
                    break;
                }//斜体
                case 2:{
                    break;
                }//下划线
                case 3:{
                    break;
                }//删除线
                case 4:{
                    break;
                }//
                case 5:{
                    let colorInput = this.$refs.myColor;
                    colorInput.click();
                    break;
                }//选色
            }
        },
        ChangeColor:function(event){//改变颜色后执行
            let colorBtn = document.getElementById('colorBtn');
            colorBtn.style.backgroundColor = this.CurrentColor;
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
                width: 4rem;
                text-align: center;
            }
            textarea,input {
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
        #colorBtn {
                background: #616161;
                &:hover {
                    color: #f8f8f8;
                }
            }
        .my-select {
            width: 10rem;
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
        .my-btn {
            span {
                font-size: 25px;
                line-height: 25px;
            }
            display: inline-block;
            padding: 0;
            min-width: 30px;
            height: 30px;
            margin: 6px 1px 2px;
            transition: .3s;
            &:hover{
                animation: pulse .3s;
                background-color: #4285F4!important;
            }
        }
        .btn-active {
            background-color:#00C851 !important;
        }
        .my-color {
            display: none;
        }
    }
}
</style>
