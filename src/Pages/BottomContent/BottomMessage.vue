<template>
    <div class="mes-wrapper">
        <ul>
            <li>当前行：<span>{{WorkListIndex}}-{{this.CurrentType}}</span></li>
            <li>当前用户：<span>lts_super</span></li>
            <li>投影Canvas：<span>Canvas-1</span></li>
            <li>传感器：<span>未连接</span></li>
            <li>控制面板：<span>已关闭</span></li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'BottomMessage',
    data(){
        return {
            CurrentType:'文件类型'
        }
    },
    computed:{//映射 state的内容
        ...mapState({
            WorkListIndex:"WorkListIndex",
            worksList:"worksList"
        })
    },
    watch:{
        WorkListIndex:function(){
            if(this.worksList) {
                this.CurrentType = this.worksList.work1[this.WorkListIndex].attr;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.mes-wrapper {
    color: #a8a8a8;
    width: 100%;
    overflow: hidden;
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
        li {
            display: inline-block;
            padding: 0 5px;
            border-right: 1px solid #f8f8f8;
            span {
                color: aquamarine;
            }
        }
    }
}
</style>
