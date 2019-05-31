<template> 
  <div style="width: 1050px;margin:100px auto">
    <!-- 头部 -->
      <div style="margin-top: 35px;margin-bottom: 23px;color: #555;font-size: 14px;">
        <div style="height:80px"><span>首页>购物车</span></div>
        <!-- 进度条 -->
        <div style="width: 1050px;height: 80px;position: relative;float: right;">
            <div v-if="aa" style="width: 720px;height: 55px;position: relative;float: right;">
              <div class="one">
                <div class="one_i" style="background: #ff5000;">
                  <span style="background: #ff5000;">1</span>
                </div>
                <div class="one1" style="color: #ff5000;">1.加入购物车</div>
              </div>
              <div class="one">
                <div class="one_i">
                  <span>2</span>
                </div>
                <div class="one1">2.填写核对订单信息</div>
              </div>
              <div class="one">
                <div class="one_i">
                  <span>3</span>
                </div>
                <div class="one1">3.完成订单</div>
              </div>
            </div>
        </div>
        <div style="font-size: 18px;">我的购物车</div>
        <div class="hidden" v-if="bb">
          <div style="margin-top: 130px;margin-bottom: 180px;">
            <div style="    width: 84px;height: 59px;display: inline-block;padding: 0px 483px;">
              <img src="https://img2.1date1cake.com/themes/1d1c/images/cart-empty.png" >
            </div>
            <p style="color: rgb(102, 102, 102);text-align: center;margin-top: 20px;">您的购物车里还没有商品</p>
            <router-link to="/quanbu" >
              <p style="font-size: 24px;color: #ff5000;text-align: center;margin-top: 20px;">去购物</p>
            </router-link>
            <div class="fenge">猜你喜欢</div>
            <div style="height:300px;width:1050px;margin-top:30px">
                <div class="fen">
                  <img src="https://img2.1date1cake.com/images/201804/1523323287427417354.jpg" alt="" style="width:258px;height:183px">
                  <div class="xaing">
                    <p>榴芒双拼DURIAN&MAN...</p>
                    <p>198元/11.0磅</p>
                  </div>
                    <div class="found">查看详情</div>
                </div>
                <div class="fen">
                  <img src="https://img1.1date1cake.com/images/201807/1531792588284628611.jpg" alt="" style="width:258px;height:183px">
                  <div class="xaing">
                    <p>四季Color Four</p>
                    <p>288元/2磅</p>
                  </div>
                  <div class="found">查看详情</div>
                </div>
                <div class="fen">
                  <img src="https://img1.1date1cake.com/images/201804/1522806861502398609.jpg" alt="" style="width:258px;height:183px">
                  <div class="xaing">
                    <p>芒果慕斯MANGO</p>
                    <p>168元/11.0磅</p>
                  </div>
                    <div class="found">查看详情</div>
                </div>
            </div>
          </div>
        </div>
        <div v-if="aa" class="hhh" style="height:50px;line-height:50px;border-bottom:1px solid lightgrey">
            <ul class="ul">
                <li style="width:317px;margin-left:20px;text-align:left">商品</li>
                <li style="width:231px;">属性</li>
                <li style="width:115px;">单价</li>
                <li style="width:147px;">购买数量</li>
                <li style="width:157px;">小计</li>
                <li style="width:63px;">操作</li>
            </ul>
        </div>
      </div>
      <!-- 购物车部分 -->
      <div v-if="aa" class="body">
            <div class="car" v-for="(item,index) in cararr" :key="index">
              <div style="width:337px;padding:25px 0px 75px 0px;"  class="cari">
                <!-- <input type="checkBox" v-bind:checked="item.isSelect" @click="item.isSelect=!item.isSelect" class="check"/> -->
                <img :src="item.Url">
                <div style="margin-left:130px">
                  <a href="" style="padding-top: 20px;display: block;float:left">{{item.Stagename}}</a>
                </div>
              </div>
              <div style="width:231px;padding:27px 0px;" class="cari">
                <p>{{item.p1}}</p>
                <p>{{item.p2}}</p>
                <p>{{item.p3}}</p>
                <p>{{item.p4}}</p>
              </div>
              <div style="width:115px;padding:25px 0px 158px 0px;text-align:center" class="cari">{{item.pri}}</div>
              <div style="width:147px;padding:25px 0px 108px 0px;" class="cari">
                <i class="i-" @click="item.count>0?item.count--:''"></i>
                <input  :value="item.count" type="text" style="text-align:center;border:none;margin: 6px 12px;position: relative;top: -3px;width:55px;height:25px;float:left">
                <i  class="ij" @click="item.count++"></i>
              </div>
              <div style="width:157px;padding:25px 0px 159px 0px;text-align:center" class="cari">{{item.pri*item.count}}</div>
              <div style="width:63px;padding:25px 0px 156px 0px;" class="cari">
                <i class="ix" @click="deletePro(index)"></i>            
              </div>
            </div>
      </div>
