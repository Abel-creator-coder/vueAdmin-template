<template>
  <div>
  	<div class="bg2"></div>
  	<div class="tabWrap">
  		<div style="display: inline-block;background-color: #fff;">
  			<span @click="goToItem('instDynamics')">机构动态</span>
  			<span @click="goToItem('mediaCoverage')">媒体报道</span>
  			<span class="tabsel">新生命故事</span>
  			<span @click="goToItem('orgDynamics')">组织动态</span>
				<span @click="goToItem('relatedPolicies')">相关政策</span>
  		</div>
  	</div>
  	<div class="brumbWrap">
  		<span>您的位置：社会影响>新生命故事</span>
  	</div>
  	<div class="dynamic">
  		<div class="contentWrap">
  			<div v-for="story,key in storys" class="imgWrap">
  				<img class="img1" :src="story.image">
  				<p class="time">{{ story.createdAt | timeFilterFun }}</p>
  				<p class="content">{{ story.title }}</p>
  				<div class="tipWrap">
  					<span>更多</span>
  					<img :src="left">
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
import people from '@/assets/people.png'
import left from '@/assets/left.png'
import people2 from '@/assets/people2.png'
import {getStoryList} from '@/api/effort.js'

export default {
  data() {
    return {
			people,
			people2,
			left,
			pageNum:1,
			pageSize:10,
			storys:[]
    }
  },
  mounted() {
  	this.init();
  },
  beforeDestroy() {
    
  },
  methods: {
		init(){
      getStoryList(this.pageNum,this.pageSize).then(reponse => {
        reponse.data.list.forEach(item => {
          this.storys.push(item);
        });
        console.log(this.storys);
      }).catch(error => {
        console.log(error);
      });
    },
    goToItem(itemName){
			this.$router.push(itemName);
		}
	},
	filters:{
		timeFilterFun:function(value){
			return value.substring(0,10);
		}
	}
}
</script>

<style scoped>
.bg2{
	width: 100%;
	height: 281px;
	background:url('../../assets/bg2.png') no-repeat center center;
	background-size: cover;
}
.tabWrap{
	font-size: 0;
	width: 600px;
	margin: 0 auto;
	position: relative;
	top:-20px;
}
.tabWrap span{
	display: inline-block;
	width: 113px;
	height: 51px;
	background-color: #C0C0C0;
	color: #fff;
	font-size: 15px;
	text-align: center;
	line-height: 51px;
	margin-right:1px;
}
.tabWrap span:nth-child(3){
	margin-right:0px;
}
.tabWrap .tabsel{
	background-color: #03A692;
}
.brumbWrap{
	width: 600px;
	margin: 0 auto;
	margin-top:5px;
	margin-bottom:25px;
}
.brumbWrap span{
	font-size: 12px;
	color: #666666;
}
.content1Wrap{
	font-size: 0;
	width: 600px;
	margin: 0 auto;
	margin-bottom:21px;
}
.content1Wrap .bg3{
	width: 280px;
	height: 313px;
	vertical-align: middle;
}
.content1Wrap .left{
	width: 318px;
	height: 246px;
	background-color: #03A692;
	display: inline-block;
	vertical-align: middle;
}
.content1Wrap .left p{
	margin-left:31px;
	margin-right:20px;
}
.content1Wrap .left .title{
	font-size: 15px;
	color: #fff;
	padding-top:44px;
}
.content1Wrap .left .content{
	font-size: 14px;
	color: #fff;
	margin-top:23px;
	margin-bottom:25px;
}
.content1Wrap .left .checkMore{
	font-size: 13px;
	color: #fff;
	margin-left:31px;
}
.content1Wrap .right{
	width: 280px;
	height: 179px;
}
.content2Wrap{
	width: 600px;
	margin:0 auto;
}
.content2Wrap .title{
	font-size: 18px;
	color: #333333;
	margin-bottom: 25px;
}
.content2Wrap .listWrap{
	width: 295px;
	height: 100px;
	border:1px dotted #dcdcdc;
	text-align: center;
	display: inline-block;
	margin-bottom:10px;
}
.content2Wrap .listWrap:nth-child(odd){
	margin-right:10px;
}
.content2Wrap .listWrap .listContent{
	font-size: 15px;
	color: #333333;
	margin-top:25px;
	margin-bottom: 23px;
}
.content2Wrap .listWrap .listTime{
	font-size: 12px;
	color: #666666;
}
.content3Wrap{
	width: 600px;
	margin:0 auto;
}
.content3Wrap .title{
	font-size: 18px;
	color: #333333;
	margin-bottom:25px;
}
.content3Wrap .listWrap{
	width: 180px;
	position: relative;
	margin-right:30px;
	margin-bottom:24px;
	display: inline-block;
}
.content3Wrap .listWrap:nth-child(3n){
	margin-right:0;
}
.content3Wrap .listWrap .avatar{
	width: 180px;
	height: 197px;
}
.content3Wrap .listWrap .tips{
	position: absolute;
	top:0;
	left: 0;
	width: 180px;
	height: 197px;
	background-color: rgba(0,0,0,0.5);
	font-size: 13px;
	color: #fff;
	text-align: center;
	display: inline-block;
	padding-left:10px;
	padding-right:10px;
	padding-top:10px;
}
.content3Wrap .listWrap .content{
	color: #212121;
	font-size: 14px;
	text-align: center;
	width: 160px;
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
	font-size: 18px;
	color: #333333;
	text-align: center;
	width: 600px;
	margin: 0 auto;
	text-align: left;
	margin-top:20px;
	margin-bottom: 15px;
}
.dynamic .contentWrap{
	width: 608px;
	height: 288px;
	margin: 0 auto;
	margin-bottom:20px;
}
.dynamic .contentWrap .imgWrap{
	width: 193px;
	height: 288px;
	border:1px solid #dcdcdc;
	margin-right:10px;
	display: inline-block;
}
.dynamic .contentWrap .imgWrap:last-child{
	margin-right:0;
}
.dynamic .contentWrap .imgWrap .img1{
	width: 191px;
	height: 187px;
}
.dynamic .contentWrap .imgWrap .time{
	font-size: 12px;
	color: #03A693;
	margin-top:11px;
	margin-left:9px;
	margin-bottom:11px;
}
.dynamic .contentWrap .imgWrap .content{
	font-size: 14px;
	color: #333333;
	margin-left:9px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.dynamic .contentWrap .imgWrap .tipWrap{
	float:right;
	margin-right:8px;
	cursor: pointer;
}
.dynamic .contentWrap .imgWrap .tipWrap span{
	font-size: 12px;
	color: #999999;
}
.dynamic .contentWrap .imgWrap .tipWrap img{
	width: 17px;
	height: 6px;
}
</style>

