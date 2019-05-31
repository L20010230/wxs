<template>
  <div id="app">
    <div class="retsun" v-show="a">
      <div class="retsunz">
        <a href="return false" class="sunleizhens">
          <div class="sunleizhen">
          </div>
        </a>
        <div class="sunleizhensh">
          <div class="sunleizhenshu">
            <router-link to='/' class="sunleizhenshua">
             
              <span class="sunleizhenshuai">
                首页
              </span>
            </router-link>
          </div>
          <div class="split_line"></div>
          <div class="sunleizhenshu">
            <router-link to='/dangao' class="sunleizhenshua"><span class="sunleizhenshuai">蛋糕</span></router-link>
          </div>
          <div class="split_line"></div>
          <div class="sunleizhenshu">
            <router-link to='/' class="sunleizhenshua"><span class="sunleizhenshuai">鲜花</span></router-link>
          </div>
          <div class="split_line"></div>
          <div class="sunleizhenshu">
            <router-link to='/zhoubian' class="sunleizhenshua"><span class="sunleizhenshuai">生日周边</span></router-link>
          </div>
          <div class="split_line"></div>
          <div class="sunleizhenshu">
            <router-link to='/yuanliaozhilv' class="sunleizhenshua"><span class="sunleizhenshuai">企业专区</span></router-link>
          </div>
          <div class="split_line"></div>
          <div class="sunleizhenshu">
            <router-link to='/Data' class="sunleizhenshua"><span class="sunleizhenshuai">儿童生日会</span></router-link>
          </div>
          <div class="split_line"></div>
          <div class="sunleizhenshu">
            <router-link to='/pinpai' class="sunleizhenshua"><span class="sunleizhenshuai">品牌故事</span></router-link>
          </div>
        </div>
        <div class="load">
          <a href="">
            <img src="http://www.1date1cake.com/themes/1d1c/images/new-images/location_icon.png" style="float:left">
            <a href="" style="float:left;color:rgb(242, 132, 56);font-size:13px;margin-left:10px">深圳</a>
            <img style="float: left;margin-left: 10px;margin-top: 8px;" src="http://www.1date1cake.com/themes/1d1c/images/new-images/location_after.png" >
          </a>
          <a href="">
            <img src="http://www.1date1cake.com/themes/1d1c/images/new-images/personal_icon.png" style="margin:0px 5px 0px 10px">
          </a>
          <p class="d">
            [<a href="">会员中心</a>]
            [<a href="">登录</a> |
             <a href="">注册</a>]
          </p>
          <img src="http://www.1date1cake.com/themes/1d1c/images/new-images/cart_icon.png" alt="">
        </div>
        <!-- <div class="sunleider">
          <div class="sunleideri">
            <a href="http://www.1date1bouquet.com/" target="_blank" class="nav_linka">散漫后花园</a>
            |
            <a href="http://www.1date1dream.com/" target="_blank" class="nav_linka">西点梦工场</a>
          </div>
        </div> -->
      </div>
    </div>

  </div>
</template>
<script>

export default {
  data() {
    return {
      a: true
    }
  },
  components: {

  },
  mounted() {

    
  },
  methods: {
    handleScroll(a) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 800) {
        this.a = false
      } else {
        this.a = true
      }
    }
  }
}

</script>
<style scoped>

.d{
  display: initial;
  height: 20px;
  color: grey;
}
.d a{
  color:rgb(242, 132, 56);
  font-size: 12px; 
}
.load{
  position: absolute;
  right: 0;
  top: 50%;
  line-height: 20px;
  margin-top: -10px;
  width: 274px;
  height: 20px;
}
.topa {

  position: absolute;
  width: 1349px;
  background: rgba(76, 76, 76, .5);
  top: 0;
  left: 0;
  z-index: 5;
}

.cente {
  width: 1200px;
  margin: 0 auto;
}

#buttomsa {
  border-top: 1px solid #f0f0f0;
  width: 100%;
}

.retsun {
  overflow: hidden;
  width: 100%;
  height:80px;
  /* margin-top: 75px; */
  border-bottom:1px solid lightgray;
    position: fixed;
    bottom: 0;
    top: 0;
    z-index: 15;     
     background-color: white;
}

.retsunz {
    height: 80px;
    width: 1100px;
    margin: 0 auto;
    position: relative;

}
.budong {
  margin-top: -107px;
}
.sunleizhens {
  display: inline-block;
  /* margin: 7px 0; */
  float: left;
  width: 134px;
  height: 70px;
}

.sunleizhen {
  width: 134px;
  height: 70px;
  background: url("https://css.1date1cake.com/themes/1d1c/images/index_images/logo.png") no-repeat center center;
  background-size: 100%;
}

.sunleizhensh {
  width: 556px;
  margin-top: 20px;
  float: left;
  height: 45px;
  padding:0 15px;
}
.sunleizhenshu {
  float: left;
  height: 45px;
  line-height: 45px;
}

.split_line {
  height: 45px;
  float: left;
  background: rgba(255, 255, 255, .52);
  width: 1px;
}

.sunleizhenshua {
  text-align: center;
  display: inline-block;
  width: 100%;
  height: 100%;
  height: 45px;
  line-height: 45px;
  padding: 0px 10px;
}
.sunleizhenshua :hover{
  border-bottom:1px solid rgb(242, 132, 56);
}
.sunleizhenshuai {
    padding:10px 5px ;
  display: inline-block;
  height: 17px;color: #885F40;
  line-height: 17px;
  font-size: 14px;
}
.sunleizhenshuai :hover{
  color:rgb(242, 132, 56);
}
.sunleizhenshuaia {
  margin-top: 6px;
}

.sunleider {
  float: right;
  width: 180px;
  height: 24px;
  padding-top: 38px;
}

.sunleideri {
  width: 180px;
  height: 22px;
  line-height: 19px;
  border: 1px solid #eee;
  color: #fff;
  border-radius: 5px;
}

.nav_linka {
  width: 79px;
  height: 22px;
  color: #fff;
  font-size: 14px;
  margin: 0 4px 0 6px;
}


</style>
