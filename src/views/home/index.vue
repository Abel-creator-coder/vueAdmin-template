<template>
  <div>
  	<div class="swiperWrap">
  		<swiper :options="swiperOption">
	      <!-- <swiper-slide><img :src="lun1"></swiper-slide>
	      <swiper-slide><img :src="lun2"></swiper-slide>
	      <swiper-slide><img :src="lun3"></swiper-slide>
	      <swiper-slide><img :src="lun4"></swiper-slide> -->
	      <!-- <swiper-slide><img :src="test1"></swiper-slide> -->
        <!-- <swiper-slide><img :src="test2"></swiper-slide> -->
	      <swiper-slide v-for="(item,index) in lunbo" :key="index"><img :src="item.image"></swiper-slide>
	    </swiper>
	    <img :src="arrowLeft" class="arrowLeft" @mouseover="arrowLeftIn" @mouseleave="arrowLeftOut">
	    <img :src="arrowRight" class="arrowRight" @mouseover="arrowRightIn" @mouseleave="arrowRightOut">
  	</div>
  	<div class="content2Wrap">
  		<div class="imgWrap">
  			<div :class="{'active2':content2Wrap.bg1}" @mouseenter="content2Wrapshow(1)" @mouseleave="content2Wraphide(1)">
  				<p class="title">脊髓损伤者</p>
  				<p class="content">生活重建训练营</p>
  			</div>
  			<div :class="{'active3':content2Wrap.bg2}" @mouseenter="content2Wrapshow(2)" @mouseleave="content2Wraphide(2)">
  				<p class="title">脊髓损伤者</p>
  				<p class="content">生活重建训练营</p>
  			</div>
  			<div :class="{'active2':content2Wrap.bg3}" @mouseenter="content2Wrapshow(3)" @mouseleave="content2Wraphide(3)">
  				<p class="title">脊髓损伤者</p>
  				<p class="content">生活重建训练营</p>
  			</div>
  			<div :class="{'active3':content2Wrap.bg4}" @mouseenter="content2Wrapshow(4)" @mouseleave="content2Wraphide(4)">
  				<p class="title">脊髓损伤者</p>
  				<p class="content">生活重建训练营</p>
  			</div>
  		</div>
  	</div>
  	<div class="content1Wrap">
  		<div style="width: 600px;margin:0 auto;padding-top: 28px;">
  			<ul class="left">
	  			<li :class="{'leftList':true,'listActive':listactive == index}" v-for="(item,index) in fazhanlicheng" @mouseover="listchange(index)">
	  				<span class="time">{{item.time1}}<br/>{{item.time2}}</span>
	  				<span class="listText" >{{item.title}}</span>
	  			</li>
	  			<!-- <li class="leftList">
	  				<span class="time">2016</br>7-20</span>
	  				<span class="listText">获《新浪公益》年度中国致敬奖</span>
	  			</li>
	  			<li class="leftList">
	  				<span class="time">2016</br>7-20</span>
	  				<span class="listText">获《新浪公益》年度中国致敬奖</span>
	  			</li>
	  			<li class="leftList">
	  				<span class="time">2016</br>7-20</span>
	  				<span class="listText">获《新浪公益》年度中国致敬奖</span>
	  			</li>
	  			<li class="leftList">
	  				<span class="time">2016</br>7-20</span>
	  				<span class="listText">获《新浪公益》年度中国致敬奖</span>
	  			</li>
	  			<li class="leftList">
	  				<span class="time">2016</br>7-20</span>
	  				<span class="listText">获《新浪公益》年度中国致敬奖</span>
	  			</li> -->
  			</ul>
  			<span style="display: inline-block;font-size: 24px;color:#fff;vertical-align: middle;margin-left:44px;width: 10px;">一起见证我们的发展</span>
  		</div>
  	</div>
  	<div class="dynamic">
  		<p class="title">机构动态</p>
  		<div class="contentWrap">
  			<div class="imgWrap" v-for="item in jigoudongtai">
  				<img class="img1" :src="item.image">
  				<p class="time">{{item.createdAt}}</p>
  				<p class="content">{{item.title}}</p>
  				<div class="tipWrap">
  					<span>更多</span>
  					<img :src="left">
  				</div>
  			</div>
  			<!-- <div class="imgWrap">
  				<img class="img1" :src="test3">
  				<p class="time">2018.10.17</p>
  				<p class="content">“金钟子”培训计划等你来报名！</p>
  				<div class="tipWrap">
  					<span>更多</span>
  					<img :src="left">
  				</div>
  			</div>
  			<div class="imgWrap">
  				<img class="img1" :src="test3">
  				<p class="time">2018.10.17</p>
  				<p class="content">“金钟子”培训计划等你来报名！</p>
  				<div class="tipWrap">
  					<span>更多</span>
  					<img :src="left">
  				</div>
  			</div> -->
  		</div>
  		<div class="checkMoreWrap">
  			<img :src="checkMore">
  		</div>
  	</div>
  	<div class="part5">
  		<div class="contentWrap">
  			<img :src="video" class="video">
  			<img :src="play" class="play">
  			<p class="title">{{shipinjieshao.conKey}}</p>
  			<p class="content">{{shipinjieshao.conVal}}</p>
  		</div>
  	</div>
    <div style="position: fixed;right:5px;top:53%;border-radius: 3px;width: 33px;height: 68px;background-color: #E11E48;text-align: center;cursor:pointer;z-index: 1000;" @click="golove">
      <span style="font-size: 12px;color:#fff;display: inline-block;width: 10px;margin-top:5px;">爱的公示</span>

    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import test1 from '@/assets/test1.png'