<!-- 结算 -->
        <div class="jie"  v-if="aa">
            <div style="width:1000px;padding:20px 0px;height:40px;border-bottom:1px dashed lightgray;margin:auto">
                <div style="float:left;padding: 2px 30px;line-height: 40px;width:140px;border-right:1px dashed lightgray;">添加免费配件</div>
                <div class="im" style="float:left;margin-left:10px" >
                  <img src="https://img2.1date1cake.com/data/goods_images/hats_1.jpg" alt="" >
                  <a href="">生日帽</a>
                  <i class="ij" style="margin: 10px 0px 0px 15px;"></i>
                </div>
            </div>
            <div style="width:1000px;padding:10px 0px;height:100px;margin:auto">
                <div style="float: left;padding: 10px 0px 10px 30px;width: 170px;border-right: 1px dashed lightgray;height: 91px;">
                    <p style="width: 170px;border-right: 1px dashed lightgray;">添加付费配件</p>
                    <div style="float:left;margin-left:-20px;height: 30px;width: 155px;" class="im">
                        <img src="https://img1.1date1cake.com/images/201701/thumb_img/41_thumb_G_1484278418538.jpg" alt="" >                        
                        <a href="" style="margin: 10px 0px 0px 10px;">1叉1碟</a>
                        <i class="ij" style="margin: 10px 0px 0px 15px;"></i>
                    </div>
                </div>
                <div style="float:left;height:100px;width: 798px;">
                  <div style="float: left;height: 30px;width: 155px;padding:10px;border-right:1px dashed lightgray;">
                    <img style="height:30px;width: 30px;float:left" src="https://img1.1date1cake.com/images/201904/thumb_img/819_thumb_G_1555473553910.jpg" alt="" >                        
                        <a href="" style="margin: 0px 0px 0px 10px;float:left;font-size:13px;color:gray;">一心一意</a>
                        <i class="ij" style="margin: 1px 0px 0px 15px;float:left"></i>
                    </div>
                    <div style="float: left;height: 30px;width: 155px;padding:10px;border-right:1px dashed lightgray;">
                    <img style="height:30px;width: 30px;float:left" src="https://img1.1date1cake.com/images/201904/thumb_img/464_thumb_G_1555466678002.jpg" alt="" >                        
                        <a href="" style="margin: 0px 0px 0px 10px;float:left;font-size:13px;color:gray;">生日场景大礼</a>
                        <i class="ij" style="margin: 1px 0px 0px 15px;float:left"></i>
                    </div>
                    <div style="float: left;height: 30px;width: 155px;padding:10px">
                    <img style="height:30px;width: 30px;float:left" src="https://img1.1date1cake.com/images/201801/thumb_img/463_thumb_G_1515740311482.jpg" alt="" >                        
                        <a href="" style="margin: 0px 0px 0px 10px;float:left;font-size:13px;color:gray;">儿童餐位小包</a>
                        <i class="ij" style="margin: 1px 0px 0px 15px;float:left"></i>
                    </div>
                    <div style="float: left;height: 30px;width: 155px;padding:10px">
                    <img style="height:30px;width: 30px;float:left" src="https://img2.1date1cake.com/images/201901/thumb_img/139_thumb_G_1547806530670.jpg" alt="" >                        
                        <a href="" style="margin: 0px 0px 0px 10px;float:left;font-size:13px;color:gray;">壹点壹客数字</a>
                        <i class="ij" style="margin: 1px 0px 0px 15px;float:left"></i>
                    </div>
                    <div style="float: left;height: 30px;width: 155px;padding:10px">
                    <img style="height:30px;width: 30px;float:left" src="https://img2.1date1cake.com/images/201701/thumb_img/58_thumb_G_1484278239610.jpg" alt="" >                        
                        <a href="" style="margin: 0px 0px 0px 10px;float:left;font-size:13px;color:gray;">保温杯</a>
                        <i class="ij" style="margin: 1px 0px 0px 15px;float:left"></i>
                    </div>
                </div>
        </div>
