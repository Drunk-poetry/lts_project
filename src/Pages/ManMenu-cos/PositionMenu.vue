<template>
        <div class="wrapper">
            <div class="my-center">
                 <div class="my-select">
                    <span>投影输出</span>
                    <select class="custom-select custom-select-sm" name="variable" v-model="Screens">
                        <option value="1">Screen-1</option>
                        <option value="整洁度">整洁度</option>
                        <option value="完整性">完整性</option>
                        <option value="精确度">精确度</option>
                        <option value="人工评价">人工评价</option>
                    </select>
                </div>
                <div class="num-wrapper">
                    <mdb-btn color="grey lighten-2" class="p-btn">辨识</mdb-btn>
                </div>
            </div>

            <div class="my-center">
                <div class="num-wrapper">
                    <!-- 位置 -->
                    <label>x：</label>
                    <input type="number" class="num-input" placeholder="5" step="0.01" v-model="p_x">
                    <label>y：</label>
                    <input type="number" class="num-input" placeholder="5" step="0.01" v-model="p_y">
                            <label>旋转</label>
                    <input type="number" class="num-input" placeholder="5" step="0.01" v-model="rotate">
                            <br>
                            <label>宽：</label>
                    <input type="number" class="num-input" placeholder="5" step="0.01"
                            v-model="width"
                            @click="changeWho = 'width'">
                            <label>高：</label>
                    <input type="number" class="num-input" placeholder="5" step="0.01" 
                            v-model="height"
                            @click="changeWho = 'height'">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="lockScale" v-model="lockScale">
                        <label class="custom-control-label" for="lockScale">锁定比例</label>
                    </div>
                    <mdb-btn color="grey lighten-2" class="p-btn" @click="reset">重置</mdb-btn>
                </div>
            </div>
             <div class="my-center">
                 <img src="../../assets/images/position1.png" alt="">
             </div>

        </div>
</template>

<script>
import { mdbInput,mdbBtn } from 'mdbvue'
export default {
    name: 'PositionMenu',//考评
    components:{
      mdbInput,
      mdbBtn
    },
    data() {
        return {
            Screens:'1',
            p_x:64,
            p_y:64,
            rotate:0.00,
            width:50,
            height:25.0,
            rate:0,
            changeWho:'width',
            lockScale:false
        }
    },
    methods:{
        reset:function(){
            this.lockScale = false;
            this.p_x = 64;
            this.p_y = 64;
            this.width = 50;
            this.height = 25;
            this.rotate = 0;
        }
    },
    watch:{
        width:function(val,oldv) {
            if(this.changeWho == 'width' && this.lockScale) {
                this.height = val / this.rate;
            }
            //console.log(this.changeWho)
        },
        height:function(val,oldv) {
            if(this.changeWho == 'height' && this.lockScale) {
                this.width = val * this.rate;
            }
            //console.log(this.changeWho)
        },
        lockScale:function(val) {
            if(val) {
                this.rate = this.width/this.height;
            } else {
                this.rate = 0;
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
        height: 80px;
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
            width: 8rem;
        }
    }
    .p-btn {
        padding: 5px 15px;
    }
    .num-wrapper {
        margin-left: 10px;
        label {
            min-width: 2rem;
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
