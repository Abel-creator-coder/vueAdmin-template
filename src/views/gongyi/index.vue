<template>
  <div>
  	<div class="bg2"></div>
  	<div class="tabWrap">
  		<div style="display: inline-block;background-color: #fff;">
  			<span class="list tabsel">金种子赋能</span>
  			<router-link to="/promise" class="list">希望+</router-link>
  			<router-link to="/specialpro" class="list">特色项目</router-link>
  		</div>
  	</div>
  	<div class="brumbWrap">
  		<span>您的位置：公益项目>金种子赋能</span>
  	</div>
  	<div class="content1Wrap">
  		<div class="left">
  			<p class="title">脊髓损伤者金种子培养计划</p>
  			<p class="content">「金种子培养计划」是北京新起点公益基金会发起的，旨在通过专业教育和培养，培育已康复，具有服务精神、具备丰富康复经验的脊髓损伤者</p>
  			<a href="" class="checkMore">查看详情</a>
  		</div>
		<img :src="bg3" class="bg3">
  	</div>
  	<div class="dynamic">
  		<p class="title">项目动态</p>
  		<div class="contentWrap">
  			<div :class="{'imgWrap':true,'active':dynamic.bg1}" @mouseenter="dynamicshow(1)" @mouseleave="dynamichide(1)">
  				<img class="img1" :src="test3">
  				<p :class="{'time':true,'color':dynamic.bg1}">2018.10.17</p>
  				<p :class="{'content':true,'color':dynamic.bg1}">“金钟子”培训计划等你来报名！</p>
  				<div class="tipWrap">
  					<span :class="{'color':dynamic.bg1}">更多</span>
  					<img :src="left">
  				</div>
  			</div>
  			<div :class="{'imgWrap':true,'active':dynamic.bg2}" @mouseenter="dynamicshow(2)" @mouseleave="dynamichide(2)">
  				<img class="img1" :src="test3">
  				<p :class="{'time':true,'color':dynamic.bg2}">2018.10.17</p>
  				<p :class="{'content':true,'color':dynamic.bg2}">“金钟子”培训计划等你来报名！</p>
  				<div class="tipWrap">
  					<span :class="{'color':dynamic.bg2}">更多</span>
  					<img :src="left">
  				</div>
  			</div>
  			<div class="imgWrap" :class="{'imgWrap':true,'active':dynamic.bg3}" @mouseenter="dynamicshow(3)" @mouseleave="dynamichide(3)">
  				<img class="img1" :src="test3">
  				<p :class="{'time':true,'color':dynamic.bg3}">2018.10.17</p>
  				<p :class="{'content':true,'color':dynamic.bg3}">“金钟子”培训计划等你来报名！</p>
  				<div class="tipWrap">
  					<span :class="{'color':dynamic.bg3}">更多</span>
  					<img :src="left">
  				</div>
  			</div>
  		</div>
  		<div class="checkMoreWrap">
  			<img :src="checkMore">
  		</div>
  	</div>
  	<div class="content2Wrap">
  		<p class="title">相关课程</p>
  		<div style="font-size: 0;">
  			<div :class="{'listWrap':true,'active':content2Wrap.list1}" @mouseenter="content2Wrapshow(1)" @mouseleave="content2Wraphide(1)">
  				<p :class="{'listContent':true,'color':content2Wrap.list1}">金种子赋能社公益机构员工培养项目</p>
  				<p :class="{'listTime':true,'color':content2Wrap.list1}">2018-01-01</p>
  			</div>
  			<div :class="{'listWrap':true,'active':content2Wrap.list2}" @mouseenter="content2Wrapshow(2)" @mouseleave="content2Wraphide(2)">
  				<p :class="{'listContent':true,'color':content2Wrap.list2}">金种子赋能社公益机构员工培养项目</p>
  				<p :class="{'listTime':true,'color':content2Wrap.list2}">2018-01-01</p>
  			</div>
  			<div :class="{'listWrap':true,'active':content2Wrap.list3}" @mouseenter="content2Wrapshow(3)" @mouseleave="content2Wraphide(3)">
  				<p :class="{'listContent':true,'color':content2Wrap.list3}">金种子赋能社公益机构员工培养项目</p>
  				<p :class="{'listTime':true,'color':content2Wrap.list3}">2018-01-01</p>
  			</div>
  			<div :class="{'listWrap':true,'active':content2Wrap.list4}" @mouseenter="content2Wrapshow(4)" @mouseleave="content2Wraphide(4)">
  				<p :class="{'listContent':true,'color':content2Wrap.list4}">金种子赋能社公益机构员工培养项目</p>
  				<p :class="{'listTime':true,'color':content2Wrap.list4}">2018-01-01</p>
  			</div>
  		</div>
  	</div>
  	<div class="content3Wrap">
  		<p class="title">金种子合伙人</p>
  		<div style="width: 600px;font-size: 0;">
  			<div class="listWrap" @mouseenter="content3Wrapshow(1)" @mouseleave="content3Wraphide(1)">
  				<div>
  					<img :src="people" class="avatar">
  					<span class="tips" v-show="content3Wrap.list1"> 康乐保是在造口领域，伤口领域，失禁领域的专业公司；推动这三个领域的学术发展和护理标准及产品服务标准。公司宗旨是：让有贴心护理</span>
  				</div>
  				<p class="content">台湾财团法人脊髓损伤潜能发展中心</p>
  			</div>
  			<div class="listWrap" @mouseenter="content3Wrapshow(2)" @mouseleave="content3Wraphide(2)">
  				<div>
  					<img :src="people" class="avatar">
  					<span class="tips" v-show="content3Wrap.list2"> 康乐保是在造口领域，伤口领域，失禁领域的专业公司；推动这三个领域的学术发展和护理标准及产品服务标准。公司宗旨是：让有贴心护理</span>
  				</div>
  				<p class="content">台湾财团法人脊髓损伤潜能发展中心</p>
  			</div>
  			<div class="listWrap" @mouseenter="content3Wrapshow(3)" @mouseleave="content3Wraphide(3)">
  				<div>
  					<img :src="people" class="avatar">
  					<span class="tips" v-show="content3Wrap.list3"> 康乐保是在造口领域，伤口领域，失禁领域的专业公司；推动这三个领域的学术发展和护理标准及产品服务标准。公司宗旨是：让有贴心护理</span>
  				</div>
  				<p class="content">台湾财团法人脊髓损伤潜能发展中心</p>
  			</div>
  			<div class="listWrap" @mouseenter="content3Wrapshow(4)" @mouseleave="content3Wraphide(4)">
  				<div>
  					<img :src="people" class="avatar">
  					<span class="tips" v-show="content3Wrap.list4"> 康乐保是在造口领域，伤口领域，失禁领域的专业公司；推动这三个领域的学术发展和护理标准及产品服务标准。公司宗旨是：让有贴心护理</span>
  				</div>
  				<p class="content">台湾财团法人脊髓损伤潜能发展中心</p>
  			</div>
  			<div class="listWrap" @mouseenter="content3Wrapshow(5)" @mouseleave="content3Wraphide(5)">
  				<div>
  					<img :src="people" class="avatar">
  					<span class="tips" v-show="content3Wrap.list5"> 康乐保是在造口领域，伤口领域，失禁领域的专业公司；推动这三个领域的学术发展和护理标准及产品服务标准。公司宗旨是：让有贴心护理</span>
  				</div>
  				<p class="content">台湾财团法人脊髓损伤潜能发展中心</p>
  			</div>
  			<div class="listWrap" @mouseenter="content3Wrapshow(6)" @mouseleave="content3Wraphide(6)">
  				<div>
  					<img :src="people" class="avatar">
  					<span class="tips" v-show="content3Wrap.list6"> 康乐保是在造口领域，伤口领域，失禁领域的专业公司；推动这三个领域的学术发展和护理标准及产品服务标准。公司宗旨是：让有贴心护理</span>
  				</div>
  				<p class="content">台湾财团法人脊髓损伤潜能发展中心</p>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
