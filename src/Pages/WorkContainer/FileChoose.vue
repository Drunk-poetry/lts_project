<template>
<div>
      <mdb-tbl class="table-wrapper" striped>
        <mdb-tbl-head color="black" textWhite class="table-header">
          <tr>
            <th>文件名</th>
            <th>文件大小</th>
            <th>创建时间</th>
            <th>修改时间</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body class="table-body">
          <tr v-for="(file,index) in FileData" :key="index">
            <th>{{file.name}}</th>
            <td>{{file.size}} kb</td>
            <td>{{file.createTime}}</td>
            <td>{{file.alterTime}}</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>
    </div>
</template>

<script>
import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue'
export default {
    name: 'FileChoose',
    components:{
        mdbTbl,
        mdbTblHead,
        mdbTblBody
    },
    data(){
        return{
            FileData:[
                {name:'我是文件名sad',size:'8080',createTime:'2019-5-6 09:14:58',alterTime:'2019-5-15 09:25:45'},
                {name:'我是文件名sad',size:'8080',createTime:'2019-5-6 09:14:58',alterTime:'2019-5-15 09:25:45'},
                {name:'我是文件名sad',size:'8080',createTime:'2019-5-6 09:14:58',alterTime:'2019-5-15 09:25:45'},
                {name:'我是文件名sad',size:'8080',createTime:'2019-5-6 09:14:58',alterTime:'2019-5-15 09:25:45'}
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.table-wrapper {
    text-align: center;
    background: #535353;
    .table-header {
        border: none;
        tr{
            color: #fafafa;
            th {
                font-weight: bold;
                padding: .14rem;
                background-color: #424242;
            }
        }
    }
    .table-body {
        color: #fafafa;
        tr{
            th,td {
                padding: .2rem;
                border: none;
            }
            &:hover {
                background:#616161;
            }
        }
    }
}
</style>

