import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Xiang from "@/bodysun/xiangQin"
import zhoubian from '@/components/zhoubian'
import quanbu from '@/components/shengri/quanbu'
import xinpin from '@/components/shengri/xinpin'
import yingji from '@/components/shengri/yingji'
import renqi from '@/components/shengri/renqi'
import dashi from '@/components/shengri/dashi'
import taocan from '@/components/shengri/taocan'
import quanzhou from '@/components/zhoubian/quanzhou'
import tianpin from '@/components/zhoubian/tianpin'
import wuliao from '@/components/zhoubian/wuliao'
import xianhua from '@/components/zhoubian/xianhua'
import lipin from '@/components/zhoubian/lipin'
import xiangqing from '@/components/shengri/xiangqing'
import dangao from '@/components/shengridangao-z'
import Data from '../components/Data'
import pinpai from '../components/pinpai'
import car from '../components/car'
import heduixinxi from '../components/heduixinxi'
import yuanliaozhilv from '../components/yuanliaozhilv'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/xiang/:count',
      name: 'xiang',
      component: Xiang,
    },{
      path: '/zhoubian',
      name: 'zhoubian',
      component: zhoubian,
      redirect: '/quanzhou',
      children:[
        {
          path: '/quanzhou',
          name: 'quanzhou',
          component: quanzhou
        },
        {
          path: '/tianpin',
          name: 'tianpin',
          component: tianpin
        },
        {
          path: '/wuliao',
          name: 'wuliao',
          component: wuliao
        },
        {
          path: '/xianhua',
          name: 'xianhua',
          component: xianhua
        },
        {
          path: '/lipin',
          name: 'lipin',
          component: lipin
        }
      ]
    },
     {
      path: '/dangao',
      name: 'dangao',
      component: dangao,
      redirect: '/quanbu',
      children:[
        {
        path: '/quanbu',
        name: 'quanbu',
        component: quanbu,
        },
        {
          path: '/xinpin',
          name: 'xinpin',
          component: xinpin
        },
        {
          path: '/yingji',
          name: 'yingji',
          component: yingji
        },
        {
          path: '/renqi',
          name: 'renqi',
          component: renqi
        },
        {
          path: '/dashi',
          name: 'dashi',
          component: dashi
        },
        {
          path: '/taocan',
          name: 'taocan',
          component: taocan
        }
    ]
    },{
      path: '/Data',
      name: 'Data',
      component: Data
    },
    {
      path: '/pinpai',
      name: 'pinpai',
      component: pinpai
    }, {
      path: '/car',
      name: 'car',
      component: car
    }, {
      path: '/heduixinxi',
      name: 'heduixinxi',
      component: heduixinxi
    },
    {
      path: '/yuanliaozhilv',
      name: 'yuanliaozhilv',
      component: yuanliaozhilv
    },
  ]
})
