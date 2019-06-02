<template>
    <div>
        <my-progress v-if="CurrentAttribute == 'progress'" />
        <text-menu v-if="CurrentAttribute == 'text'" />
        <drawing-menu v-if="CurrentAttribute == 'draw'" />
        <image-menu v-if="CurrentAttribute == 'image'" />
        <video-menu v-if="CurrentAttribute == 'video'" />
        <audio-menu v-if="CurrentAttribute == 'audio'" />
        <count-down v-if="CurrentAttribute == 'count'" />
        <photo-menu v-if="CurrentAttribute == 'photo'" />
        <clear-menu v-if="CurrentAttribute == 'clear'" />
        <appraisal-menu v-if="CurrentAttribute == 'appraisal'" />
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
    },
    computed:{
        CurrentAttribute(){
            return this.$store.state.CurrentAttribute;
        }
    }
}
</script>

