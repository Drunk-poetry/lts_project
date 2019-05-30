<template>
        <div class="wrapper">
            <div class="my-left">
                <div class="my-select">
                    <span>质量要求</span>
                    <input class="form-control form-control-sm" v-model="QualityRequire">
                </div>
                <div class="my-select">
                    <span>备注</span>
                    <input type="text"  class="form-control form-control-sm" v-model="remark">
                </div>
            </div>
            <div class="my-center">
                 <div class="my-select">
                    <span>考评要点</span>
                    <select class="custom-select custom-select-sm" name="variable" v-model="Points">
                        <option value="时限">时限</option>
                        <option value="整洁度">整洁度</option>
                        <option value="完整性">完整性</option>
                        <option value="精确度">精确度</option>
                        <option value="人工评价">人工评价</option>
                    </select>
                </div>
                <div class="num-wrapper">
                    <!-- 透明度 -->
                    <label>分值</label>
                    <input type="number" class="num-input" placeholder="5" min="0" max="100" step="1"
                            v-model="Score">
                </div>
            </div>

            <div class="my-center">
                <p>完成该步骤花费的时间低于或者超出设定的时间限值，则扣分</p>
                <div class="num-wrapper">
                    <!-- 透明度 -->
                    <label>上限</label>
                    <input type="number" class="num-input" placeholder="5" min="0" max="100" step="1"
                            v-model="MaxValue">
                            <br>
                    <label>下限</label>
                    <input type="number" class="num-input" placeholder="5" min="0" max="100" step="1"
                            v-model="MinValue">
                </div>
            </div>

        </div>
</template>

<script>
import { mdbInput,mdbBtn } from 'mdbvue'
export default {
    name: 'AppraisalMenu',//考评
    components:{
      mdbInput,
      mdbBtn
    },
    data() {
        return {
            QualityRequire:'',//质量要求
            remark:'',//备注
            Points:'时限',
            Score:5,//分值
            MaxValue:60,//上限
            MinValue:37,//下限
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
    }
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
    .num-wrapper {
        margin-left: 10px;
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
</style>
