<template>
    <div class="wrapper">
        <div class="img-content">
                <audio :src="videoUrl" ref="myVideo"></audio>
        </div>

        <div class="choose-content">
            <span class="file-name">{{imgName}}</span>
            <mdb-btn color="grey lighten-2" @click="chooseFile" class="my-btn">
                <span>选择音频</span>
            </mdb-btn>
            <input type="file" size="sm" class="file-input" accept=".mp3,.wav" ref="fileInput" @change="fileChange" />

            <div class="my-select">
                <span>备注</span>
                <input type="text" id="example3" class="form-control form-control-sm" v-model="remark">
            </div>
        </div>

        <div class="right">
            <!-- 视频参数 -->
            <div class="custom-control custom-checkbox my-checkbox">
                <input type="checkbox" class="custom-control-input" id="mute" v-model="mute">
                <label class="custom-control-label" for="mute">静音</label>
            </div>

            <div class="custom-control custom-checkbox my-checkbox">
                <input type="checkbox" class="custom-control-input" id="cycle" v-model="cycle">
                <label class="custom-control-label" for="cycle">循环</label>
            </div>

            <!-- 播放控制 -->
            <mdb-btn color="" id="myColor"
                    class="my-btn my-btn2"
                    @click="btnClick('play')">
                    <span class="iconfont" >&#xe731;</span>
            </mdb-btn>
            <mdb-btn color="" id="myColor"
                    class="my-btn my-btn2"
                    @click="btnClick('pause')">
                    <span class="iconfont" >&#xe61e;</span>
            </mdb-btn>
        </div>

        <!-- 消息提示 -->
        <mdb-modal :show="modal" @close="modal = false" side position="top-left" direction="left">
            <mdb-modal-header class="bg2">
                <mdb-modal-title>警告:</mdb-modal-title>
            </mdb-modal-header>
            <mdb-modal-body class="bg1">请先选择音频再进行此操作！</mdb-modal-body>
            <mdb-modal-footer class="bg1">
                <mdb-btn color="amber lighten-1" @click.native="modal = false">关闭</mdb-btn>
                <mdb-btn color="primary"  @click="chooseFile">选择音频</mdb-btn>
            </mdb-modal-footer>
        </mdb-modal>

    </div>
</template>

<script>
import { mdbInput,mdbBtn,mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter } from 'mdbvue'
export default {
    name:'AudioMenu',
    components:{
        mdbInput,
        mdbBtn,
        mdbModal,
        mdbModalHeader,
        mdbModalTitle,
        mdbModalBody,
        mdbModalFooter
    },
    data(){
        return{
            videoUrl:'',
            imgName:'请选择音频',
            testShow:false,
            mute:false,
            cycle:false,
            remark:'',
            modal: false
        }
    },
    methods:{
        chooseFile:function(){
            let fileInput = this.$refs.fileInput;
            fileInput.click();
        },
        fileChange:function(){
            let fileInput = this.$refs.fileInput;
            this.imgName = fileInput.files[0].name;
            let url = window.URL.createObjectURL(fileInput.files[0]);
            this.videoUrl = url;
            this.modal = false;
        },
        btnClick:function(instruction){
            if(this.videoUrl) {
                let video = this.$refs.myVideo;
                if(instruction == 'play') {
                    video.play();
                } else if(instruction == 'pause') {
                    video.pause();
                }
            } else {
                this.modal = true;
            }
        }
    },
    watch:{
        mute:function(val){
            let video = this.$refs.myVideo;
            if(val) {
                video.muted = 1;
            } else {
                video.muted = 0;
            }
        },
        cycle:function(val){
            let video = this.$refs.myVideo;
            video.loop=val;
        }
    }
}
</script>

<style lang="less" scoped>
.wrapper {
    min-height: 110px;
    display: flex;
    align-items: center;
    // 图片样式
    .img-content {
        height: 100%;
        padding: 0 15px;
        border-right: 1px solid #f8f8f8;
        .img{
            border: 1px solid #acacac;
            width: 5rem;
            video {
                width: 100%;
            }
        }
    }

    // 选择图片/备注
    .choose-content {
        padding-right: 15px;
        border-right: 1px solid #f8f8f8;
        margin-right: 15px;
        .file-name {
            display: inline-block;
            color: #f8f8f8;
            min-width: 8rem;
            text-align: center;
            border-bottom: 1px solid #80deea;
            margin-left: 15px;
        }
        .file-input {
            display: none;
        }
        .my-select {
            color: #f8f8f8;
            display: flex;
            margin: 6px;
            font-size: 14px;
            span {
                width: 4rem;
                text-align: center;
                line-height: 2rem;
            }
            input {
                color: #f8f8f8;
                font-size: 14px;
                padding: 2px;
                background: #757575;
            }
        }
    }
    // 图片参数 样式
    .right {
        color: #f8f8f8;
        .my-checkbox {
            display: flex;
            align-items: center;
            .color-btn {
                margin-left: 15px;
            }
        }
        .my-btn {
                span{
                    font-size: 22px;
                    line-height: 25px;
                }
                padding: 0 2px;
                min-width: 25px;
                height: 25px;
                border: 50%;
            }
        .my-color {
            display: none;
        }
        .num-input {
            color: #4285F4;
            text-align: center;
            margin-left: 15px;
            margin-top: 5px;
            font-size: 14px;
            line-height: 14px;
            width: 45px;
            height: 20px;
            background: transparent;
            border: none;
            border-bottom: 1px solid #fafafa;
        }
    }

    .my-btn {
        background-color: #757575;
        span {
            font-size: 18px;
            line-height: 18px;
        }
        display: inline-block;
        padding: 6px 10px;
        min-width: 30px;
        height: 30px;
        transition: .3s;
        &:hover{
            color: #f8f8f8;
            animation: pulse .3s;
            background-color: #4285F4!important;
        }
    }

    .bg1 {
        color: #f8f8f8;
        background: #757575;
    }
    .bg2 {
        color: #f8f8f8;
        background: #FF8800;
    }
}
</style>
