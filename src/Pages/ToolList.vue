<template>
    <mdb-container fluid>
        <mdb-row class="Tool-wrapper">
            <mdb-col col="sm-5" class="btn-group">
                <mdb-btn-group size="sm">
                    <mdb-btn color="grey darken-1" class="btn-border"
                        :active="index == activeIndex"
                         v-for="(tool,index) in tools" 
                         :key="index" 
                         @click="toolsClickHandle(index)">{{tool}}</mdb-btn>
                </mdb-btn-group>
            </mdb-col>
            <mdb-col col="sm-3" class="text-truncate text-monospace tool-Title"><p>{{toolTitle}}</p></mdb-col>
            <mdb-col col="sm-4"><p class="float-left">list-super</p><p class="float-right">v1.011</p></mdb-col>
        </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol,mdbBtn,mdbIcon,mdbBtnGroup } from 'mdbvue';
export default {
  name: "ToolList",
  components:{
      mdbBtn,
      mdbIcon,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtnGroup
  },
  data(){
      return {
          tools:["L T S","控制","插入","属性","位置","动画"],
          toolTitle: "当前编辑内容",
          activeIndex:0
      }
  },
  methods:{
      toolsClickHandle:function(index){
          switch(index) {
              case 0: {
                  this.$router.push('/');
                  break;
              }
              case 1: {
                  this.$router.push('/control');
                  break;
              }
              case 2: {
                  this.$router.push('/insert');
                  break;
              }
              case 3: {
                  this.$router.push('/attribute');
                  break;
              }
              case 4: {
                  this.$router.push('/position');
                  break;
              }
              case 5: {
                  this.$router.push('/animation');
                  break;
              }
          }
          this.activeIndex = index;
      }
  }
}
</script>

<style>
p{
    margin: 0;
    padding: 0;
}
.Tool-wrapper {
    min-height: 1.7rem;
    background: #616161;
    color: #fff;
}
.Tool-wrapper .tool-Title {
    color: #ffbb33;
}
.btn-group {
    height: 1.7rem;
    margin: 0;
    padding: 0;
}
.Tool-wrapper  .btn-border:hover {
    @btnHover
}
</style>

