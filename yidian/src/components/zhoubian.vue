<template>
  <div class="zhoubian">
    <div class="banner">
        <img src="https://img2.1date1cake.com/themes/1d1c/images/cel.jpg" alt="">
    </div>
        <div class="top">
        <ul>
            <li><router-link to="/quanzhou">全部周边</router-link></li>
            <li><router-link to="/wuliao">派对物料</router-link></li>
            <li><router-link to="/tianpin">派对甜品</router-link></li>
            <li><router-link to="/lipin">生日礼品</router-link></li>
            <li><router-link to="/xianhua">生日礼鲜花</router-link></li>
        </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'zhoubian',
  data () {
    return {
    }
  },
  coputed:{

  }
}
</script>

<style lang="scss" scoped>
.zhoubian{
    width: 100%;
    height: 100%;
    .banner{
        width: 100%;
        img{
            width: 100%;
        }
    }
  .top{
    width: 80%;
    height: 70px;
    border-bottom:1px solid #CCC;
    margin: 0 auto;
    line-height: 80px;
    ul{
      li{
        float: left;
        margin-right: 20px;
        font-size: 14px;
        }
      }
    }
    .router-link-active {
        color: #F55000;
    }
}
</style>