<!-- 温馨提示 -->
      <div style="margin-top: 100px;color: #f55a19;" class="tips"   v-if="aa">※　温馨提示 : 付费配件可以用点金兑换 ;</div>
            <div style="border-bottom:1px solid lightgray;height:135px">
                <div style="margin-top: 60px;float: right;line-height: 36px;text-align: right;color: #666;">
                  <p>
                    <span>(共<span>
                      {{getTotal.totalNum}}</span>件)</span>
                    商品金额:
                    <span style="display: inline-block;width: 100px;text-align: left;" >
                      {{getTotal.totalPrice}}</span>
                  </p>
                  <p>
                    总计金额:
                    <span style="display: inline-block;width: 100px;text-align: left;font-size:20px;color: #f55a19;">
                      {{getTotal.totalPrice}}元</span>
                  </p>
               </div>
            </div>

            <div style="padding-left: 5px;margin-top: 15px;float:right;width:1050px">
              <router-link to="/heduixinxi">
              <div class="btn1 b" style="margin-left:50px">开始结算</div>
              </router-link>
            <router-link to="/quanbu" >              
              <div  class="btn0 b">继续购物</div></router-link>
              <div class="btn0 l" @click="dele(index)">清空购物车</div>
            </div></div>
     
      <!-- 尾部 -->
      <div   v-if="aa"  style="overflow: hidden;border-top: 1px solid #EFEFEF;background: #ffffff;width:100%" >
         <div style="margin-left: 5px;margin-top: 100px;font-size: 12px;line-height: 20px;color: #666;margin-bottom: 90px;">
              <p style="color: #f55a19;font-size:14px">※ 温馨提示 :</p>
              <p>英制规格1磅：约13x13cm	1刀+5碟+5叉 适合2~5人</p>
              <p>英制规格2磅：约17x17cm	1刀+10碟+10叉 适合5~10人</p>
              <p>英制规格3磅：约23x23cm	1刀+15碟+15叉 适合9~15人</p>
              <p>英制规格5磅：约30x30cm	1刀+25碟+25叉 适合15~25人</p>
              <p>订购5磅以上规格的蛋糕请与客服人员联系，订购电话：4006–517-217</p>
            </div>
            <div style="width: 1100px;margin: auto;padding: 25px 0;font-size: 12px;color: #8C8C8C;overflow: hidden;">
                <div style="float: left;overflow: hidden;" class="p"> 
                    <p>全国领先的生日蛋糕服务品牌</p>
                    <p><span class="L">1,000,000</span> 位用户见证</p>
                    <p><span class="L">99.8%</span> 用户满意度</p>
                    <p><span class="L">3500</span>平米中央工厂</p>
                    <p><span class="L">60</span>名资深研发团队</p>
                    <p>首个获得<span class="L">"HACCP"</span>国际食品安全认证</p>
                </div>
                <div style="float: left;overflow: hidden;margin: 0 0 0 75px;width: 180px;" class="p1">
                      <p>关于我们</p>
                      <a href="" >关于<span class="L">壹点壹客</span></a>
                      <a href="" >品牌故事</a>
                      <a href="" >品牌理念</a>
                      <a href="" >原料之旅</a>
                      <a href="" >大师团队</a>
                      <a href="" >壹club</a>
                      <a href="" >家庭烘焙</a>
                      <a href="" >教室散漫</a>
                      <a href="" >后花园 </a>
                      <a href="" >儿童生日会</a>
                </div>
                <div style="float: left;overflow: hidden;margin: 0 0 0 75px;width: 180px;" class="p1">
                      <p>订购服务</p>
                      <a href="" >订购指南</a>
                      <a href="" >配送范围</a>
                      <a href="" >包装展示</a>
                      <a href="" >常见问题</a>
                      <a href="" >集团订购</a>
                      <a href="" >联系我们</a>
                      <a href="" >产品分类</a>
                      <a href="" >食品生产许可证</a>
                </div>
                <div style="float: right;">
                   <div style="float: left;margin: 25px 25px 0 0;">
                     <img src="https://img1.1date1cake.com//themes/1d1c/images/new-images/app_code.jpg" alt="">
                      <div style="text-align: center;margin: 10px 0 0 0;">壹点壹客APP</div>
                   </div>
                </div>
                <div style="float: right;">
                   <div style="float: left;margin: 25px 25px 0 0;">
                     <img src="https://img2.1date1cake.com//themes/1d1c/images/new-images/code.jpg" alt="">
                      <div style="text-align: center;margin: 10px 0 0 0;">壹点壹客公众号</div>
                   </div>
                </div>
            </div>
          </div>
          <div style="padding: 20px 0 25px 0;border-top: 1px solid #EFEFEF;">
              <div style="width: 1100px;margin: auto;overflow: hidden;">
                <a href="" class="logo">
                  <img src="https://css.1date1cake.com/themes/1d1c/images/index_images/logo.png" alt="">
                </a>
                <p style="float: left;margin: 0 0 0 20px;font-size: 12px;color: #8C8C8C;line-height: 20px;">
                    一点一刻深圳壹点壹客食品有限公司 | 2010-2018 1date1cake.com 壹点壹客 版权所有
                    <br/>粤ICP备11021841号 | 客服电话：
                    <span  class="L">4006-517-217</span>
                </p>
              </div>
          </div>
      </div>
