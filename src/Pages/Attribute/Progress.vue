<template>
        <div class="wrapper">
            <div class="my-left">
                <div class="my-select">
                    <span>变量</span>
                    <select class="custom-select custom-select-sm" name="variable">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="my-select">
                    <span>值变</span>
                    <select class="custom-select custom-select-sm" name="variable">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div class="my-center">
                <!-- Group of default radios - option 1 -->
                <div class="custom-control custom-radio my-input">
                <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios">
                <label class="custom-control-label" for="defaultGroupExample1">Step Next</label>
                <input type="text" class="step-input" placeholder="1">
                </div>

                <!-- Group of default radios - option 2 -->
                <div class="custom-control custom-radio my-input">
                <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" checked>
                <label class="custom-control-label" for="defaultGroupExample2">Step Pre</label>
                <input type="text" class="step-input" placeholder="1">
                </div>

                <!-- Group of default radios - option 3 -->
                <div class="custom-control custom-radio my-input">
                <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios">
                <label class="custom-control-label" for="defaultGroupExample3">Step GoTo</label>
                <input type="text" class="step-input" placeholder="1">
                </div>

                <!-- Group of default radios - option 3 -->
                <div class="custom-control custom-radio my-input">
                <input type="radio" class="custom-control-input" id="defaultGroupExample4" name="groupOfDefaultRadios">
                <label class="custom-control-label" for="defaultGroupExample4">启动Program</label>
                <input type="text" class="step-input" placeholder="1">
                </div>

                <!-- Group of default radios - option 3 -->
                <div class="custom-control custom-radio my-input">
                <input type="radio" class="custom-control-input" id="defaultGroupExample5" name="groupOfDefaultRadios">
                <label class="custom-control-label" for="defaultGroupExample5">结束Program</label>
                <input type="text" class="step-input" placeholder="1">
                </div>

            </div>
        </div>
</template>

<script>
import { mdbInput } from 'mdbvue'
export default {
    name: 'Progress',
    components:{
      mdbInput
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
            span {
                width: 4rem;
                text-align: center;
            }
            select {
                height: 1.7rem;
                font-size: .8rem;
            }
        }
    }
    .my-center {
        display: flex;
        min-width: 450px;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        height: 80px;
        padding: 0 30px;
        border-left:1px solid #828282;
        border-right:1px solid #828282;
        .my-input {
            height: 25px;
            input {
                float: left;
            }
            label {
                float: left;
                min-width: 5rem;
            }
            .step-input {
                color: #4285F4;
                text-align: center;
                margin-left: 15px;
                font-size: 14px;
                line-height: 14px;
                width: 40px;
                height: 20px;
                float: left;
                background: transparent;
                border: none;
                border-bottom: 1px solid #fafafa;
                &:focus {
                    background: #828282;
                }
            }
            &::after {
                display: block;
                clear: both;
            }
        }
    }
}
</style>
