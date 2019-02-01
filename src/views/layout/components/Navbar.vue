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
            <li @click="goPage('jijin1')">无障碍专项</li>
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
            <li @click="goPage('aptirules')">资质与规章</li>
            <li @click="goPage('years')">年审报表</li>
            <li @click="goPage('work')">工作简报</li>
            <li @click="goPage('audit')">审计报告</li>
          </ul>
        </div>
        <div :class="{'active':navStatus.jiaru}" @mouseenter="godetail(7)" @mouseleave="outdetail(7)">加 入 我 们
          <ul v-show="navStatus.jiaru">
            <li @click="goPage('friend')">伤友注册</li>
            <li @click="goPage('volunteer')">志愿者注册</li>
            <li @click="goPage('opportunity')">工作机会</li>
            <li @click="goPage('contactus')">联系我们</li>
          </ul>
        </div>
      </div>
      <div class="mark">
        <div class="imgWrap">
          <img class="search" :src="search">
        </div>
        <div class="imgWrap" :class="{'markactive':mark.tel}" @mouseover="showmark(1)" @mouseleave="hidemark(1)">
          <img class="tel" :src="telephone">
          <img :src="tel1" class="tel1" v-show="mark.tel">
        </div>
        <div class="imgWrap" @mouseover="showmark(2)" @mouseleave="hidemark(2)">
          <img class="weixin" :src="weichat">
          <img :src="weixin1" class="weixin1" v-show="mark.weixin">
        </div>
        <div class="imgWrap" @mouseover="showmark(3)" @mouseleave="hidemark(3)">
          <img class="qq" :src="qq">
          <img :src="qq1" class="qq1" v-show="mark.qq">
        </div>
        <div class="imgWrap" @mouseover="showmark(4)" @mouseleave="hidemark(4)">
          <img class="weibo" :src="weibo">
          <img :src="weibo1" class="weibo1" v-show="mark.weibo">
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="content1Wrap">
      <p style="font-size: 24px;color:#666666;margin-bottom:20px;text-align:center;">友情链接</p>
      <div style="font-size: 0;">
        <a class="linkList" :href="item.url" v-for="(item,index) in youqinglianjie" :key="index">
          <img :src="item.image">
          <span>{{item.title}}</span>
        </a>
        <!-- <div class="linkList">
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
        </div> -->
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
import tel1 from '@/assets/tel1.png'
import weixin1 from '@/assets/weixin1.png'
import qq1 from '@/assets/qq1.png'
import weibo1 from '@/assets/weibo1.png'

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
      tel1,
      weixin1,
      qq1,
      weibo1,
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
      },
      youqinglianjie:[]
    }
  },
  // components:{
  //   home:home
  // },
  mounted(){
    this.$store.dispatch('Getyouqinglianjie').then((data) => {
      this.youqinglianjie = data.list;
    }).catch(() => {
    })
  },
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
        this.mark.tel = true;
      }
      if(type == 2){
        this.weichat = weixinsel;
        this.mark.weixin = true;
      }
      if(type == 3){
        this.qq = qqsel;
        this.mark.qq = true;
      }
      if(type == 4){
        this.weibo = weibosel;
        this.mark.weibo = true;
      }
    },
    hidemark(type){
      if(type == 1){
        this.telephone = tel;
        this.mark.tel = false;
      }
      if(type == 2){
        this.weichat = weixin;
        this.mark.weixin = false;
      }
      if(type == 3){
        this.qq = qq;
        this.mark.qq = false;
      }
      if(type == 4){
        this.weibo = weibo;
        this.mark.weibo = false;
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
  border-bottom: 1px solid rgb(191, 192, 193);
  box-shadow:0px 0px 4px #000;
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
  position: relative;
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
  width: 70%;
  margin:0 auto;
  margin-top:20px;
  text-align:center;
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
  width: 20%;
  display: inline-block;
  margin-right:38px;
  margin-bottom:25px;
}
.linkList img{
  width: 100%;
  height: 30px;
}
.linkList span{
  color: #666666;
  font-size: 12px;
}
.linkList:nth-child(4n){
  margin-right:0;
}
.tel1{
  width: 196px;
  height: 51px;
  position: absolute;
  bottom: -51px;
  left: -64px;
  z-index: 1000;
}
.weixin1{
  width: 137px;
  height: 137px;
  position: absolute;
  bottom: -137px;
  left: -38px;
  z-index: 1000;
}
.qq1{
  width: 196px;
  height: 51px;
  position: absolute;
  bottom: -51px;
  left: -70px;
  z-index: 1000;
}
.weibo1{
  width: 141px;
  height: 136px;
  position: absolute;
  bottom: -136px;
  left: -70px;
  z-index: 1000;
}
</style>

