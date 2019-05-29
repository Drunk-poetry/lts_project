<template>
    <div>
        <my-progress v-if="false" />
        <text-menu v-if="false" />
        <drawing-menu v-if="false" />
        <image-menu v-if="false" />
        <video-menu v-if="false" />
        <audio-menu v-if="false" />
        <count-down v-if="false" />
        <photo-menu />
    </div>
</template>

<script>
import Progress from '../Attribute/Progress'
import TextMenu from '../Attribute/TextMenu'
import DrawingMenu from '../Attribute/DrawingMenu'
import ImageMenu from '../Attribute/ImageMenu'
import VideoMenu from '../Attribute/VideoMenu'
import AudioMenu from '../Attribute/AudioMenu'
import CountDown from '../Attribute/CountDown'
import PhotoMenu from '../Attribute/PhotoMenu'

export default {
    name:'AttributeMenu',
    components:{
        myProgress:Progress,
        TextMenu,
        DrawingMenu,
        ImageMenu,
        VideoMenu,
        AudioMenu,
        CountDown,
        PhotoMenu
    }
}
</script>

