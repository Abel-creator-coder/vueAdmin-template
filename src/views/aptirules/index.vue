<template>
  <div>
  	<div class="bg2"></div>
  	<div class="tabWrap">
  		<div style="display: inline-block;background-color: #fff;">
  			<span class="tabsel">资质与规章</span>
  			<span @click="goToItem('years')">年审报表</span>
  			<span @click="goToItem('work')">工作简报</span>
  			<span @click="goToItem('audit')">审计报告</span>
  		</div>
  	</div>
  	<div class="brumbWrap">
  		<span>您的位置：信息公开>资质与规章</span>
  	</div>
    <div class="dynamic">
  		<div class="contentWrap">
  			<div v-for="aptitude,key in aptitudes" class="imgWrap">
  				<!-- <img class="img1" :src="aptitude.image"> -->
          <img class="img1" :src="people">
  			</div>
  		</div>
  	</div>
  	<div class="content1Wrap" >
      <div v-for="rule, key in rules"  :class="{'listWrap':true,'listactive':key==listactiveFlag}" @mouseenter="listin(key)" @mouseleave="listout(key)">
        <a :href="rule.url" download="w3logo">
          <div class="listContentWrap">
            <p class="title">{{ rule.title }}</p>
            <p class="time">{{ rule.createdAt | timeFilterFun }}</p>
          </div>
        </a>
				<hr class="content1Hr">
      </div>
    </div>
  </div>
</template>

<script>
import people from '@/assets/people.png'
import {getAptitudes,getRules} from '@/api/information.js'

export default {
  data() {
    return {
			people,
      pageNum:1,
      pageSize:10,
      aptitudes:[],
      rules:[],
      listactiveFlag:-1
    }
  },
  mounted() {
  	this.init();
  },
  beforeDestroy() {
    
  },
  methods: {
		init(){
      getAptitudes(this.pageNum,this.pageSize).then(reponse => {
        reponse.data.list.forEach(item => {
          this.aptitudes.push(item);
        });
      }).catch(error => {
        console.log(error);
      });
      getRules(this.pageNum,this.pageSize).then(reponse => {
        reponse.data.list.forEach(item => {
          this.rules.push(item);
        });
      }).catch(error => {
        console.log(error);
      });
    },
    goToItem(itemName){
			this.$router.push(itemName);
		},
    goDetail(id){
      console.log(id);
    },
    listin(key){
      this.listactiveFlag = key;
    },
    listout(e){
      this.listactiveFlag = -1;
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
	width: 70%;
	margin: 0 auto;
	position: relative;
	top:-20px;
	text-align:center;
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
.tabWrap span:nth-child(4){
	margin-right:0px;
}
.tabWrap .tabsel{
	background-color: #03A692;
}
.brumbWrap{
	width: 70%;
	margin: 0 auto;
	margin-top:5px;
	margin-bottom:25px;
}
.brumbWrap span{
	font-size: 12px;
	color: #666666;
}
.contentWrap{
  width: 70%;
  margin: 0 auto;
  margin-bottom:20px;
  margin-top:20px;
}
.contentWrap .title{
  font-size: 15px;
  color: #333333;
  margin-bottom:12px;
}
.contentWrap .content{
  font-size: 14px;
  color: #666666;
  line-height: 26px;
}
.content1Wrap{
  width: 70%;
  margin:0 auto;
  overflow: hidden;
}
.content1Wrap .title{
  font-size: 18px;
  margin-bottom:25px;
}
.content1Wrap .listWrap{
  font-size: 0;
  margin-bottom:20px;
  color: #333333;
}
.content1Wrap .listactive{
  background-color: #03A692;
  color: #fff;
	box-shadow:5px 0px 5px #000;
}
.content1Wrap .listWrap img{
  width: 173px;
  height: 165px;
  vertical-align: middle;
}
.content1Wrap .listContentWrap{
  display: inline-block;
  width: 100%;
  height: 65px;
  vertical-align: middle;
}
.content1Wrap .listContentWrap .title{
  float:left;
  font-size: 15px;
  margin-bottom:20px;
  margin-left:20px;
  margin-top:20px;
}
.content1Wrap .listContentWrap .time{
  float:right;
  font-size: 15px;
  margin-bottom:20px;
  margin-left:20px;
  margin-top:20px;
  margin-right:20px;
}
.content1Wrap .listContentWrap .content{
  font-size: 13px;
  margin-left:20px;
}
.checkMore{
  width: 90px;
  height: 34px;
  float: right;
  cursor: pointer;
}
.content1Hr {
	border:0.5px solid rgb(191, 192, 193);
	margin:0;
}
.dynamic .checkMoreWrap{
	width: 70%;
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
	width: 70%;
	height: 288px;
	margin: 0 auto;
	margin-bottom:20px;
}
.dynamic .contentWrap .imgWrap{
	width: 45%;
	height: 288px;
	border:1px solid #dcdcdc;
	margin-right:10px;
	display: inline-block;
}
.dynamic .contentWrap .imgWrap:last-child{
	margin-right:0;
}
.dynamic .contentWrap .imgWrap .img1{
	width: 100%;
	height: 100%;
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

