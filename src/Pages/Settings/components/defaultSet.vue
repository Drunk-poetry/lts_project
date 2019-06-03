<template>
    <ol class="wrapper">
        <li>
            <p>启动模式 <span class="point">编辑模式需要 教学者/管理员 用户权限</span></p>
            <div class="custom-control custom-radio run-type">
                <input type="radio" class="custom-control-input" name="RunType" id="running">
                <label class="custom-control-label" for="running">运行模式</label>
            </div>
            <div class="custom-control custom-radio run-type">
                 <input type="radio" class="custom-control-input" name="RunType" id="edit">
                <label class="custom-control-label" for="edit">编辑模式</label>
            </div>
            <br>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                <label class="custom-control-label" for="defaultUnchecked">禁止用户触发作业引导系统运行</label>
            </div>
        </li>

        <li>
            <p>全局闪烁时间</p>
            <div style="display:flex;height:1.6rem;" class="all-flash">
                <span></span>
                <input type="number" class="num-input" placeholder="1000" min="10">
                <span>On Time(毫秒)</span>
                <input type="number" class="num-input" placeholder="1000" min="10">
                <span>Off Time(毫秒)</span>
            </div>
        </li>

        <li>
            <p>杂项设置</p>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="o1">
                <label class="custom-control-label" for="o1">缓存绘图</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="o2">
                <label class="custom-control-label" for="o2">禁止手动终止工作流程</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="o3">
                <label class="custom-control-label" for="o3">运行状态下打开控制板</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="o4">
                <label class="custom-control-label" for="o4">打开时显示历史记录</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="o5">
                <label class="custom-control-label" for="o5">打开时启动视觉检测</label>
            </div>
        </li>
    </ol>
</template>

<script>
export default {
    name: 'defaultSet'
}
</script>

<style lang="less">
ol.wrapper {
    margin-left: 20px;
    li {
        margin-bottom: 30px;
        .point {
            color:aquamarine;
        }
        &:after {
            content:'';
            display: block;
            clear: both;
        }
        p:first-of-type {
            margin-bottom: 10px;
        }
        .all-flash {
            .num-input {
                color: #4285F4;
                text-align: center;
                margin-left: 15px;
                margin-top: 5px;
                font-size: 14px;
                line-height: 14px;
                width: 4rem;
                height: 20px;
                background: transparent;
                border: none;
                border-bottom: 1px solid #fafafa;
            }
            span:first-of-type {
                width: 1.8rem;
                height: 1.8rem;
                background-color: #4285F4;
            }
        }
    }
    .run-type {
        float: left;
        &:nth-of-type(2) {
            margin-left: 15px;
        }
    }
}
</style>
