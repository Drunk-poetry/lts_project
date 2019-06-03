<template>
    <div style="height:26rem;overflow:auto;">
      <mdb-tbl bordered sm>
        <mdb-tbl-head textWhite class="text-center">
          <tr>
            <th>ID</th>
            <th>X</th>
            <th>Y</th>
            <th>width</th>
            <th>height</th>
            <th>bgColor</th>
            <th>seColor</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body class="text-center table-body">
          <tr v-for="(row,index) in ScreenData" :key="row.id" @click="chooseId(index)" :class="{active:deleteId==index}">
            <th>{{row.id}}</th>
            <td>{{row.x}}</td>
            <td>{{row.y}}</td>
            <td>{{row.width}}</td>
            <td>{{row.height}}</td>
            <td><input type="color" class="table-number" :value="row.bgColor"></td>
            <td><input type="color" class="table-number" :value="row.seColor"></td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>
        <div class="menu">
            <mdb-btn size="sm" color="grey darken-3" @click="addData">添加</mdb-btn>
            <mdb-btn size="sm" color="grey darken-3"  @click="deleteData">删除</mdb-btn>
        </div>
    </div>
</template>

<script>
import { mdbTbl, mdbTblHead, mdbTblBody,mdbBtn } from 'mdbvue';
export default {
    name: 'userSet',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody,
      mdbBtn
    },
    data(){
        return {
            // 存放数据
            ScreenData:[
                {
                    id:1,
                    x:0,
                    y:0,
                    width:1920,
                    height:1080,
                    bgColor:'#2E2E2E',
                    seColor:'#4285F4'
                }
            ],
            //需要删除数据的id
            deleteId:-1
        }
    },
    methods:{
        //为数组添加数据
        addData:function(){
            //id 为 数组最后一个数据的id加一
            let id = this.ScreenData[this.ScreenData.length-1].id + 1;
            let newScreen = {
                id:id,
                x:0,
                y:0,
                width:1920,
                height:1080,
                bgColor:'#2E2E2E',
                seColor:'#4285F4'
            }
            this.ScreenData.push(newScreen);
        },
        //删除数据——根据deleteId进行删除
        deleteData:function(){
            this.ScreenData.splice(this.deleteId,1);//删除
            this.deleteId = -1;
        },
        chooseId:function(id,event){
            this.deleteId = id;
            console.log(event)
        }
    }
}
</script>

<style lang="less">
.table-body {
    color:#f8f8f8;
    .table-number {
        display: inline-block;
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
    }
    .custom-select {
        color: #f8f8f8;
        width: 8rem;
        background: #3f3f3f;
    }
    tr {
        transition: all .2s;
        &:hover {
            background: #616161;
        }
        &.active {
            background-color: #7283a7;
        }
    }
}
.menu {
    position: absolute;
    bottom: 0;
}
</style>
