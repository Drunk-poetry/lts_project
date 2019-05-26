<template>
    <div>
        <my-progress v-if="false" />
        <text-menu v-if="false" />
        <drawing-menu v-if="false" />
        <image-menu v-if="true" />
    </div>
</template>

<script>
import Progress from '../Attribute/Progress'
import TextMenu from '../Attribute/TextMenu'
import DrawingMenu from '../Attribute/DrawingMenu'
import ImageMenu from '../Attribute/ImageMenu'

export default {
    name:'AttributeMenu',
    components:{
        myProgress:Progress,
        TextMenu,
        DrawingMenu,
        ImageMenu
    }
}
</script>