import test2 from '@/assets/test2.png'
import test3 from '@/assets/test3.png'
import lun1 from '@/assets/lun1.png'
import lun2 from '@/assets/lun2.png'
import lun3 from '@/assets/lun3.png'
import lun4 from '@/assets/lun4.png'
import video from '@/assets/video.png'
import play from '@/assets/play.png'
import checkMore from '@/assets/checkMore.png'
import arrowLeftSel from '@/assets/arrowLeftSel.png'
import arrowLeftnoSel from '@/assets/arrowLeft.png'
import arrowRightnoSel from '@/assets/arrowRight.png'
import arrowRightSel from '@/assets/arrowRightSel.png'
import left from '@/assets/left.png'
import img5 from '@/assets/img5.png'

export default {
  data() {
    return {
    	test1,
    	test2,
    	test3,
    	lun1,
    	lun2,
    	lun3,
    	lun4,
    	video,
    	play,
    	checkMore,
    	left,
    	img5,
    	arrowLeft:'',
    	arrowRight:'',
    	listactive:0,
    	content2Wrap:{
    		bg1:false,
    		bg2:false,
    		bg3:false,
    		bg4:false,
    	},
    	fazhanlicheng:[],
      swiperOption: {//swiper3
      	loop: true,
  	    autoplay: {
  	      	speed: 2000,
  		    delay: 3000,
  		    stopOnLastSlide: false, 
  		    disableOnInteraction: true,
  		    reverseDirection: false,
  	  	},
  	  	navigation: {
  		    nextEl: '.arrowRight', //前进按钮的css选择器或HTML元素。
  		    prevEl: '.arrowLeft', //后退按钮的css选择器或HTML元素。
  		  },
      },
      jigoudongtai:[],
      lunbo:[],
      shipinjieshao:{}
    }
  },
  components: {
      swiper,
      swiperSlide
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  mounted() {
  	this.arrowLeft = arrowLeftnoSel;
  	this.arrowRight = arrowRightnoSel;
    this.$store.dispatch('Getjigoudongtai', {pageNum:0,pageSize:3}).then((data) => {
      this.jigoudongtai = data.list.map((item) => {
        return {...item,createdAt:item.createdAt.slice(0,10)}
      });
    }).catch(() => {
    })
    this.$store.dispatch('Getfazhanlicheng').then((data) => {
      this.fazhanlicheng = data.list.map((item) => {
        return {...item,time1:item.createdAt.slice(0,4),time2:item.createdAt.slice(9,14),}
      });
    }).catch(() => {
    })
    this.$store.dispatch('Getlunbo').then((data) => {
      this.lunbo = data.list;
    }).catch(() => {
    })
    this.$store.dispatch('Getshipinjieshao').then((data) => {
      // console.log(data);
      this.shipinjieshao = data;
    }).catch(() => {
    })
  },
  beforeDestroy() {
    
  },
  methods: {
    arrowLeftIn(){
    	this.arrowLeft = arrowLeftSel;
    },
    arrowLeftOut(){
    	this.arrowLeft = arrowLeftnoSel;
    },
    arrowRightIn(){
    	this.arrowRight = arrowRightSel;
    },
    arrowRightOut(){
    	this.arrowRight = arrowRightnoSel;
    },
    listchange(index){
    	this.listactive = index;
    },
    content2Wrapshow(index){
    	if(index == 1){
    		this.content2Wrap.bg1 = true;
    	}
    	if(index == 2){
    		this.content2Wrap.bg2 = true;
    	}
    	if(index == 3){
    		this.content2Wrap.bg3 = true;
    	}
    	if(index == 4){
    		this.content2Wrap.bg4 = true;
    	}
    },
    content2Wraphide(index){
    	if(index == 1){
    		this.content2Wrap.bg1 = false;
    	}
    	if(index == 2){
    		this.content2Wrap.bg2 = false;
    	}
    	if(index == 3){
    		this.content2Wrap.bg3 = false;
    	}
    	if(index == 4){
    		this.content2Wrap.bg4 = false;
    	}
    },
    golove(){
      this.$router.push('love');
    }
  }
}
</script>

<style scoped>
.swiperWrap{
	position: relative;
	width: 100%;
}
.arrowLeft{
	position: absolute;
	top:190px;
	right:0;
	width: 41px;
	height: 41px;
	z-index: 1000;
	outline:none;
}
.arrowRight{
	position: absolute;
	top:230px;
	right:0;
	width: 41px;
	height: 41px;
	z-index: 1000;
	outline:none;
}
.dynamic .checkMoreWrap{
	width: 608px;
	margin: 0 auto;
	height: 34px;
	overflow: hidden;
	margin-bottom:30px;
}
.dynamic .checkMoreWrap img{
	cursor: pointer;
	height: 34px;
	width: 90px;
	float: right;
}
.dynamic .title{
	font-size: 24px;
	color: #333333;
	text-align: center;
	margin-top:31px;
	margin-bottom: 30px;
}
.dynamic .contentWrap{
	width: 608px;
	height: 288px;
	margin: 0 auto;
	margin-bottom:20px;
}
.contentWrap .imgWrap{
	width: 193px;
	height: 288px;
	border:1px dotted #dcdcdc;
	margin-right:10px;
	display: inline-block;
}
.contentWrap .imgWrap:last-child{
	margin-right:0;
}
.contentWrap .imgWrap .img1{
	width: 191px;
	height: 187px;
}
.contentWrap .imgWrap .time{
	font-size: 12px;
	color: #03A693;
	margin-top:11px;
	margin-left:9px;
	margin-bottom:11px;
}
.contentWrap .imgWrap .content{
	font-size: 14px;
	color: #333333;
	margin-left:9px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.contentWrap .imgWrap .tipWrap{
	float:right;
	margin-right:8px;
	cursor: pointer;
}
.contentWrap .imgWrap .tipWrap span{
	font-size: 12px;
	color: #999999;
}
.contentWrap .imgWrap .tipWrap img{
	width: 17px;
	height: 6px;
}
.part5{
	width: 100%;
	height: 485px;
	background:url('../../assets/bg1.png') no-repeat center center;
	background-position: cover;
	background-size: 100%;
	padding-top:11px;
}
.part5 .contentWrap{
	width: 600px;
	height: 454px;
	margin: 0 auto;
	margin-top:11px;
	border:1px dotted #dcdcdc;
	background-color: #fff;
	position: relative;
}
.part5 .contentWrap .video{
	width: 587px;
	height: 324px;
	margin-left:5px;
	margin-top:5px;
}
.part5 .contentWrap .play{
	width: 73px;
	height: 73px;
	position: absolute;
	top:130px;
	left: 260px;
	cursor: pointer;
}
.part5 .contentWrap .title{
	color: #333333;
	font-size: 18px;
	margin-top:11px;
	margin-bottom:20px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-left:22px;
}
.part5 .contentWrap .content{
	color: #666666;
	font-size: 15px;
	margin-left:22px;
}
.content1Wrap{
	width: 100%;
	height: 556px;
	background-color: #E11E48;
}
.content1Wrap ul{
	width: 500px;
	height: 500px;
	overflow:hidden;
	overflow-y: scroll;
	list-style: none;
	margin:0;
	display: inline-block;
	vertical-align: middle;
}
.content1Wrap .leftList{
	color: #fff;
	font-size: 14px;
	height: 100px;

}
.content1Wrap .leftList .time{
	margin-right:48px;
}
.content1Wrap .leftList .listText{
	display: inline-block;
	margin-top:-20px;
}
.content1Wrap .listActive{
	font-size: 18px;
}
.content1Wrap ul::-webkit-scrollbar {/*滚动条整体样式*/
    width: 3px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}
.content1Wrap ul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #03A692;
}
.content1Wrap ul::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #fff;
}
.content2Wrap{
	width: 100%;
	height: 537px;
	position: relative;
	background:url('../../assets/img5.png') no-repeat center center;
	background-size: cover;
}
.content2Wrap .active2{
	background-color: rgb(3,166,146,1);
}
.content2Wrap .active3{
	background-color: rgb(225,30,72,1);
}
.content2Wrap .imgWrap{
	position:absolute;
	top:0;
	left:0;
	width: 100%;
	height: 537px;
}
.content2Wrap .imgWrap div{
	width: 24.625%;
	height: 537px;
	border-right:0.5% solid #fff;
	display: inline-block;
	border-right: 2px solid #fff;
	vertical-align: middle;
}
.content2Wrap .imgWrap div:nth-child(4){
	border-right: none;
}
.content2Wrap .imgWrap div .title{
	font-size: 24px;
	color: #fff;
	font-weight: bold;
	text-align: center;
	padding-top:210px;
}
.content2Wrap .imgWrap div .content{
	font-size: 24px;
	color: #fff;
	text-align: center;
}
</style>

