<template>
    <div style="width: 1030px;margin:100px auto;padding:0px 10px">
    <!-- 头部 -->
        <div style="margin-top: 35px;margin-bottom: 23px;">
            <div style="height:80px;color: #555;font-size: 14px;">
              <span>首页>购物车</span>
               <!-- 进度条 -->
                  <div style="width: 1030px;height: 80px;position: relative;float: right;">
                  <div style="width: 720px;height: 55px;position: relative;float: right;">
                    <div class="one">
                      <div class="one_i" style="background: #d1a08b;">
                        <span style="background: #d1a08b;">1</span>
                      </div>
                      <div class="one1" style="color: #d1a08b;">1.加入购物车</div>
                    </div>
                    <div class="one">
                      <div class="one_i" style="background: #ff5000;">
                        <span style="background: #ff5000;">2</span>
                      </div>
                      <div class="one1" style="color:#ff5000;">2.填写核对订单信息</div>
                    </div>
                    <div class="one">
                      <div class="one_i">
                        <span>3</span>
                      </div>
                      <div class="one1">3.完成订单</div>
                    </div>
                  </div>
              </div>
          </div>
           
            <div style="font-size:18px">送货信息</div>
            <!-- 具体内容 -->
            <div style="margin-top:20px">
                <div style="color: #555;font-size: 14px;height:23px;line-height:23px">
                    <span style="float:left;">配送方式:</span>
                    <div style="width:83px;float:left;margin-left:20px">
                        <input @click="tabId=0" name="Fruit" type="radio" checked style="width: 18px;height: 18px;margin-top:4px;float:left"/>
                        <span style="float:left">送货上门</span>
                    </div>
                    <div style="width:83px;float:left;margin-left:20px">
                        <input @click="tabId=1" name="Fruit" type="radio" style="width: 18px;height: 18px;margin-top:4px;float:left"/>
                        <span style="float:left">到店自取</span>
                    </div>
                </div>
                <div style="margin-top: 20px;color: #f55a19;font-size:14px">※温馨提示 :  <span style="color:black">修改地址请提前6小时来电，如临时修改地址可能会产生额外的费用。</span></div>
                <div style="background: #fef6e4;color: #666;height: 25px;width:1020px;line-height: 24px;padding: 8px 15px;margin-top:20px">
                    <router-link to="/car">
                        <span style="width: 50px;height: 25px;display: inline-block;font-size: 14px;line-height: 24px;vertical-align: top;text-align:center;color: #fff;background: #f55a19;">登录</span>
                    </router-link>
                    <span style="color:rgb(102,102,102);font-size:14px;margin-left:10px">后可获取您的常用地址，并积累</span>
                    <a href="" style="color: #f55a19;font-size:14px;text-decoration：overline">点金</a>
                </div>
            </div>
            <!-- 详细信息 -->
            <div v-show="tabId===0" class="tr">
                <!-- 1 -->
                <div style="margin-top:20px;">
                    <div class="l">送货地址：</div>
                    <div class="r">
                        <div class="se">
                            <span>深圳</span>
                        </div>
                        <select class="se1">
                            <option value="">请选择</option>
                            <option value="">罗湖区</option>
                            <option value="">福田区</option>
                        </select>
                    </div>
                </div>
                <!-- 2 -->
                <div class="se2" style="width: 436px;height:24px">
                    <input type="text" placeholder="请输入小区或大厦名">
                </div>
                <!-- 3 -->
                <div>
                   <div class="l">楼(层)房号：</div>
                   <div class="se2" style="width: 436px;height:24px">
                    <input type="text" placeholder="例如:3栋14A">
                </div>
                </div>
                <!-- 4 -->
                <div style="margin-top:20px">
                   <div class="l">收件人：</div>
                   <div class="se3" style="width: 197px;height:24px;float:left;margin-left: 20px;">
                        <input type="text" placeholder="请输入收货人姓名">
                   </div>
                   <div class="se3" style="width: 197px;height:24px;float:left;margin-left: 10px;">
                        <input type="text" placeholder="请输入收货人姓名">
                   </div>
                </div>
                <!-- 5 -->
                <div style="margin-top:20px">
                    <div class="l">您的手机：</div>
                    <div class="se3" style="width: 197px;height:24px;float:left;margin-left: 20px;">
                        <input type="text" placeholder="请输入您的手机号码">
                   </div>
                   <div style="margin-left: 10px;width: 197px;height: 24px;float: left;padding: 3px;font-size: 14px;">
                        <input type="checkbox" checked>
                        <span>与收货人相同</span>
                   </div>
                </div>
                <!-- 6  -->
                <div style="margin-top:20px">
                    <div class="l">图形验证码：</div>
                    <div class="se3" style="width: 197px;height:24px;float:left;margin-left: 20px;">
                        <input type="text" placeholder="请输入图形验证码">
                   </div>
                   <div style="margin-left: 10px;width: 197px;height: 24px;float: left;padding: 3px;font-size: 14px;">
                        <img src="data:image/png;base64,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" />
                   </div>
                </div>
                <!-- 7  -->
                <div style="margin-top:20px">
                    <div class="l">验证码：</div>
                    <div class="se3" style="width: 197px;height:24px;float:left;margin-left: 20px;">
                        <input type="text" placeholder="请输入手机验证码">
                   </div>
                   <div style="text-align:center;margin-left: 10px;width: 86px;height: 22px;color: #f55a19;float: left;padding: 3px;font-size: 14px;border: 1px solid #ccc;">
                        获取验证码
                   </div>
                </div>
                <!-- 8 -->
                <div style="margin-top:20px">
                    <div style="width: 70px;font-size: 13px;color: gray;float:left">保密配送:</div>
                    <div style="width: 120px;margin-top:2px;font-size: 13px;color: gray;float:left"><input type="checkbox">保密配送不签单</div>
                    <div style="width: 120px;margin-top:2px;font-size: 13px;color: gray;float:left"><input type="checkbox">无预约惊喜送达</div>
                    <div style="width: 220px;margin-top:2px;font-size: 13px;color: gray;float:left">（保密配送需在线支付成功才送货）</div>
                </div>
                <!-- 9 -->
                <div style="margin-top:20px">
                    <div style="width: 70px;font-size: 13px;color: gray;float:left">送货时间:</div>
                    <div style="width: 120px;font-size: 13px;color: gray;float:left;margin-top:-7px">
                        <div class="block">
                            <!-- <span class="demonstration">默认</span> -->
                            <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="请选择" >
                            </el-date-picker>
                        </div>
                    </div>
                    <div style="width: 120px;margin-top:-7px;margin-left:10px;font-size: 13px;color: gray;float:left">
                        <el-time-select
                        v-model="value1"
                        :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                        }"
                        placeholder="选择时间">
                        </el-time-select></div>
                </div>
            </div>
            <div v-show="tabId===1"  class="tr" style="height:270px">
                <div style="margin-top:20px">
                    <div class="l" style="color: gray;">自提地址 ：</div>
                    <div>
                        <input type="radio" checked style="width:18px;height:18px;margin-top:7px;float: left;">
                        <div style="margin-top:3px;float: left;margin-left:10px">
                            <span style="font-size:13px;">中央工厂自提点（南山区西丽官龙村第一工业区G栋二楼，0755-36885360）</span>
                            <span style="font-size:13px;color:#f55a19">[查看地图]</span>
                        </div>
                        
                    </div>
                </div>
                <div style="margin-top:20px">
                    <div class="l" style="color: gray;">提货人姓名 ：</div>
                    <div class="se3" style="width: 197px;height:24px;float:left;margin-left: 20px;">
                        <input type="text" placeholder="请输入您的姓名">
                   </div>
                </div>
                <div style="margin-top:20px">
                    <div class="l" style="color: gray;">提货人手机 ：</div>
                    <div class="se3" style="width: 197px;height:24px;float:left;margin-left: 20px;">
                        <input type="text" placeholder="请输入提货人的手机号码">
                   </div>
                </div>
                <div style="margin-top:20px">
                    <div class="l" style="color: gray;">您的手机 ：</div>
                    <div class="se3" style="width: 197px;height:24px;float:left;margin-left: 20px;">
                        <input type="text" placeholder="请输入您的手机号码">
                   </div>
                </div>
                <div style="margin-top:20px">
                    <div style="font-size: 13px;color: gray;float:left" class="l">送货时间:</div>
                    <div style="width: 120px;font-size: 13px;color: gray;float:left;margin-top:-7px;margin-left: 20px;">
                        <div class="block">
                            <!-- <span class="demonstration">默认</span> -->
                            <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="请选择" >
                            </el-date-picker>
                        </div>
                    </div>
                    <div style="width: 120px;margin-top:-7px;margin-left:10px;font-size: 13px;color: gray;float:left">
                        <el-time-select
                        v-model="value1"
                        :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                        }"
                        placeholder="选择时间">
                        </el-time-select></div>
                </div>
            </div>
        </div>
    <!-- 购物车 -->
        <div  class="body" style="width:1050px">
            <div class="hhh" style="height:50px;line-height:50px;border-bottom:1px solid lightgrey">
            <ul class="ul">
                <li style="width:317px;margin-left:20px;text-align:left">商品</li>
                <li style="width:231px;">属性</li>
                <li style="width:115px;">单价</li>
                <li style="width:147px;">购买数量</li>
                <li style="width:157px;">小计</li>
                <li style="width:63px;">操作</li>
            </ul>
            </div>
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

          <!-- 结算方式 -->
          <div>
            <p class="fu">付款信息</p>
            <div class="ku">
              <div><span>微信在线支付</span></div>
              <div><span>支付宝</span></div>
              <div><span>银联在线支付</span></div>
              <div><span>货到付款(微信或现金)</span></div>
            </div>
          </div>

            <!--  -->
            <div style="border-bottom:1px solid lightgray;height:270px">
                <div style="margin-top: 60px;float: right;line-height: 36px;text-align: right;color: #666;">
                  <p style="font-size: 13px;">
                    <span style="">(共<span>
                      {{getTotal.totalNum}}</span>件)</span>
                    商品金额 :
                    <span style="display: inline-block;width: 100px;text-align: right;" >
                      {{getTotal.totalPrice}}</span>
                  </p>
                  <p style="font-size: 13px;">
                      <span style="float: left; width: 140px;">使用现金券[0张可用] ：</span>
                      <span>-0元 ></span>
                  </p>
                  <p style="font-size: 13px;">
                      <span style="float: left; width: 140px;">使用余额[元可用]：</span>
                      <span>-0元 ></span>
                  </p>
                  <p style="font-size: 13px;">
                      <span style="float: left; width: 140px;">使用提货卡：</span>
                      <span>-0元 ></span>
                  </p>
                  <p style="text-align:right">
                    <span style="float: left; width: 140px;">总计金额 :</span>
                    <span style="width: 100px;text-align: left;font-size:20px;color: #f55a19;">
                      {{getTotal.totalPrice}}元</span>
                  </p>
               </div>
            </div>


            <div style="padding-left: 5px;margin-top: 15px;float:right;width:1050px;height: 100px;">
              <div class="btn1 b" style="margin-left:50px">提交订单</div>
            </div>
        </div>
      <!-- 尾部 -->
      <div style="overflow: hidden;border-top: 1px solid #EFEFEF;background: #ffffff;width:100%" >
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
    <!-- </div> -->
