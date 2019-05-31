<template>
  <div id="dfs">
    <div class="xiangsun">
      <div class="xiangsunl">首页>产品列表>
        <span class="xiangsunls">{{a.name}}</span>
        
      </div>
      <div class="goods_detail">
          <div class="goodssunl">
            <img v-for="(z,ind) in b[0].gongurl" :key="ind" :src="z" alt="" class="goodsUr" v-show="ind==num" />
          </div>
          <div class="xiaogoog">
            <img v-for="(f,index) in b[0].gongurl" :key="index" :src="f" alt="" @click="dian(index)" class="imgaaas" :class="{active:index == num}" />
          </div>
          <div class="goodssunr" v-for="(na,index) in a.gong" :key="index">
            <div class="topname">
              <h2 class="topnh">{{na.gongName}}</h2>
              <p class="topnp">{{na.text}}</p>
            </div>
            <div class="cenderz">
              <div class="cendert">
                <a href="#" class="sasdf">{{na.data}}</a>
                <div class="centextyin">
                  <p class="centextyinp1">{{na.name}}</p>
                  <p class="centextyinp2">现在订购最早<span>{{na.shijianz}}</span>配送</p>
                  <p class="centextyinp3">每天最晚配送{{na.shijianw}}</p>
                </div>
              </div>
              <div class="tapqieh">
                <div class="tapqiehu" v-for="(n,index) in na.fena" :key="index" v-show="index==num1" >
                  <div class="tapqiehulef">
                    <img :src="n.fenimg" alt="">
                  </div>
                  <div class="tapqiehurig">
                    <div><img src="https://img2.1date1cake.com/themes/1d1c/images/attr_icon_1.jpg" alt="" /><span>英制规格{{n.g}}磅</span></div>
                    <div><img src="https://img2.1date1cake.com/themes/1d1c/images/attr_icon_2.jpg" alt=""><span>{{n.s}}</span></div>
                    <div><img src="https://img2.1date1cake.com/themes/1d1c/images/attr_icon_3.jpg" alt=""><span>含{{n.h}}套餐具1盒蜡烛</span></div>
                   
                  </div>
                </div>
                <div class="type"  >
                  <a href="javascript:void(0)" v-for="(n,index) in na.fen" :key="index" @click="dian1(index)">
                    <span class="typespa">{{n}}</span></a>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "xiang",
  data() {
    return {
      a: {},
      b: "",
      num: 0,
      num1:0
      //{{$route.params.count.name}}
    }
  },
  created() {
    this.a = this.$route.params.count
    this.b = this.$route.params.count.gong
    console.log(this.a.gong)
  },
  methods: {
    dian(index) {

      this.num = index;
      // console.log(this.num)
    },
    dian1(index) {

      this.num1 = index;
      // console.log(this.num)
    }
  }
}

</script>
<style scoped>
#dfs {
  margin-top: 1px;
  /* margin-top: 500px; */
  width: 100%;
  height: 500px;margin-top: 160px;
  /* background: red; */
}
.active {
  border: 2px solid #FF1200;
}

.xiangsunl {
  width: 1050px;
  margin: 0 auto;
  height: 77px;
  line-height: 77px;
  font-size: 14px;
  color: #555
}

.xiangsunls {
  font-weight: bold;
}

.goods_detail {
  width: 1050px;margin: 0 auto;
  height: 440px;
  position: relative;
}

.goodssunl {
  float: left;
  width: 620px;
  height: 440px;
}

.goodssunr {
  float: right;
  width: 385px;
  height: 100%;    position: relative
}

.goodsUr {
  position: absolute;
  left: 0;
  top: 0;
  width: 620px;
  height: 440px;
}

.xiaogoog {
  position: absolute;
  bottom: 15px;
  right: 42%;
  /* width: 120px; */
  height: 36px;
  z-index: 8;
}

.xiaogoog img {
  width: 46px;
  height: 32px;
  float: left;
  margin-right: 10px;
}

.xiaogoog img:hover {
  border: 2px solid #FF1200;
}

.topname {
  width: 100%;
  height: 109px;color: #FF1200;
}
.topnh{
  line-height: 27px;
  display: block;height: 27px;font-weight: bold;
}
.topnp{
  height: 62px;line-height: 20px;margin-top: 20px;
}
.cenderz{
      position: absolute;height: 195px;
    top: 132px;width: 100%;
}
.cendert{
  width: 100%;
  height: 29px;line-height: 29px;    margin-top: 22px;
}
.cendert a{
  margin-left: 20px;
}
.centextyin{
  position: absolute;
    border: 2px solid #ccc;
    width: 300px;
    height: 68px;
    display: none;
    padding: 5px;
    background: #fff;
    top: -31px;
    left: 110px;
}
.sasdf:hover +.centextyin{
    display: block;
}
.centextyinp1{
  font-size: 18px;height: 24px;line-height: 24px;color: #666
}
.centextyinp2{
  margin-top: 10px;display: block;font-size: 14px;height: 19px;line-height: 19px;color: #666
}
.centextyinp2 span{
  color:#ff1200
}
.centextyinp3{
  display: block;font-size: 12px;height: 16px;line-height: 16px;color: #ccc
}
.tapqieh{
  position: relative;
  width: 376px;height: 146px;
}
.tapqiehu{
  position: absolute;left: 0;top: 0;
  margin: 10px 0;width: 100%;
}
.tapqiehurig{
  margin-left: 20px;float: left;width: 150px;
}
.tapqiehulef{
  float: left;
}

.tapqiehurig div{
  height: 32px;line-height: 32px;
}
.tapqiehurig span{
  float: left;
   margin-left: 5px;font-size: 12px;
}
.type{
  position: absolute;bottom: 0px;left: 0
}
.type a{
  color: #ff1200;
  height: 30px;
    border: 1px solid #FF1200;    display: block;
    margin-right: 7px;
    text-align: center;
    line-height: 30px;
    float: left;
    position: relative;
    /* margin-bottom: 10px; */
    padding: 0 10px;
}
.typespa{
  font-size: 14px;
}
.tapqiehurig img{
  margin-top: 9px;
  width: 16px;height: 13px;float: left; display: inline-block;line-height: 16px;
}
</style>
