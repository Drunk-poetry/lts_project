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
                      <template v-for="(work,key,index2) in WorksList">
                        <tr v-for="(row,index) in work" 
                        :key="index2*(work.length) + index +1"
                        @click="workClick(row)">
                          <th scope="row">
                              <label class="form-check-label" for="checkbox1">{{index2*(work.length) + index +1}}</label>
                          </th>
                          <td :class="{'work-step':row.workStep}"  v-show="row.workStep">{{index2+1}}</td>
                          <td v-show="!row.workStep"></td>
                          <td :class="{'work-step':row.workStep,'start-color':row.start,'clear-color':row.clear,'text-color':row.text,'dan-color':row.progress,'warn-color':row.over}">{{row.message}}</td>
                          <td :class="{'dan-color':row.progress}">{{row.more}}</td>
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
            WorksList:this.$store.state.worksList
        }
    },
    methods:{
        workClick:function(work){
            if(work.attr) {
                this.$store.dispatch("changeWorkListIndex",work.id);
            }
            switch(work.attr) {
                case 'image':{
                    this.$store.dispatch("changeAttribute",'image')
                    this.$store.dispatch("changeSourceLink",work.url);
                    this.$store.dispatch("changeCurrentName",work.name);
                    break;
                }
                case 'text':{
                    this.$store.dispatch("changeAttribute",'text')
                    let text = work.message.split('：');//获得文本内容
                    this.$store.dispatch("changeCurrentName",text[1]);
                    break;
                }
                case 'draw':{
                    this.$store.dispatch("changeAttribute",'draw')
                    this.$store.dispatch("changeCurrentName",work.mesage);
                    break;
                }
                case 'video':{
                    this.$store.dispatch("changeAttribute",'video')
                    this.$store.dispatch("changeSourceLink",work.url);
                    this.$store.dispatch("changeCurrentName",work.name);
                    break;
                }
                case 'audio':{
                    this.$store.dispatch("changeAttribute",'audio')
                    this.$store.dispatch("changeSourceLink",work.url);
                    this.$store.dispatch("changeCurrentName",work.name);
                    break;
                }
                case 'count':{
                    this.$store.dispatch("changeAttribute",'count')
                    break;
                }
                case 'photo':{
                    this.$store.dispatch("changeAttribute",'photo')
                    let text = work.message.split('：');//获得文本内容
                    this.$store.dispatch("changeCurrentName",text[1]);
                    break;
                }
                case 'clear':{
                    this.$store.dispatch("changeAttribute",'clear')
                    break;
                }
                case 'test':{
                    this.$store.dispatch("changeAttribute",'appraisal')
                    break;
                }
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
        .warn-color {
            color: #33b5e5;
        }
        .clear-color {
            color:#ffbb33;
        }
        .start-color {
            color: #47e94f;
        }
    }
    .my-table {
        tr:hover {
            background:#616161;
        }
    }
}
</style>