</template>
<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
          tabId:0,
          categoryIndex:0,
        }
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
      var _this=this;
      //为productList添加select（是否选中）字段，初始值为true
      this.cararr.map(function (item) {
           _this.$set(item, 'isSelect', true);
      })
  }

}
</script>
<style>00000000000000000000000000000011.
.fu{
  padding: 20px 0px 0px 0px;
  font-size: 18px;
}
.ku{
  margin-top: 20px;
}
.ku li{
    padding: 5px;
    min-width: 120px;
    text-align: center;
    display: inline-block;
    position: relative;
    color: #666;
    border: 1px solid #ccc;
    cursor: pointer;
    margin-right: 20px;
    font-size: 13px;
}
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
.el-date-editor.el-input,  {
    width: 120px;
}
.el-input__inner{
    width: 120px;height: 35px;border-radius: 0px;
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
.se3{
    /* margin-top: 15px; */
    padding: 2px 15px;
    border: 1px solid #ccc;
    height: 30px;
}
.se2{
    margin-top: 15px;
    padding: 2px 15px;
    border: 1px solid #ccc;
    height: 30px;
    margin-left: 120px;
}
.se3 input{
    border:none;
    /* 取消光标 */
    outline:none;
}
.se2 input{
    border:none;
    /* 取消光标 */
    outline:none;
}
.se1{
    border: 1px solid #ccc;
    background-color: white;
    width: 105px;
    height: 30px;
    color: gray;
    margin-left: 20px;
}
.se{
    width: 60px;
    height: 28px;
    position: relative;
    text-align: left;
    line-height: 30px;
    float: left;
    margin-left:20px;
    font-size: 14px;
    padding-left: 10px;
    border: 1px solid #ccc;
    color: #666;
    cursor: pointer;
    padding-right: 30px;
    z-index: 5;
}
.tr>div{
    width:1015px;
    height:30px;
}
.l{
    margin-top: 5px;
    width: 100px;
    text-align: right;
    float: left;
    font-size: 14px;
}
.tr{
    /* background-color: red; */
    width: 1015px;
    padding: 0px 17px;
    height: 500px;
    overflow: hidden;
    margin-top: 20px;
}
</style>