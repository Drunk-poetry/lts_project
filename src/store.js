import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, //严格模式
  state: {
    CurrentAttribute:'progress',//当前属性
    WorkListIndex:0,//当前索引
    WorkSourceLink:null,//当前资源地址
    CurrentName:null,//当前name
    worksList:{},
    isCreated:false,//是否创建新文件
    worksList2: {
        work1:[
            {
                workStep:null,
                message:'开始',
                more:'',
                start:true
            },
            {
                workStep:true,
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
                more:'',
                text:true
            },{
                workStep:null,
                message:'-->dsakdkd[$45%3ihdosk]',
                more:'这里是备注信息',
                progress:true
            }
            ,{
                workStep:null,
                message:'结束',
                more:'',
                over:true
            }
        ],
        work2:[
            {
                workStep:null,
                message:'开始',
                more:'',
                start:true
            },
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
                more:'',
                text:true
            },{
                workStep:null,
                message:'-->dsakdkd[$45%3ihdosk]',
                more:'这里是备注信息',
                progress:true
            }
            ,{
                workStep:null,
                message:'结束',
                more:'',
                over:true
            }
        ]
    }
  },
  mutations: {
      // 改变当前属性
    changeAttribute: (state,val) => {
        state.CurrentAttribute = val;
    },
    //改变资源地址
    changeSourceLink: (state,val) => {
        state.WorkSourceLink = val;
    },
    //改变name
    changeCurrentName: (state,val) => {
        state.CurrentName = val;
    },
    //改变当前索引
    changeWorkListIndex: (state,val) => {
        state.WorkListIndex = val;
    },
    // 添加workList
    AddWorkStepAfter: (state,val) => {
        let name = val.name;
        let work = val.work;

        //判断是否有该工程
        if(name in state.worksList)
        {
            work.id = state.worksList[name].length-1;
            let index = val.index || state.worksList[name].length-1;
            state.worksList[name].splice(index,0,work)
        } else {
            // 没有工程的话创建初始工程
            let start = {
                id:0,
                workStep:null,
                message:'开始',
                more:'',
                start:true
            }
            let end = {
                id:999,
                workStep:null,
                message:'结束',
                more:'',
                over:true
            }
            work.id = 1;
            let progress = [start,work,end];
            //采用set添加参数，实现视图更新
            Vue.set(state.worksList, name,progress)
        }
        // 赋值 当前插入元素的 id
        state.WorkListIndex = work.id;
        //console.log(state.WorkListIndex)
    },
    //修改workList属性
    ChangeWorkData: (state,val) => {
        console.log(val.id);
        state.worksList.work1.splice(val.id,1,val)
    }
  },
  actions: {//解决异步问题
    // 提交改变属性事件给mutations
    changeAttribute: (context,val) => {
        context.commit('changeAttribute',val);
    },
    //改变资源地址
    changeSourceLink: (context,val) => {
        context.commit('changeSourceLink',val);
    },
    //改变name
    changeCurrentName: (context,val) => {
        context.commit('changeCurrentName',val);
    },
    //改变当前索引
    changeWorkListIndex: (context,val) => {
        context.commit('changeWorkListIndex',val);
    },
    //触发添加workList的mutations
    AddWorkStepAfter: (context,val) => {
        context.commit('AddWorkStepAfter',val);
    },
    //修改workList属性
    ChangeWorkData: (context,val) => {
        context.commit("ChangeWorkData",val);
    }
  }
})
