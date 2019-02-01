<template>
  <div>
  	<!-- <div class="bg2"></div>
  	<div class="tabWrap">
  		<div style="display: inline-block;background-color: #fff;">
  			<span @click="goToItem('instDynamics')">机构动态</span>
  			<span class="tabsel">媒体报道</span>
  			<span @click="goToItem('newLifeStory')">新生命故事</span>
  			<span @click="goToItem('orgDynamics')">组织动态</span>
				<span @click="goToItem('relatedPolicies')">相关政策</span>
  		</div>
  	</div> --> 
  	<div class="brumbWrap">
  		<span>您的位置：加入我们>伤友注册</span>
  	</div>
  	<div class="form-container">

    </div>
  </div>
</template>

<script>
import people from '@/assets/people.png'
import {getMediaList} from '@/api/effort.js'

export default {
  data() {
    return {
			people,
      pageNum:1,
      pageSize:5,
      medias:[],
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
      getMediaList(this.pageNum,this.pageSize).then(reponse => {
        reponse.data.list.forEach(item => {
          this.medias.push(item);
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
	width: 80%;
	margin: 0 auto;
	margin-top:20px;
	margin-bottom:25px;
}
.brumbWrap span{
	font-size: 12px;
	color: #666666;
}

.form-container {
  width: 80%;
  margin: 0 auto;
  margin-top:20px;
  min-height: 900px;
  background: #03A692;
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

