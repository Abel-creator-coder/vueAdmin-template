<template>
  <div>
    <div class="wrap">
      <img :src="logo" class="logo">
      <div class="nav">
        <div :class="{'active':navStatus.home}" @click="godetail(1)">首 页</div>
        <div :class="{'active':navStatus.gongyi}" @mouseenter="godetail(2)" @mouseleave="outdetail(2)">公 益 项 目
          <ul v-show="navStatus.gongyi">
            <li @click="goPage('gongyi')">金种子赋能</li>
            <li @click="goPage('promise')">希望+</li>
            <li @click="goPage('specialpro')">特色项目</li>
          </ul>
        </div>
        <div :class="{'active':navStatus.jijin}" @mouseenter="godetail(3)" @mouseleave="outdetail(3)">专 项 基 金
          <ul v-show="navStatus.jijin">
            <li>无障碍专项</li>
            <li>基金</li>
          </ul>
        </div>
        <div :class="{'active':navStatus.aboutus}" @mouseenter="godetail(4)" @mouseleave="outdetail(4)">关 于 我 们
          <ul v-show="navStatus.aboutus">
            <li @click="goPage('aboutus1')">机构简介</li>
            <li @click="goPage('aboutus')">爱心顾问团</li>
            <li @click="goPage('aboutus2')">脊椎损伤</li>
            <li @click="goPage('jiagou')">组织架构</li>
          </ul>
        </div>
        <div :class="{'active':navStatus.shehui}" @mouseenter="godetail(5)" @mouseleave="outdetail(5)">社 会 影 响
          <ul v-show="navStatus.shehui">
            <li @click="goPage('instDynamics')">机构动态</li>
            <li @click="goPage('mediaCoverage')">媒体报道</li>
            <li @click="goPage('newLifeStory')">新生命故事</li>
            <li @click="goPage('orgDynamics')">组织动态</li>
            <li @click="goPage('relatedPolicies')">相关政策</li>
          </ul>
        </div>
        <div :class="{'active':navStatus.xinxi}" @mouseenter="godetail(6)" @mouseleave="outdetail(6)">信 息 公 开
          <ul v-show="navStatus.xinxi">
            <li>资质与规章</li>
            <li>年审报表</li>
            <li>工作简报</li>
            <li>审计报告</li>
          </ul>
        </div>
        <div :class="{'active':navStatus.jiaru}" @mouseenter="godetail(7)" @mouseleave="outdetail(7)">加 入 我 们
          <ul v-show="navStatus.jiaru">
            <li>伤友注册</li>
            <li>志愿者注册</li>
            <li>工作机会</li>
            <li>联系我们</li>
          </ul>
        </div>
      </div>
      <div class="mark">
        <div class="imgWrap">
          <img class="search" :src="search">
        </div>
        <div class="imgWrap" :class="{'markactive':mark.tel}" @mouseover="showmark(1)" @mouseleave="hidemark(1)">
          <img class="tel" :src="telephone">
        </div>
        <div class="imgWrap" @mouseover="showmark(2)" @mouseleave="hidemark(2)">
          <img class="weixin" :src="weichat">
        </div>
        <div class="imgWrap" @mouseover="showmark(3)" @mouseleave="hidemark(3)">
          <img class="qq" :src="qq">
        </div>
        <div class="imgWrap" @mouseover="showmark(4)" @mouseleave="hidemark(4)">
          <img class="weibo" :src="weibo">
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="content1Wrap">
      <p style="font-size: 24px;color:#666666;margin-bottom:20px;text-align:center;">友情链接</p>
      <div style="font-size: 0;">
        <div class="linkList">
          <img :src="link">
          <span>中国残疾人联合会</span>
        </div>
        <div class="linkList">
          <img :src="link">
          <span>中国残疾人联合会</span>
        </div>
        <div class="linkList">
          <img :src="link">
          <span>中国残疾人联合会</span>
        </div>
        <div class="linkList">
          <img :src="link">
          <span>中国残疾人联合会</span>
        </div>
        <div class="linkList">
          <img :src="link">
          <span>中国残疾人联合会</span>
        </div>
        <div class="linkList">
          <img :src="link">
          <span>中国残疾人联合会</span>
        </div>
        <div class="linkList">
          <img :src="link">
          <span>中国残疾人联合会</span>
        </div>
        <div class="linkList">
          <img :src="link">
          <span>中国残疾人联合会</span>
        </div>
      </div>
    </div>
    <div class="footerWrap">
      <p class="text">©2016 Noval Inception Foundation</br>京ICP备16052672</p>
    </div>
  </div>
</template>

<script>
// import default as home from '../../home' 
import { mapGetters } from 'vuex'
import logo from '@/assets/logo.png'
import search from '@/assets/search.png'
import tel from '@/assets/tel.png'
import telsel from '@/assets/telsel.png'
import qq from '@/assets/qq.png'
import qqsel from '@/assets/qqsel.png'
import weixin from '@/assets/weixin.png'
import weixinsel from '@/assets/weixinsel.png'
import weibo from '@/assets/weibo.png'
import weibosel from '@/assets/weibosel.png'
import link from '@/assets/link.png'

