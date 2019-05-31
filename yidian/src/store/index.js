import Vuex from "vuex"
import Vue from "vue"

import axios from '../plugen/axios/index'

Vue.use(Vuex);
export default new Vuex.Store({

    state:{
      abc:1,
      quanbu:[
          {
              "Stagename":"榴芒双拼",
              "Url":"https://img2.1date1cake.com/images/201804/thumb_img/71_thumb_G_1523323288653.jpg",
              "Price":"198元/1.0磅",
              "Name":"榴莲与芒果的经典双拼"
          },
          {
              "Stagename":"芒莓二重奏",
              "Url":"https://img1.1date1cake.com/images/201708/thumb_img/474_thumb_G_1501659151453.jpg",
              "Price":"198元/1.0磅",
              "Name":"蓝莓红丝绒蛋糕"
          },
          {
              "Stagename":"草莓公主",
              "Url":"https://img2.1date1cake.com/images/201903/thumb_img/342_thumb_G_1552012281479.jpg",
              "Price":"198元/1.0磅",
              "Name":"草莓奶油蛋糕"
          },
          {
              "Stagename":"榴芒双拼",
              "Url":"https://img2.1date1cake.com/images/201804/thumb_img/71_thumb_G_1523323288653.jpg",
              "Price":"198元/1.0磅",
              "Name":"榴莲与芒果的经典双拼"
          },
          {
              "Stagename":"芒莓二重奏",
              "Url":"https://img1.1date1cake.com/images/201708/thumb_img/474_thumb_G_1501659151453.jpg",
              "Price":"198元/1.0磅",
              "Name":"蓝莓红丝绒蛋糕"
          },
          {
              "Stagename":"草莓公主",
              "Url":"https://img2.1date1cake.com/images/201903/thumb_img/342_thumb_G_1552012281479.jpg",
              "Price":"198元/1.0磅",
              "Name":"草莓奶油蛋糕"
          },
          {
              "Stagename":"榴芒双拼",
              "Url":"https://img2.1date1cake.com/images/201804/thumb_img/71_thumb_G_1523323288653.jpg",
              "Price":"198元/1.0磅",
              "Name":"榴莲与芒果的经典双拼"
          },
          {
              "Stagename":"芒莓二重奏",
              "Url":"https://img1.1date1cake.com/images/201708/thumb_img/474_thumb_G_1501659151453.jpg",
              "Price":"198元/1.0磅",
              "Name":"蓝莓红丝绒蛋糕"
          },
          {
              "Stagename":"草莓公主",
              "Url":"https://img2.1date1cake.com/images/201903/thumb_img/342_thumb_G_1552012281479.jpg",
              "Price":"198元/1.0磅",
              "Name":"草莓奶油蛋糕"
          }
      ],
      
      zhoubian:[
          {
              "Stagename":"生日场景大礼包（含五套餐位小包）",
              "Url":"https://img1.1date1cake.com/images/201904/thumb_img/464_thumb_G_1555466678002.jpg",
              "Price":"128元	/套",
          },
          {
              "Stagename":"儿童餐位小包（一位）",
              "Url":"https://img1.1date1cake.com/images/201801/thumb_img/463_thumb_G_1515740311482.jpg",
              "Price":"30元	/套",
          },
          {
              "Stagename":"甜蜜蛋糕-气球装饰套餐",
              "Url":"https://img1.1date1cake.com/images/201809/thumb_img/708_thumb_G_1538208598410.jpg",
              "Price":"68元",
          },
          {
              "Stagename":"宝宝百日宴-气球装饰套餐",
              "Url":"https://img1.1date1cake.com/images/201809/thumb_img/703_thumb_G_1538208671105.jpg",
              "Price":"68元",
          },
          {
              "Stagename":"福寿天齐-气球装饰套餐",
              "Url":"https://img2.1date1cake.com/images/201809/thumb_img/706_thumb_G_1538208627486.jpg",
              "Price":"68元",
          },
          {
              "Stagename":"壹点壹客数字蜡烛",
              "Url":"https://img1.1date1cake.com/images/201901/thumb_img/139_thumb_G_1547806530670.jpg",
              "Price":"5元	/支",
          }
      ]
 
  },
  getters: {
   fang(state,geta){
    // return this.
   }
  },
  mutations: {
    
  }, 
  actions:{
  	fan(context,data){
      return  axios({
          method:"get",
          url:"/index",
          params:data
        })
      },
    z(context,data){
        return  axios({
            method:"get",
            url:"/z",
            params:data
          })
        },
    x(context,data){
          return  axios({
              method:"get",
              url:"/x",
              params:data
            })
    }
  },
  modules: {
    
  }
})