<!-- </div>   -->
</template>

<script>
import {mapState} from 'vuex'
export default {
  inject:["reload"],
  name:'car',
  components:{
  },
  data() {
    return {
      // message:1,
      bb:true,
      aa:false
    }
  },
  created() {

  },
  methods:{
    dele(){
      alert("确认删除购物车吗?")
    },
		deletePro : function(index){
			alert("你正在删除"+this.cararr[index].Stagename);
      this.cararr.splice(index,1);
      if(localStorage){
          localStorage['cararr'] = JSON.stringify(this.cararr )
      }
      this.reload();
    },  
	},
	computed:{
    ...mapState(['cararr']),
			getTotal:function(){
				var prolist = this.cararr.filter(function (val) { return val.isSelect}),
				totalPri = 0;
				for (var i = 0,len = prolist.length; i < len; i++) {
          totalPri+=prolist[i].pri*Number(prolist[i].count); 
          console.log(prolist)
				}
        return {totalNum:prolist.length,totalPrice:totalPri
        }
      }
	},
	mounted:function () {
    // 判断长度
    console.log(this.cararr.length)
     if(this.cararr.length>0){
        this.bb=false
        this.aa=true
     }
     else{
        this.bb=true
        this.aa=false
      }
      var _this=this;
      //为productList添加select（是否选中）字段，初始值为true
      this.cararr.map(function (item) {
           _this.$set(item, 'isSelect', true);
      })
  }
   
}
</script>
<style>
.one span{
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    color: #fff;
    position: absolute;  
    background: rgb(204, 204, 204);
    border-radius: 50px;
    left: 50%;
    margin-left: -12px;
    top: 3px; 
}
.one{
  float: left;
  width: 33%;
  position: relative;
}
.one_i{
  background: rgb(204, 204, 204);
  margin: 12px 0;
  height: 6px;  
}
.one1{
  text-align: center;
  color:rgb(204, 204, 204); 
}
.xaing{
  width:160px;
  margin: 10px 0px;
  float: left;
  font-size: 12px;
}
.xiang p{
  width:160px;
  display: block;
}
.found{
    height: 30px;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
    color: rgb(245,90,25);
    border: 1px solid lightgray;
    background-color: rgb(235,235,235);
    width: 88px;
    float: left;
    margin: 10px 0px;
}
.fen{
  display: inline-block;
  width: 260px;
  height: 310px;
  margin-bottom: 30px;
  box-sizing: content-box;
    margin-right: 44px;
    float: left;
    margin-left: 29px;

}
.fenge{
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  background-repeat: no-repeat;
  background-image: url(https://css.1date1cake.com/themes/1d1c/images/guss-like-title.png);
}
.check{
  width: 20px;
  height: 20px;
}
.L{
  color: #FF6600;
}
.logo{
    float: left;
    width: 134px;
    height: 33px;

}
.logo img{
  height:34px;
  width: 135px;
}
.p1 a{
      line-height: 22px;
    color: #8C8C8C;
    float: left;
    width: 90px;
}
.p p {
  line-height: 22px;
}
body,html{
  width:100%;
}
.l{
  float: left;
}
.b{
  float: right;
}
.btn1{
  width: 200px;
    height: 40px;
    color: #fff;
    background: #f55a19;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
}
.btn0{
  width: 200px;
    height: 40px;
    display: block;
    color: #666;
    background: #fff;
    font-size: 18px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}
.im{
  margin-top: 10px;
  margin-right: 20px;
}
.im a{
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    float: left;
    margin: 10px 0px 0px 10px;
}
.im img{
  height: 28px;
  width: 28px;
  float: left;
  margin-top: 6px;
  border: 1px solid lightgray;
}
.i-{
    background-image: url(https://css.1date1cake.com/themes/1d1c/images/sprite.png?v=0.6);
    background-position: -57px -173px;
    width: 21px;
    display: inline-block;
    height: 21px;
    margin: 4px 0px 0px 15px;
    float: left;
}
.ij{
    background-image: url(https://css.1date1cake.com/themes/1d1c/images/sprite.png?v=0.6);
    background-position: -34px -150px;
    width: 21px;
    display: inline-block;
    height: 21px;
    margin: 4px 0px 0px 0px;
    float: left;
}
.ix{
  background-image: url(https://css.1date1cake.com/themes/1d1c/images/sprite.png?v=0.6);
  background-position: -58px -129px;
    display: inline-block;
  width: 19px;
  float: left;
  margin-left: 21px;
  height: 18px;
}
a{
  color:inherit;
}
.car{
  height: 203px;
  border-bottom: 1px lightgray dashed;
}
.jie{
  height: 203px;
  border: 1px lightgray solid;
  margin-top: 60px;
}
.cari p{
    color: black;
    padding: 6px 0px;
    text-align: center;
    font-size: 13px;
}
.cari>img{
  height: 100px;
  width: 100px;
  float: left;
  border:1px solid lightgrey;
}
.cari{
  float: left;
}
.ul li{ 
  float: left;
  text-align: center;
}

</style>