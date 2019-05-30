<template>
    <div>
        <my-progress v-if="true" />
        <text-menu v-if="true" />
        <drawing-menu v-if="true" />
        <image-menu v-if="true" />
        <video-menu v-if="true" />
        <audio-menu v-if="true" />
        <count-down v-if="true" />
        <photo-menu v-if="true" />
        <clear-menu v-if="true" />
        <appraisal-menu v-if="true" />
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
import ClearMenu from '../Attribute/ClearMenu'
import AppraisalMenu from '../Attribute/AppraisalMenu'

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
        PhotoMenu,
        ClearMenu,
        AppraisalMenu
    }
}
</script>

