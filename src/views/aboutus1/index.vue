<template>
  <div>
  	<div class="bg2"></div>
  	<div class="tabWrap">
  		<div style="display: inline-block;background-color: #fff;">
  			<span class="list tabsel">机构简介</span>
        <router-link to="/aboutus" class="list">爱心顾问团</router-link>
        <router-link to="/aboutus2" class="list">脊椎损伤</router-link>
        <router-link to="/jiagou" class="list">组织架构</router-link>

  			<!-- <span>爱心顾问团</span>
  			<span>脊椎损伤</span>
  			<span>组织架构</span> -->
  		</div>
  	</div>
  	<div class="brumbWrap">
  		<span>您的位置：关于我们>机构简介</span>
  	</div>
  	<p style="font-size:18px;color:#333333;width:600px;margin:0 auto;text-align:left;">机构简介</p>
    <div class="contentWrap">
      <p class="title">{{jigoujianjie.conKey}}</p>
      <p class="content" v-html="jigoujianjie.conVal"></p>
    </div>
    <!-- <div class="contentWrap">
      <p class="title">起源：</p>
      <p class="content">2014年5月我们成立了北京第一家由脊髓损伤伤友自我管理的脊髓损伤者希望之家，开展了以伤友服务伤友（同辈服务）为核心的脊髓损伤</p>
    </div>
    <div class="contentWrap">
      <p class="title">成立：</p>
      <p class="content">为了帮助更多的伤友、协助脊髓损伤相关组织的科学规范发展以及推动整个社会对脊髓损伤的认识, 2016年9月，由社会爱心人士和脊髓,由“自助”到“助人”，再由“助更多的人”到“影响群体和社会”，这就是新起点基金会的源起和成立过程</p>
    </div>
    <div class="contentWrap">
      <p class="title">使命：</p>
      <p class="content">创造友善环境,协助脊髓损伤者全面康复发展、参与社会、发挥潜能,并最终造福所有残障者。 </p>
    </div>
    <div class="contentWrap">
      <p class="title">目标：</p>
      <p class="content">以一种态度积极、模式创新的方式来推动社会公益事业。通过标准化建设，形成一整套脊髓损伤伤友自救体系和救助模式，不仅为脊髓损伤伤友 </p>
    </div> -->
  </div>
</template>

<script>
import people from '@/assets/people.png'

export default {
  data() {
    return {
    	people,
      jigoujianjie:{}
    }
  },
  mounted() {
  	this.$store.dispatch('Getjigoujianjie').then((data) => {
      // console.log(data)
      this.jigoujianjie = data;
    }).catch(() => {
    })
  },
  beforeDestroy() {
    
  },
  methods: {
    
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
.tabWrap .list:nth-child(4){
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
</style>

