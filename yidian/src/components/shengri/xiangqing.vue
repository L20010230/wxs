<template>
  <div class="xiangqing">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="top">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/' }">产品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="addcar">
      <div class="collect">
        <img
          src="https://img2.1date1cake.com/images/201804/1523323287427417354.jpg"
          v-show="downIcon"
        >
        <img
          src="http://www.1date1cake.com/images/201804/goods_img/71_P_1523323819795.jpg"
          v-show="downIco"
        >
        <div class="xiao">
          <img
            src="https://img2.1date1cake.com/images/201804/1523323287427417354.jpg"
            @click="collect"
            :class="indexx==this.$refs.i1?'hover':''"
            ref="i1"
          >
          <img
            src="https://img1.1date1cake.com/images/201804/goods_img/71_P_1523323819795.jpg"
            @click="collec"
            :class="indexx==this.$refs.i1?'':'hover'"
            ref="i2"
          >
        </div>
      </div>
      <div class="zi">
        <h2>芒莓二重奏</h2>
        <p>
          正当季的蓝莓遇上滑嫩绵软的芒果，一口蛋糕可以吃到两种酸甜。来自宝岛的金煌芒铺满蛋糕。看似几粒点缀的蓝莓果粒，还在奶油与红丝绒蛋糕里藏着惊喜。
          <br>
          <br>注：薄荷叶为摄影装饰，实物没有。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "xiangqing",
  data() {
    return {
      downIcon: true,
      downIco: false,
      indexx: this.$refs.i1
    };
  },
  methods: {},
  computed: {
    ...mapState(["quanbu"])
  },
  methods: {
    collect() {
      this.indexx = this.$refs.i1;
      this.downIcon = true;
      this.downIco = false;
    },
    collec() {
      this.indexx = this.$refs.i2;
      this.downIco = true;
      this.downIcon = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.xiangqing {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  .top {
    width: 100%;
    height: 70px;
    line-height: 70px;
  }
  .addcar {
    display: flex;
    justify-content: space-between;
    .collect {
      width: 800px;
      position: relative;
      .xiao {
        position: absolute;
        bottom: 15px;
        right: 15px;
        .hover {
          border: solid #f55a19 2px;
        }
        img {
          width: 50px;
          height: 36px;
          border: solid 2px transparent;
        }
        img:hover {
          border: solid #f55a19 2px;
        }
      }
    }
    .zi {
      width: 390px;
      p {
        font-size: 14px;
        margin-top: 20px;
      }
    }
  }
}
</style>


