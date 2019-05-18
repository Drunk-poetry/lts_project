<template>
    <div class="work-container">
        <works-list />
    </div>
</template>

<script>
import WorksList from './WorkContainer/WorksList'
export default {
    name: 'WorkContainer',
    components:{
        WorksList
    }
}
</script>

<style lang="less" scoped>
.work-container {
    background-color: #2E2E2E;
    min-height: 20rem;
}
</style>

