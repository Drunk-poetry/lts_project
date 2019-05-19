<template>
<!-- Table with panel -->
          <div class="table-wrapper">
              <!--Table-->
              <mdb-tbl class="table my-table mb-0" >
                  <!--Table head-->
                  <mdb-tbl-head class="table-header">
                      <tr>
                          <th>
                              <p class="form-check-label mr-0" for="checkbox">行号</p>
                          </th>
                          <th>
                              <p>工序</p>
                          </th>
                          <th class="th-lg">
                              <p>指令描述信息</p>
                          </th>
                          <th class="th-lg">
                              <p>备注</p>
                          </th>
                      </tr>
                    </mdb-tbl-head>
                  <!--Table head-->

                  <!--Table body-->
                  <mdb-tbl-body class="table-body">
                      <template v-for="(work,key,index2) in worksList">
                        <tr v-for="(row,index) in work" 
                        :key="index2*6+1 + index">
                          <th scope="row">
                              <label class="form-check-label" for="checkbox1">{{index2*6 + index +1}}</label>
                          </th>
                          <td :class="{'work-step':index==0}">{{row.workStep}}</td>
                          <td :class="{'work-step':index==0,'text-color':index==4,'dan-color':index==5}">{{row.message}}</td>
                          <td :class="{'dan-color':index==5}">{{row.more}}</td>
                        </tr>
                      </template>
                  </mdb-tbl-body>
                  <!--Table body-->
              </mdb-tbl>
              <!--Table-->
  </div>
  <!-- Table with panel -->
</template>

<script>
import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue'
export default {
    name: 'WorksList',
    components:{
        mdbTbl,
        mdbTblHead,
        mdbTblBody
    },
    data(){
        return {
            worksList: {
                work1:[
                    {
                        workStep:1,
                        message:'stepStart',
                        more:''
                    },{
                        workStep:null,
                        message:'绘图',
                        more:''
                    },{
                        workStep:null,
                        message:'图片：root_abs.png',
                        more:''
                    },{
                        workStep:null,
                        message:'图片：rod_aotsdds.png',
                        more:''
                    },{
                        workStep:null,
                        message:'文本：Text',
                        more:''
                    },{
                        workStep:null,
                        message:'-->dsakdkd[$45%3ihdosk]',
                        more:'这里是备注信息'
                    }
                ],
                work2:[
                    {
                        workStep:2,
                        message:'stepStart',
                        more:''
                    },{
                        workStep:null,
                        message:'绘图',
                        more:''
                    },{
                        workStep:null,
                        message:'图片：root_abs.png',
                        more:''
                    },{
                        workStep:null,
                        message:'图片：rod_aotsdds.png',
                        more:''
                    },{
                        workStep:null,
                        message:'文本：Text',
                        more:''
                    },{
                        workStep:null,
                        message:'-->dsakdkd[$45%3ihdosk]',
                        more:'这里是备注信息'
                    }
                ],
                work3:[
                    {
                        workStep:3,
                        message:'stepStart',
                        more:''
                    },{
                        workStep:null,
                        message:'绘图',
                        more:''
                    },{
                        workStep:null,
                        message:'图片：root_abs.png',
                        more:''
                    },{
                        workStep:null,
                        message:'图片：rod_aotsdds.png',
                        more:''
                    },{
                        workStep:null,
                        message:'文本：Text',
                        more:''
                    },{
                        workStep:null,
                        message:'-->dsakdkd[$45%3ihdosk]',
                        more:'这里是备注信息'
                    }
                ]
            }
        }
    }
}
</script>

<style lang="less">
.table-wrapper {
    text-align: center;
    background: #535353;
    border: none;
    .table-header {
        border: none;
        tr{
            color: #fafafa;
            border: none;
            th {
                padding: .14rem;
                background-color: #424242;
            }
        }
    }
    .table-body {
        color: #fafafa;
        th,td {
            padding: .2rem;
            border: none;
        }
        .work-step {
            color: #33b5e5;
        }
        .text-color {
            color: #76ff03;
        }
        .dan-color {
            color: #f44336 ;
        }
    }
    .my-table {
        tr:hover {
            background:#616161;
        }
    }
}
</style>

