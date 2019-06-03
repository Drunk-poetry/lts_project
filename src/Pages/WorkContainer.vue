<template>
    <div class="work-container">
        <works-list v-if="isCreated" />
        <file-choose v-if="!isCreated" />
    </div>
</template>

<script>
import WorksList from './WorkContainer/WorksList'
import FileChoose from './WorkContainer/FileChoose'
export default {
    name: 'WorkContainer',
    components:{
        WorksList,
        FileChoose
    },
    data(){
        return {
            showWorkList:false
        }
    },
    computed:{
        isCreated:function(){
            return this.$store.state.isCreated;
        }
    }
}
</script>

<style lang="less" scoped>
.work-container {
    box-sizing: border-box;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    height: calc(100vh - 217.2px);
}
</style>

