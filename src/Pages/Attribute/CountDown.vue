<template>
        <div class="wrapper">
            <div class="my-left">
                <div class="my-select">
                    <span>格式</span>
                    <select class="custom-select custom-select-sm" name="variable">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="my-select">
                    <span>重置IF</span>
                    <select class="custom-select custom-select-sm" name="variable">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="my-select">
                    <span>备注</span>
                    <input type="text" id="example3" class="form-control form-control-sm" v-model="remark">
                </div>
            </div>

            <!-- 不同阶段颜色设置 -->
            <div class="my-center color-set">
                <!-- 初始颜色 设置 -->
                <div style="display:flex;height:1.6rem;overflow:hidden">
                    <label for="">初始</label>
                    <input type="text" class="num-input" placeholder="24" min="5" max="50"
                            v-model="StartTime">
                    <span>秒</span>
                    <!-- 颜色选择 -->
                    <mdb-btn color="" id="StartColor"
                        class="my-btn color-btn"
                        @click="ColorBtnClick('start')">
                        <span class="iconfont" >&#xe632;</span>
                    </mdb-btn>
                    <!-- 触发颜色面板 -->
                    <input type="color" class="form-control form-control-sm my-color" 
                            ref="myStartColor" 
                            v-model="StartColor"
                            @change="ChangeColor('StartColor')">
                </div>

                <!-- 警告时间 -->
                <div style="display:flex;height:1.6rem;overflow:hidden">
                    <label for="">警告</label>
                    <input type="text" class="num-input" placeholder="8" min="5" max="50"
                            v-model="WarnTime">
                    <span>秒</span>
                    <!-- 颜色选择 -->
                    <mdb-btn color="" id="WarnColor"
                        class="my-btn color-btn"
                        @click="ColorBtnClick('warn')">
                        <span class="iconfont" >&#xe632;</span>
                    </mdb-btn>
                    <!-- 触发颜色面板 -->
                    <input type="color" class="form-control form-control-sm my-color" 
                            ref="myWarnColor" 
                            v-model="WarnColor"
                            @change="ChangeColor('WarnColor')">
                    <div class="custom-control custom-checkbox my-checkbox">
                        <input type="checkbox" class="custom-control-input" id="WarningFlash" v-model="WarningFlash">
                        <label class="custom-control-label" for="WarningFlash">闪烁</label>
                    </div>
                </div>

                <!-- 超出 设置 -->
                <div style="display:flex;height:1.6rem;overflow:hidden">
                    <label for="">超出</label>
                    <input type="text" class="num-input" placeholder="8" min="5" max="50"
                            v-model="OverTime">
                    <span>秒</span>
                    <!-- 颜色选择 -->
                    <mdb-btn color="" id="OverColor"
                        class="my-btn color-btn"
                        @click="ColorBtnClick('over')">
                        <span class="iconfont" >&#xe632;</span>
                    </mdb-btn>
                    <!-- 触发颜色面板 -->
                    <input type="color" class="form-control form-control-sm my-color" 
                            ref="myOverColor" 
                            v-model="OverColor"
                            @change="ChangeColor('OverColor')">
                    <div class="custom-control custom-checkbox my-checkbox">
                        <input type="checkbox" class="custom-control-input" id="OverFlash" v-model="OverFlash">
                        <label class="custom-control-label" for="OverFlash">闪烁</label>
                    </div>
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
                        @change="ChangeColor('TextColor')">

                <!-- 测试 -->
                <!-- <p style="color:red;">{{remark}} +{{StartColor}} + {{WarnColor}} + {{OverColor}} + {{CurrentColor}}</p> -->
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
            remark:'',//备注
            FontFamily:'微软雅黑',//字体
            FontSize: '24',//字体大小
            FontArr:['微软雅黑','黑体','宋体','华文行楷'],//字体
            CurrentColor:'',
            StartColor:'',
            WarnColor:'',
            OverColor:'',
            StartTime:30,
            WarnTime:8,
            OverTime:10,
            WarningFlash:false,
            OverFlash:false,
            isActive0:false,
            isActive1:false,
            isActive2:false,
            isActive3:false,
            isActive4:false
        }
    },
    methods:{
        btnClick:function(index) {
            this['isActive'+index] = !this['isActive'+index];
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
        ChangeColor:function(ele){//改变颜色后执行
            switch(ele) {
                case 'TextColor':{
                    let colorBtn = document.getElementById('colorBtn');
                    colorBtn.style.backgroundColor = this.CurrentColor;
                    console.log(colorBtn);
                    break;
                }
                case 'StartColor':{
                    let colorBtn = document.getElementById('StartColor');
                    colorBtn.style.backgroundColor = this.StartColor;
                    break;
                }
                case 'WarnColor':{
                    let colorBtn = document.getElementById('WarnColor');
                    colorBtn.style.backgroundColor = this.WarnColor;
                    break;
                }
                case 'OverColor':{
                    let colorBtn = document.getElementById('OverColor');
                    colorBtn.style.backgroundColor = this.OverColor;
                    break;
                }
            }
        },
        ColorBtnClick:function(val){
            switch(val) {
                case 'start':{
                    this.$refs.myStartColor.click()
                    break
                }
                case 'warn':{
                    this.$refs.myWarnColor.click()
                    break
                }
                case 'over':{
                    this.$refs.myOverColor.click()
                    break
                }
            }
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
            font-size: 16px;
            span {
                width: 6rem;
                text-align: center;
            }
            select,input {
                color: #000;
                height: 25px;
                font-size: 14px;
                padding: 2px;
            }
            input {
                color: #f8f8f8;
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
    .color-set {
        .num-input {
            border: none;
            width: 1.5rem;
            font-size: 1rem;
            margin: 2px 1px auto 5px;
        }
        .color-btn {
            min-width: 25px;
            height: 25px;
            margin: 0;
            margin-left: 15px;
            span {
                font-size: 20px;
            }
        }
        .my-checkbox {
            margin-left: 15px;
        }
    }
}
</style>
