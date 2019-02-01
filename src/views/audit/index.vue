<template>
  <div>
  	<div class="bg2"></div>
  	<div class="tabWrap">
  		<div style="display: inline-block;background-color: #fff;">
  			<span @click="goToItem('aptirules')">资质与规章</span>
  			<span @click="goToItem('years')">年审报表</span>
  			<span @click="goToItem('work')">工作简报</span>
  			<span class="tabsel" >审计报告</span>
  		</div>
  	</div>
  	<div class="brumbWrap">
  		<span>您的位置：信息公开>审计报告</span>
  	</div>
  	<div class="content1Wrap" >
      <div v-for="audit, key in audits" :class="{'listWrap':true,'listactive':key==listactiveFlag}" @mouseenter="listin(key)" @mouseleave="listout(key)">
        <a :href="audit.url" download="w3clogo">
          <div class="listContentWrap">
            <p class="title">{{ audit.title }}</p>
          </div>
        </a>
				<hr class="content1Hr">
      </div>
    </div>
  </div>
</template>

<script>
import people from '@/assets/people.png'
import {getAudits} from '@/api/information.js'

export default {
  data() {
    return {
			people,
      pageNum:1,
      pageSize:5,
      audits:[],
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
      getAudits(this.pageNum,this.pageSize).then(reponse => {
        reponse.data.list.forEach(item => {
          this.audits.push(item);
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
  width: 427px;
  height: 65px;
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
.content1Hr {
	border:0.5px solid rgb(191, 192, 193);
	margin:0;
}
</style>

