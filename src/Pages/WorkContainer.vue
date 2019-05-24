<template>
    <div class="work-container">
        <works-list v-if="false" />
        <file-choose />
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
    }
}
</script>

<style lang="less" scoped>

</style>

