<template>
  <div class="hello">
    <div class="top">
      <ul>
        <li><router-link to="quanbu">全部蛋糕</router-link></li>
        <li><router-link to="xinpin">新品上市</router-link></li>
        <li><router-link to="yingji">应季明星</router-link></li>
        <li><router-link to="renqi">人气经典</router-link></li>
        <li><router-link to="dashi">大师作品</router-link></li>
        <li><router-link to="taocan">套餐</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
    }
  },

}
</script>

<style lang="scss" scoped>
.hello{
  width: 100%;
  height: 100%;
  .top{
    width: 80%;
    height: 60px;
    border-bottom:1px solid #CCC;
    margin: 0 auto;
    line-height: 60px;
    ul{
      li{
        float: left;
        margin-right: 20px;
      }
    }
  }

    .router-link-active {
    color: #F55000;
  }
}
</style>


