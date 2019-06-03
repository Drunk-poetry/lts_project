<template>
    <div class="wrapper">
        <div class="content">
            <label for="">program 文件路径</label>
            <input type="text" placeholder="./program/">
        </div>
        <div class="content">
            <label for="">visionTool 文件路径</label>
            <input type="text" placeholder="./visionTool/">
        </div>
        <br>
        <div class="content">
            <label for="">VDFGraphic 文件路径</label>
            <input type="text" placeholder="VDFGraphic/">
        </div>
        <div class="content">
            <label for="">VDFVideo 文件路径</label>
            <input type="text" placeholder="VDFVideo/">
        </div>
        <div class="content">
            <label for="">VDFAudio 文件路径</label>
            <input type="text" placeholder="VDFAudio/">
        </div>
    </div>
</template>

<script>
export default {
    name: 'pathSet'
}
</script>

<style lang="less" scoped>
.wrapper {
    .content {
        margin: 10px 0;
        label {
            margin: 0 15px;
            display: inline-block;
            min-width: 10rem;
        }
        input {
            color: #f8f8f8;
            border:1px solid #757575;
            background: #757575;
            outline: none;
            &::placeholder {
                color: #bdbdbd;
            }
        }
    }
}
</style>