import people from '@/assets/people.png'
import bg3 from '@/assets/bg3.png'
import test3 from '@/assets/test3.png'
import left from '@/assets/left.png'
import checkMore from '@/assets/checkMore.png'

export default {
  data() {
    return {
    	people,
    	bg3,
    	test3,
    	left,
    	checkMore,
    	dynamic:{
    		bg1:false,
    		bg2:false,
    		bg3:false,
    	},
    	content2Wrap:{
    		list1:false,
    		list2:false,
    		list3:false,
    		list4:false,
    	},
    	content3Wrap:{
    		list1:false,
    		list2:false,
    		list3:false,
    		list4:false,
    		list5:false,
    		list6:false,
    	}
    }
  },
  mounted() {
  	
  },
  beforeDestroy() {
    
  },
  methods: {
    dynamicshow(index){
    	if(index == 1){
    		this.dynamic.bg1 = true;
    	}
    	if(index == 2){
    		this.dynamic.bg2 = true;
    	}
    	if(index == 3){
    		this.dynamic.bg3 = true;
    	}
    },
    dynamichide(index){
    	if(index == 1){
    		this.dynamic.bg1 = false;
    	}
    	if(index == 2){
    		this.dynamic.bg2 = false;
    	}
    	if(index == 3){
    		this.dynamic.bg3 = false;
    	}
    },
    content2Wrapshow(index){
    	if(index == 1){
    		this.content2Wrap.list1 = true;
    	}
    	if(index == 2){
    		this.content2Wrap.list2 = true;
    	}
    	if(index == 3){
    		this.content2Wrap.list3 = true;
    	}
    	if(index == 4){
    		this.content2Wrap.list4 = true;
    	}
    },
    content2Wraphide(index){
    	if(index == 1){
    		this.content2Wrap.list1 = false;
    	}
    	if(index == 2){
    		this.content2Wrap.list2 = false;
    	}
    	if(index == 3){
    		this.content2Wrap.list3 = false;
    	}
    	if(index == 4){
    		this.content2Wrap.list4 = false;
    	}
    },
    content3Wrapshow(index){
    	if(index == 1){
    		this.content3Wrap.list1 = true;
    	}
    	if(index == 2){
    		this.content3Wrap.list2 = true;
    	}
    	if(index == 3){
    		this.content3Wrap.list3 = true;
    	}
    	if(index == 4){
    		this.content3Wrap.list4 = true;
    	}
    	if(index == 5){
    		this.content3Wrap.list5 = true;
    	}
    	if(index == 6){
    		this.content3Wrap.list6 = true;
    	}
    },
    content3Wraphide(index){
    	if(index == 1){
    		this.content3Wrap.list1 = false;
    	}
    	if(index == 2){
    		this.content3Wrap.list2 = false;
    	}
    	if(index == 3){
    		this.content3Wrap.list3 = false;
    	}
    	if(index == 4){
    		this.content3Wrap.list4 = false;
    	}
    	if(index == 5){
    		this.content3Wrap.list5 = false;
    	}
    	if(index == 6){
    		this.content3Wrap.list6 = false;
    	}
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
.tabWrap .list{
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
.tabWrap .list:nth-child(3){
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
.content2Wrap .active{
	background-color: #03A692;
}
.content2Wrap .color{
	color: #fff!important;
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
.dynamic .active{
	background-color: #03A692;
}
.dynamic .color{
	color: #fff!important;
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
	border:1px dotted #dcdcdc;
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

