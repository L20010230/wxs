<template>
  <div>
    <div class="out-box">
      <transition name="fade" mode="out-in" v-for="(i,f) in picture" :key="f">
        <img :src="i" v-show="f==showNumber" class="cao" />
      </transition>
    </div>
    <div class="aaa">
      <template>
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="(p,f) in paurl" :key="f"><img :src="p" alt="" class="swiimgsun" /></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
      </template>
    </div>
    <div class="secite0">
      <div class="secite1">
        <div class="secite2">
          <router-link to="/" class="s_link">
            <div class="secite3"></div>
            <div class="secite4"></div>
            <div class="secite41"></div>
          </router-link>
          <router-link to="/" class="sun_link">
            <div class="secite5">生日蛋糕</div>
            <div class="secite6">Birthday Cake</div>
          </router-link>
        </div>
        <div class="secite2 secite22">
          <router-link to="/" class="s_link">
            <div class="secite3"></div>
            <div class="secite4"></div>
            <div class="secite41"></div>
          </router-link>
          <router-link to="/" class="sun_link">
            <div class="secite5">生日派对</div>
            <div class="secite6">Birthday Party</div>
          </router-link>
        </div>
        <div class="secite2 secite23">
          <router-link to="/" class="s_link">
            <div class="secite3"></div>
            <div class="secite4"></div>
            <div class="secite41"></div>
          </router-link>
          <router-link to="/" class="sun_link">
            <div class="secite5">生日周边</div>
            <div class="secite6">Party Material</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="sectsun">
      <div class="sectsunl">
        <p class="sectp1">人气经典</p>
        <p class="sectp2"></p>
        <p class="sectp3">Popular classic recommend</p>
      </div>
      <div class="sectsunle">
        <div class="sectsunlei">
          <ul class="sectsunleiul">
            <li class="sectsunleili" v-for="(sun,index) in sunlei" :key="index">
              <router-link :to="{name:'xiang',params:{count:hh} }" class="" >
                
              <img class="sectsunleilii" :src="sun.Url" alt="" @click="jiaRu(index)"/>
              </router-link>
              <a href="/" class="ft14">{{sun.name}}</a>
              <p class="sectsunleilip1">{{sun.age}}</p>
              <div class="sectsunleilid">{{sun.xx}}</div>
              <router-link to="/car" class="shangshua" >
                <i class="shangshuai"></i>
                <div class="shangshuad" >加入购物车</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
 
  </div>
</template>
<script>
  import Xiang from "./xiangQin.vue"
 import {mapActions} from "vuex"
export default {
  data() {
    return {
      hh:{},
      sunlei:[],
      timer: "",
      showNumber: 0,
      picture: ["https://css.1date1cake.com/themes/1d1c/images/index_images/fix-bg01.jpg", "https://css.1date1cake.com/themes/1d1c/images/index_images/fix-bg03.jpg", "https://css.1date1cake.com/themes/1d1c/images/index_images/fix-bg02.jpg", "https://css.1date1cake.com/themes/1d1c/images/index_images/fix-bg04.png"],
      paurl: ["http://www.1date1cake.com/data/afficheimg/20181210ykctat.jpg", "http://www.1date1cake.com/data/afficheimg/20181230xleirx.jpg", "http://www.1date1cake.com/data/afficheimg/20190507hcztgz.jpg",  "http://www.1date1cake.com/data/afficheimg/20190507nzeqbf.jpg", "http://www.1date1cake.com/data/afficheimg/20190412vvdmsh.jpg"],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: false,
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      }
    }
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
   
  },
  created(){
 this.sun().then((res)=>{
      this.sunlei=res.data
    })
  },
  mounted() {
    //   this.$store.dispatch("fan").then((res)=>{
    //   this.sunlei=res.data
    
    // });
    
    this.times(),
    // console.log('this is current swiper instance object', this.swiper);
    this.swiper.slideTo(3, 1000, false)
    
  },
  methods: {
    ...mapActions({sun:"fan"}),
    times() {
      this.timer = setInterval(this.changeImg, 3500)
    },
    jiaRu(index){

      this.hh=this.sunlei[index];
      // console.log(this.hh,index)
    },
    changeImg() {
      this.showNumber = this.showNumber + 1
      if (this.showNumber == 4) {
        this.showNumber = 0
      }
    },
    btnIcon(i) {
      clearTimeout(this.timer)
      this.showNumber = i - 1
      this.times()
    },
    mouseOver(i) {
      clearTimeout(this.timer)
      this.showNumber = i - 1
      this.times()
    }

  },
  components:{
    Xiang
  }
}

