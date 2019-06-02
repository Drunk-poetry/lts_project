<template>
        <div class="wrapper">
            <div class="my-center">
                 <div class="my-select">
                    <span>闪烁频率</span>
                    <select class="custom-select custom-select-sm" name="variable" v-model="FlashRate">
                        <option value="null">null</option>
                        <option value="global">global</option>
                        <option value="fast">fast</option>
                        <option value="gentle">gentle</option>
                    </select>
                </div>

                <div class="my-select">
                    <span>可见 控制</span>
                    <select class="custom-select custom-select-sm" name="variable" v-model="Visiable">
                        <option value="null">null</option>
                        <option value="整洁度">整洁度</option>
                        <option value="完整性">完整性</option>
                        <option value="精确度">精确度</option>
                        <option value="人工评价">人工评价</option>
                    </select>
                     <span>值变</span>
                    <select class="custom-select custom-select-sm" name="variable" v-model="VisiableValue" :disabled="CanVisiable">
                        <option value="default">FALSE->TRUE</option>
                        <option value="整洁度">整洁度</option>
                        <option value="完整性">完整性</option>
                        <option value="精确度">精确度</option>
                        <option value="人工评价">人工评价</option>
                    </select>
                </div>

                 <div class="my-select">
                    <span>动画 控制</span>
                    <select class="custom-select custom-select-sm" name="variable" v-model="AnimationControl">
                        <option value="null">null</option>
                        <option value="整洁度">整洁度</option>
                        <option value="完整性">完整性</option>
                        <option value="精确度">精确度</option>
                        <option value="人工评价">人工评价</option>
                    </select>
                     <span>值变</span>
                    <select class="custom-select custom-select-sm" name="variable" v-model="AnimationValue" :disabled="CanAnimation">
                        <option value="default">FALSE->TRUE</option>
                        <option value="整洁度">整洁度</option>
                        <option value="完整性">完整性</option>
                        <option value="精确度">精确度</option>
                        <option value="人工评价">人工评价</option>
                    </select>
                </div>

            </div>

            <div class="my-center">
                <div class="num-wrapper">
                    <!-- 位置 -->
                            <label>旋转角度</label>
                    <input type="number" class="num-input" placeholder="5" step="0.01" v-model="rotate">
                    <br>
                            <label>用时(秒) </label>
                    <input type="number" class="num-input" placeholder="5" step="0.01" v-model="time">
                            <br>
                            <label>重复次数</label>
                    <input type="number" class="num-input" placeholder="5" step="0.01"
                            v-model="repeatNumber">

                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="lockScale" v-model="isCycle">
                        <label class="custom-control-label" for="lockScale">循环播放</label>
                    </div>
                </div>
            </div>

        </div>
</template>

<script>
import { mdbInput,mdbBtn } from 'mdbvue'
export default {
    name: 'AnimationMenu',//考评
    components:{
      mdbInput,
      mdbBtn
    },
    data() {
        return {
            FlashRate:null,//闪烁频率
            Visiable:null,//是否可见
            AnimationControl:null,//动画控制
            VisiableValue:'default',//可见-值变
            AnimationValue:'default',//动画-值变
            rotate:0.00,//旋转角度
            repeatNumber:0.00,//重复次数
            time:0.00,//用时
            isCycle:false//是否循环
        }
    },
    computed:{
        CanVisiable:function(){
            if(this.Visiable == null || this.Visiable == 'null') {
                //this.VisiableValue = true;
                return true;
            } else {
                //this.VisiableValue = false;
                return false;
            }
            console.log(this.Visiable)
        },
        CanAnimation:function(){
            if(this.AnimationControl == null || this.AnimationControl =='null') {
                return true;
            } else {
                return false;
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
    .my-center {
        height: 100px;
        padding: 0 15px;
        border-left:1px solid #828282;
        border-right:1px solid #828282;
    }
    .my-select {
        display: flex;
        justify-content: flex-start;
        margin: 6px;
        font-size: 14px;
        span {
            min-width: 5rem;
            text-align: center;
            line-height: 25px;
        }
        select {
            font-size: 14px;
            line-height: 14px;
            height: 1.5rem;;
            width: 8rem;
        }
    }
    .p-btn {
        padding: 5px 15px;
    }
    .num-wrapper {
        margin-left: 10px;
        label {
            min-width: 4.3rem;
            text-align: center;
            margin-left: 20px;
        }
        .p-btn {
            margin-left: 15px;
        }
        .custom-checkbox {
            display: inline-block;
        }
    }
    .num-input {
        color: #4285F4;
        text-align: center;
        margin-left: 0px;
        margin-top: 5px;
        font-size: 14px;
        line-height: 14px;
        width: 55px;
        height: 20px;
        background: transparent;
        border: none;
        border-bottom: 1px solid #fafafa;
    }

}
</style>
