<template>
  <div id="app">
 
   <Tops />
    <router-view class='budong' />
    <Buttoms id="buttomsa" />
  </div>
</template>
<script>
import Tops from "@/components/tops"
import Buttoms from "@/components/buttoms"
export default {
  name: 'App',
  data() {
    return {
      a: true
    }
  },
  components: {
    Tops,
    Buttoms
  },
  mounted() {

    window.addEventListener('scroll', this.handleScroll)
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
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-style: normal;

  font-family: 'Microsoft YaHei', arial, sans-serif, "Open Sans", sans-serif;
  margin: 0 auto;
}

#app {
  margin: 0 auto;
}
.goods_detail{
  margin-top: 81px;
}

</style>