</script>
<style scoped>
.cao {
  width: 1349px;
}

.aaa {
  height: 434px;
  overflow: hidden;
}

.swiimgsun {
  height: 434px;
}

.out-box {
  /* padding:20px 20px; */
  box-sizing: border-box;
  width: 1349px;
  height: 657px;
  position: relative;
}

.out-box img {

  width: 1349px;
  height: 657px;
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 3.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.icon {
  border-radius: 50%;
  width: 20px;
  background-color: #fff;
  cursor: pointer;
}
.zxdaix{
  /* display: none; */
}
.out-icon {
  width: 150px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left: 500px;
}

.active {
  background-color: #3064bb;
}

.secite0 {
  width: 100%;
  overflow: hidden;
  height: 356px;
  background: url('https://css.1date1cake.com/themes/1d1c/images/index_images/repeat-bg.png') repeat #fcf8ee;
}

.secite1 {
  width: 860px;
  margin: 0 auto;
  margin-top: 60px;
  height: 290px;
}

.secite2 {
  width: 191px;
  margin: 0;
  height: 100%;
  float: left;margin: 0 auto;
}
.sun_link{margin: 0 auto;display: inline-block;
  float: left;text-align: center;margin-left: 55px;
}
.s_link {
  display: inline-block;
  position: relative;margin: 0 auto;
  text-align: center;
}

.secite3 {
  width: 191px;
  height: 191px;
  background: url('https://css.1date1cake.com/themes/1d1c/images/index_images/circle.png') no-repeat center center;
  background-size: 150px 150px;
  float: left;
}

.secite4 {
  background: url("https://css.1date1cake.com/themes/1d1c/images/index_images/animate-img01.png") no-repeat center center;
  width: 128px;
  height: 132px;
  position: absolute;
  left: 31px;
  top: 29px;
  background-size: 110px 110px;
  opacity: 1;
}

.secite3:hover .secite4 {}

.secite4:hover {

  animation: ty10 1s;
  top: 44px;
  transition: opacity 0.2s, transform 1s;
  transform: translateY(-15px);

  opacity: 1;
  /* transform: translateY(0px); */
}

.secite5 {
  font-size: 18px;
  color: #885f3f;
}

.secite6 {
  font-size: 12px;
  color: #bfaea0
}

.secite22 {
  margin: 0 140px;
  float: left;

}

.secite23 {
  margin: 0 3px;
  float: left;

}

.secite22 .secite4 {
  background: url("https://css.1date1cake.com/themes/1d1c/images/index_images/animate-img02.png") no-repeat center center;
  background-size: 110px 110px;
}

.secite23 .secite4 {
  background: url("https://css.1date1cake.com/themes/1d1c/images/index_images/animate-img03.png") no-repeat center center;
  background-size: 110px 110px;
}
.sectsun{
  width: 1349px;height: 1310px;
}
.sectsunl{
  width: 100%;height: 79px;margin-top: 30px;
  text-align: center;
}
.sectp1{
  color: #885f3f;
  font-size: 20px;
}
.sectp2{
  width: 40px;
  border-top: 1px solid #f86522;margin: 10px auto;
}
.sectp3{
  width: 85px;font-size: 12px;color: #bfaea0
}
.sectsunle{
  width: 1200px;margin: 0 auto;height: 1191px;
}
.sectsunlei{
  width: 1080px;height: 1095px;
}
.sectsunleili{
  float: left;width: 360px;height: 340px;text-align: center;
}
.sectsunleilii{
  width: 220px;height: 220px;transform: translate3d(0,0,0);
    transition: transform .5s;
    display: block;

}
.sectsunleilii :hover{
   transform: translate3d(0,0,50px);

}
.ft14{
  font-size: 14px;    color: #885f3f;
}
.sectsunleilip1{
  color: #ff6600;margin: 10px 0; font-size: 12px;
}
.sectsunleilid{
  font-size: 12px;margin-bottom: 20px;color: #777;
}
.shangshua{display: block;
    margin: 0 auto;
    text-align: center;
    font-size: 12px;
    border-radius: 10px;
    width: 78px;
    height: 20px;
    line-height: 20px;
    color: #fff;
    padding-right: 8px;
    cursor: pointer;
    background-color: #d1ab80;
    background-size: 0;
    transition: width .5s;
}
.shangshuad{
  
}
.shangshua :hover .shangshuad{

}
</style>
