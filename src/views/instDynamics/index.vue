<template>
  <div>
  	<div class="bg2"></div>
  	<div class="tabWrap">
  		<div style="display: inline-block;background-color: #fff;">
  			<span class="tabsel">机构动态</span>
  			<span @click="goToItem('mediaCoverage')">媒体报道</span>
  			<span @click="goToItem('newLifeStory')">新生命故事</span>
  			<span @click="goToItem('orgDynamics')">组织动态</span>
				<span @click="goToItem('relatedPolicies')">相关政策</span>
  		</div>
  	</div>
  	<div class="brumbWrap">
  		<span>您的位置：社会影响>机构动态</span>
  	</div>
  	<div class="content1Wrap" >
      <div v-for="inst, key in institues" @click="goDetail(inst.id)" :class="{'listWrap':true,'listactive':key==listactiveFlag}" @mouseenter="listin(key)" @mouseleave="listout(key)">
        <img v-bind:src="inst.image">
        <div class="listContentWrap">
          <p class="title">{{ inst.title }}</p>
          <p class="content">{{ inst.content }}</p>
        </div>
      </div>
      <!-- <img :src="checkMore" class="checkMore" @click="goMore"> -->
      <!-- <p>{{inst.title}}</p> -->
    </div>
  </div>
</template>

<script>
import people2 from '@/assets/people2.png'
import people from '@/assets/people.png'
import {getInstitueList} from '@/api/effort.js'
import Vue from 'vue'

export default {
  data() {
    return {
			people,
			people2,
      pageNum:1,
      pageSize:5,
      institues:[],
      listactiveFlag:-1
    }
  },
  created() {
    
  },
  mounted() {
  	this.init();
  },
  beforeDestroy() {
    
  },
  methods: {
    init(){
      getInstitueList(this.pageNum,this.pageSize).then(reponse => {
        reponse.data.list.forEach(item => {
          this.institues.push(item);
        });
        console.log(this.institues);
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
.tabWrap span:nth-child(5){
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
.contentWrap{
  width: 600px;
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
  width: 600px;
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
}
.content1Wrap .listWrap img{
  width: 173px;
  height: 165px;
  vertical-align: middle;
}
.content1Wrap .listContentWrap{
  display: inline-block;
  width: 427px;
  height: 165px;
  vertical-align: middle;
}
.content1Wrap .listContentWrap .title{
  font-size: 15px;
  margin-bottom:20px;
  margin-left:20px;
  margin-top:20px;
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
</style>

