<template>
  <div class="denglu">
    <!-- <div class="he">
    <h2 class="title">登录</h2>
    <div class="inner">
      <input type="text" placeholder="请输入用户名" v-model="userIn.user">
      <br>
      <span>{{ usertishi }}</span>
      <br>
      <input type="password" placeholder="请输入密码" v-model="userIn.pass" @keyup.enter="login()">
      <br>
      <span>{{ passtishi }}</span>
      <br>
      <span>{{ tishi }}</span>
      <br>
    </div>
    <br>
    <button type="button" @click="login()" id="login">登录</button>
    <h3 v-show="isShow">{{Info}}</h3>
    </div> -->
    <div class="wai">
        <div class="li">
        <div class="tab">
         <div @click="tabId=true" class="d" :class="[{tabId:true},{bs:tabId}]">登录</div>
         <div class="san"></div>
         <div @click="tabId=false" class="kd" :class="[{tabId:false},{bs:!tabId}]">快速登录（注册）</div>
       </div>
       <div class="box">
         <div v-show="tabId===true">
            <div class="inner">
                <div class="ming">
                    <div class="input">
                        <input type="text" placeholder="请输入手机号/邮箱/用户名" v-model="userIn.user">
                    </div>
                </div>
            <!-- <span>{{ usertishi }}</span> -->
                <div class="mi">
                    <div class="input">
                       <input type="password" placeholder="请输入登录密码" v-model="userIn.pass" @keyup.enter="login()"> 
                    </div>
                </div>
            <!-- <span>{{ passtishi }}</span> -->
            <!-- <span>{{ tishi }}</span> -->
            </div>
            <div class="lian">
                <a @click="tabId=false" class="s1" title="注册新用户">注册新用户</a>
                <a class="s2" title="忘记密码">忘记密码？</a>
            </div>
            <div class="deng">
              <button type="button" @click="login" id="login">登录</button>
            </div>
            <h3 v-show="isShow">{{Info}}</h3>
         </div>
         <div v-show="tabId===false">
             注册
         </div>
       </div>
       </div>
    </div>

    </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isShow: false,
      Info: localStorage.getItem("userArr"),
      usertishi: "",
      passtishi: "",
      tishi: "",
      userIn: {
        user: "",
        pass: ""
      },
        tabId:true
    };
  },
  methods: {
    login() {
      this.usertishi = "";
      this.passtishi = "";
      //用户名随意
      var obj = JSON.parse(this.Info);
      /*console.log(obj[0])//去数组里的第一组数据*/
      if (!this.userIn.user) {
        this.usertishi = "用户名不能为空";
      }
      //判断注册的数组中是否能找到输入的用户名
      var testList = obj.find(item => {
        return this.userIn.user === item.username;
      });
      if (!testList) this.usertishi = "用户名不存在";
      //密码
      if (!this.userIn.pass) {
        this.passtishi = "密码不能为空";
      }
      //判断输入的密码是否为输入的用户名的密码
      var testpass = obj.find(item => {
        return (
          this.userIn.pass === item.password &&
          this.userIn.user === item.username
        );
      });
      /*console.log(testpass)*/
      if (!testpass) this.passtishi = "密码不正确";
      if (this.usertishi || this.passtishi) return;

      userInfo = JSON.stringify(testpass); //把内容转换成字符串形式 

      localStorage.setItem("userInfo", userInfo);
      window.location.href = "../登录/登录成功.html";
    }

  }
};
</script>

<style lang="scss" scoped>

.denglu {
  font-family: "宋体";
  background: url(http://www.1date1cake.com/themes/1d1c/images/login-bg.jpg) no-repeat;
  background-size: 100%;
  height: 941px;
  .he {
    width: 300px;
    height: 400px;
    margin: 100px auto;
    text-align: center;
    background: rgba(50, 50, 50, 0.6);
    border-radius: 10px;
    .title {
    line-height: 50px;
    color: white;
    border-bottom: 1px solid silver;
    }
    .inner {
    margin-top: 80px;
    .a {
        text-decoration: none;
        font-size: 12px;
        color: white;
        float: right;
        margin: -20px 20px 0 0;
      }
    }
  }
   .wai{
    width: 360px;
    height: 330px;   
    padding: 5px;
    background: rgba(0,0,0,0.2);
    .li{
        font-family: 'Microsoft YaHei';
        background: #fff;
        padding: 10px;
        .tab{
            width: 332px;
            height: 35px;
            font-size:  18px;
            border-bottom: 1px solid #666;
            .d{
                text-decoration: none;
                height: 35px;
                width: 133px;
                float: left;
                line-height: 35px;
                text-align: center;
                position: relative;
            }
            .san{
                border-right: 1px solid #ccc;
                width: 1px;
                height: 20px;
                float: left;
                position: relative;
                left:0;
                top: 9px;
            }
            .kd{
                text-decoration: none;
                height: 35px;
                width: 160px;
                float: left;
                padding-left: 30px; 
                line-height: 35px;
                text-align: center;
            }
            .bs{
                border-bottom: 1px solid #f55a19;
                color: #f55a19;
            }
        }

        .box{
            height: 250px;
            padding: 20px 15px 0 15px;
            input{
                border: 0;
                margin-left: 15px;
                outline: none; 
            }
            .ming,.mi {
                width: 90%;
                height: 18px;
                border: 1px solid #CCC;
                padding: 10px 0;
                .input{
                    height: 12px;
                }
                }
            .mi{
                margin-top: 20px; 
            }
            .lian{
                width: 80%;
                margin-top:20px;
                font-size: 14px;
                padding: 0 10px ;
                a{
                    color: #666;
                }
                .s2{
                    float:right;
                } 
            }
            .deng{
              margin-top: 50px;
              width: 100%; 
              button{
                width: 281px;
                cursor: pointer;
                height: 40px;
                text-align: center;
                line-height: 40px;
                background: #f55a19;
                display: block;
                color: #fff;
                border:0;
              }
            }
        }   
    }
   }
}
</style>


