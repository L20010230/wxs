<template>
  <div class="quanzhou">
    <div class="quan">
      <div class="top1">
        <p>全部蛋糕</p>
        <p>All Cakes</p>
      </div>
      <div class="ge">
        <ul>
          <li v-for="(item,index) in zhoubian" :key="index">
            <p class="p1"><img :src="item.Url" alt=""></p>
            <p class="p2">{{item.Stagename}}</p>
            <p class="p3">{{item.Price}}</p>
            <button>加入购物车</button>
          </li>
        </ul>

      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'quanzhou',
  data () {
    return {
      zhoubian:""
    }

  },
  methods:{
  },
   mounted() {
      this.$store.dispatch("z").then((res)=>{
      this.zhoubian=res.data
    
    });}
}
</script>

<style lang="scss" scoped>
.quanzhou{
    width: 100%;
    height: 1000px;
    .quan{
      width: 80%;
      margin: 0 auto;
      .top1{
        width: 140px;
        height: 40px;
        border-left: #FF5000 8px solid;
        margin: 50px auto;
        text-align: center;
        :first-child{
          font-size: 21px; 
        }
        :last-child{
          font-size: 12px;
        }
      }
      .ge{
        li{
          width: 33.33%;
          height: 340px;
          text-align: center;
          float: left;
          .p1{
            width: 100%;
            height: 210px;
          }
          img{
            display: block;
            margin: 0 auto;
            width:50%;
            cursor: pointer;
				    transition: all 0.6s;
            }
          img:hover{
            transform: scale(1.1);
          }
          .p2{
            color: #885f3f;
            font-size: 14px; 
          }
          .p3{
            color: #ff6600;
            margin: 5px 0;
            font-size: 12px;
            display: block;
          }
          .p4{
            color: #777;
            font-size: 12px;
            margin: 0px 0 10px 0;
          }
          button{
            display: block;
            margin: 0 auto;
            text-align: right;
            font-size: 12px;
            border-radius: 10px;
            width: 78px;
            height: 20px;
            line-height: 20px;
            color: #fff;
            padding-right: 8px;
            background-color: #d1ab80;
            border: 1px solid transparent;
            outline: none;
          }
        }
      }
    }
}
</style>