export default {
  data(){
    return {
      logo,
      search,
      weibo:weibo,
      link,
      telephone:tel,
      weichat:weixin,
      qq:qq,
      navStatus:{
        home:true,
        gongyi:false,
        jijin:false,
        aboutus:false,
        shehui:false,
        xinxi:false,
        jiaru:false,
      },
      mark:{
        tel:true,
        weibo:false,
        qq:false,
        weixin:false,
        search:false,
      }
    }
  },
  // components:{
  //   home:home
  // },
  methods:{
    godetail(type){
      if(type == 1) {
        Object.assign(this.navStatus,{home:true,gongyi:false,jijin:false,aboutus:false,shehui:false,xinxi:false,jiaru:false,});
        this.$router.push('home');
      }else if(type == 2) {
        Object.assign(this.navStatus,{home:false,gongyi:true,jijin:false,aboutus:false,shehui:false,xinxi:false,jiaru:false,});
      }else if(type == 3) {
        Object.assign(this.navStatus,{home:false,gongyi:false,jijin:true,aboutus:false,shehui:false,xinxi:false,jiaru:false,});
      }else if(type == 4) {
        Object.assign(this.navStatus,{home:false,gongyi:false,jijin:false,aboutus:true,shehui:false,xinxi:false,jiaru:false,});
      }else if(type == 5) {
        Object.assign(this.navStatus,{home:false,gongyi:false,jijin:false,aboutus:false,shehui:true,xinxi:false,jiaru:false,});
      }else if(type == 6) {
        Object.assign(this.navStatus,{home:false,gongyi:false,jijin:false,aboutus:false,shehui:false,xinxi:true,jiaru:false,});
      }else if(type == 7) {
        Object.assign(this.navStatus,{home:false,gongyi:false,jijin:false,aboutus:false,shehui:false,xinxi:false,jiaru:true,});
      }
    },
    outdetail(type){
      if(type == 1) {
        Object.assign(this.navStatus,{home:false,gongyi:false,jijin:false,aboutus:false,shehui:false,xinxi:false,jiaru:false,});
      }else if(type == 2) {
        Object.assign(this.navStatus,{home:false,gongyi:false,jijin:false,aboutus:false,shehui:false,xinxi:false,jiaru:false,});
      }else if(type == 3) {
        Object.assign(this.navStatus,{home:false,gongyi:false,jijin:false,aboutus:false,shehui:false,xinxi:false,jiaru:false,});
      }else if(type == 4) {
        Object.assign(this.navStatus,{home:false,gongyi:false,jijin:false,aboutus:false,shehui:false,xinxi:false,jiaru:false,});
      }else if(type == 5) {
        Object.assign(this.navStatus,{home:false,gongyi:false,jijin:false,aboutus:false,shehui:false,xinxi:false,jiaru:false,});
      }else if(type == 6) {
        Object.assign(this.navStatus,{home:false,gongyi:false,jijin:false,aboutus:false,shehui:false,xinxi:false,jiaru:false,});
      }else if(type == 7) {
        Object.assign(this.navStatus,{home:false,gongyi:false,jijin:false,aboutus:false,shehui:false,xinxi:false,jiaru:false,});
      }
    },
    showmark(type){
      if(type == 1){
        this.telephone = telsel;
      }
      if(type == 2){
        this.weichat = weixinsel;
      }
      if(type == 3){
        this.qq = qqsel;
      }
      if(type == 4){
        this.weibo = weibosel;
      }
    },
    hidemark(type){
      if(type == 1){
        this.telephone = tel;
      }
      if(type == 2){
        this.weichat = weixin;
      }
      if(type == 3){
        this.qq = qq;
      }
      if(type == 4){
        this.weibo = weibo;
      }
    },
    goPage(page){
      this.$router.push(page);
    },
  }
  
}
</script>

<style scoped>
.wrap{
  height: 61px;
/*  border-bottom: 1px solid black;*/
}
.logo{
  width: 146px;
  height: 60px;
  float: left;
}
.nav{
  font-size: 0;
  float: left;
}
.nav > div{
  font-size: 13px;
  color: #333333;
  line-height: 61px;
  display: inline-block;
  width: 80px;
  font-weight: bold;
  text-align: center;
  position: relative;
}
.nav ul{
  margin:0;
  padding: 0;
  background-color: rgba(255,255,255,0.8);
  font-size: 12px;
  color: #333333;
  border-bottom: 2px solid #03A692;
  position: absolute;
  top:61px;
  left: 0;
  z-index: 1000;
}
.nav li{
  list-style: none;
  height: 40px;
  line-height: 40px;
  padding-left:10px;
  padding-right:10px;
  cursor: pointer;
}
.nav li:hover{
  color: #03A692;
}
.active{
  color: #03A692!important;
  position: relative;
}
.active:after{
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  border-width: 6px;
  border-bottom-color: #03A692;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -6px;
}
.mark{
  float: right;
  font-size: 0;
}
.imgWrap{
  height: 61px;
  width: 66px;
  display: inline-block;
  text-align: center;
  line-height: 80px;
  border-left: 1px solid #B2B2B2;
}
.imgWrap .search{
  width: 17px;
  height: 17px;
}
.imgWrap .tel{
  width: 17px;
  height: 17px;
}
.imgWrap .weibo{
  width: 22px;
  height: 18px;
}
.imgWrap .weixin{
  width: 20px;
  height: 16px;
}
.imgWrap .qq{
  width: 15px;
  height: 18px;
}
.markactive{
  position: relative;
}
.markactive:after{
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  border-width: 6px;
  border-top-color: #fff;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -6px;
}
.content1Wrap{
  width: 600px;
  margin:0 auto;
  margin-top:20px;
}
.footerWrap{
  width: 100%;
  border-top:1px solid #E7E7E7;
  height: 60px;
}
.footerWrap .text{
  font-size: 12px;
  color: #262626;
  text-align: center;
  line-height: 18px;
}
.linkList{
  width: 98px;
  display: inline-block;
  margin-right:68px;
  margin-bottom:25px;
}
.linkList img{
  width: 98px;
  height: 30px;
}
.linkList span{
  color: #666666;
  font-size: 12px;
}
.linkList:nth-child(4n){
  margin-right:0;
}
</style>

