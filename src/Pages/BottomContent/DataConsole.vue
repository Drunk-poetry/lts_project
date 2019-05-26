<template>
<mdb-container fluid class="my-container">
    <div class="wrapper">
        <div class="left">
            <mdb-btn color="grey lighten-2 btn1" class="active" @click="changeShow(false)">历史记录</mdb-btn>
            <mdb-btn color="grey lighten-2 btn1" @click="changeShow(true)">输出信息</mdb-btn>
        </div>
        <div class="right">
            <mdb-btn color="grey lighten-2 btn1" @click="unfold">
                <span :class="['iconfont','my-icon',{'icon-show':isShow}]">&#xe626;</span> 展开
            </mdb-btn>
            <mdb-btn color="grey lighten-2 btn1"><span class="iconfont my-icon2">&#xe622;</span> 清空</mdb-btn>
        </div>

        <div class="console" ref="consoleTable">
            <!-- 输出 -->
            <div v-if="isOutput">
                <table class="table">
                    <thead>
                        <tr>
                            <th width="80"></th>
                            <th width="160">时间</th>
                            <th width="80">类型</th>
                            <th>信息</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="console in consoleDatra" :key="console.id">
                            <td> </td>
                            <td>{{console.time}}</td>
                            <td>{{console.type}}</td>
                            <td>{{console.message}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- 历史记录 -->
            <div class="history" v-if="!isOutput">
                <ul>
                    <li v-for="his in historyData" :key="his.id">{{his.message}}</li>
                </ul>
            </div>
        </div>
    </div>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol,mdbBtn,mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
export default {
    name: 'DataConsole',
    components:{
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbBtn,
        mdbTbl,
        mdbTblHead,
        mdbTblBody
    },
    data(){
        return {
            isShow:false,
            isOutput:false,
            consoleDatra:[
                {id:1,time:'2019-12-12 12:59:59',type:'String',message:'this is message about console'},
                {id:2,time:'2019-12-12 12:59:59',type:'String',message:'this is message about console'},
                {id:3,time:'2019-12-12 12:59:59',type:'String',message:'this is message about console'},
                {id:4,time:'2019-12-12 12:59:59',type:'String',message:'this is message about console'}
            ],
            historyData:[
                {id:1,message:'dshuaid dbsauid dhuwiaddhuw dhuwia',handle:false},
                {id:2,message:'dshuaid dbsauid dhuwiaddhuw dhuwia',handle:false},
                {id:3,message:'dshuaid dbsauid dhuwiaddhuw dhuwia',handle:false}
            ]
        }
    },
    methods:{
        unfold:function(){
            this.isShow = !this.isShow;
            if(this.isShow) {
                this.$refs.consoleTable.style.height= "250px";
            } else {
                 this.$refs.consoleTable.style.height= "0";
            }
        },
        changeShow:function(isok){
            isok ? this.isOutput = true : this.isOutput = false;
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/globalStyle.less');
.my-container {
    padding: 0;
}
.wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background: #616161;
    &:after{
        display: block;
        clear: both;
    }
    .btn1 {
        width: 80px;
        padding: 6px 0;
        font-size: 16px;
        line-height:16px;
        margin: 0;
        .my-icon {
            font-size: 18px;
            display: inline-block;
            transition: all .5s;
        }
        .my-icon2 {
            font-size: 16px;
        }
        .icon-show {
            transform: rotate(-180deg);
        }
        .btn-hover
    }
    .console {
        background: #333;
        color: #fafafa;
        transition: all .5s;
        width: 100%;
        height: 0;
        overflow: hidden;
        .table {
            color: #fafafa;
            thead {
                tr {
                    th {
                        font-size: 16px;
                        font-weight: 600;
                        padding: 3px;
                        margin: 0;
                        border: none;
                        text-align: center;
                    }
                }
            }
            tbody {
                tr{
                    transition: all .3s;
                    &:nth-of-type(odd) {
                        background: #424242 ;
                    }
                    &:hover {
                        background:#3b465e !important;
                        transform: scale(1.02,1.02);
                    }
                }
            }
            tr {
                height: 10px;
                td {
                    font-size: 14px;
                    height: 20px;
                    padding: 2px;
                    border: none;
                    vertical-align: middle;
                    text-align: center;
                    min-width: 1rem;
                }
            }
        }
        .history {
            ul{
                li{
                    padding-left: 1rem;
                    &:hover {
                        background: #3b465e;
                    }
                }
            }
        }
    }
}

</style>