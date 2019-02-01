<template>
  <div>
  	<div class="bg2"></div>
  	<div class="tabWrap">
  		<div style="display: inline-block;background-color: #fff;">
        <router-link to="/aboutus1" class="list">机构简介</router-link>
        <router-link to="/aboutus" class="list">爱心顾问团</router-link>
  			<span class="list tabsel">脊椎损伤</span>
        <router-link to="/jiagou" class="list">组织架构</router-link>
  		</div>
  	</div>
  	<div class="brumbWrap">
  		<span>您的位置：关于我们 > 脊椎损伤</span>
  	</div>
  	<p style="font-size:18px;color:#333333;width:600px;margin:0 auto;text-align:left;">脊髓损伤</p>
    <div class="contentWrap" v-for="(item,index) in jizuisunshang" :key="index">
      <p class="title"> {{item.title}} </p>
      <p class="content" v-html="item.content"></p>
    </div>
    <!-- <div class="contentWrap">
      <p class="title">「脊髓损伤」</p>
      <p class="content">（英字：SCI，Spinal cord injury）是指由创伤（如交通事故）、疾病或退化（如癌症）造成的脊髓损坏。约占全球人脊髓损伤的高发期为青年期（20至29岁）和老年期（女性60岁以上，男性70岁以上）；男性与女性的比例为2:1 •增长：全世界每年新增25万至50万脊髓损伤； •原因：大多数脊髓损伤是由道路交通事故、工伤意</p>
    </div>
    <div class="contentWrap">
      <p class="title"> 「脊髓损伤伤友」 </p>
      <p class="content">（亦称截瘫及高位截瘫，是公认的肢体残障中最痛苦、最具康复价值、最具社会价值创造潜能的重度残障群体。 目前，我国现有脊髓损伤伤友约</p>
    </div>
    <div class="contentWrap">
      <p class="title">「脊髓损伤者面临的挑战」</p>
      <p class="content">对于一个原本行动、生活自理都无碍的人来说，脊髓损伤无疑是一个巨大的创痛，脊伤者所面临的困难与挑战包括以下几项： 1. 自我照顾</p>
    </div>
    <div class="contentWrap">
      <p class="title">脊髓损伤的潜能：</p>
      <p class="content">脊髓损伤伤友大部分都是后天受伤致残，大多数受过良好的教育、大多数具有宝贵的社会经历、大多数是家庭经济的主要负担者、大多数是单位</p>
    </div> -->
    <div style="width: 600px;margin:0 auto;margin-top:16px;margin-bottom:16px;">
      <img :src="people1" style="width: 597px;height: 370px;">
    </div>
    <div class="content1Wrap">
      <p class="title">相关知识</p>
      <div @click="goDetail" :class="{'listWrap':true,'listactive':listactive}" @mouseenter="listin" @mouseleave="listout">
        <img :src="people2">
        <div class="listContentWrap">
          <p class="title">每年多达72万人出现脊椎损伤</p>
          <p class="content">013年12月2日 | 日内瓦 - 每年发生脊髓损伤的人有50万之多。脊髓损伤者出现过早死亡的可能性要高出二至五倍，其中低收入</p>
        </div>
      </div>
      <div class="listWrap">
        <img :src="people2">
        <div class="listContentWrap">
          <p class="title">每年多达72万人出现脊椎损伤</p>
          <p class="content">013年12月2日 | 日内瓦 - 每年发生脊髓损伤的人有50万之多。脊髓损伤者出现过早死亡的可能性要高出二至五倍，其中低收入</p>
        </div>
      </div>
      <img :src="checkMore" class="checkMore" @click="goMore">
    </div>
  </div>
</template>

<script>
import people2 from '@/assets/people2.png'
import people1 from '@/assets/people1.png'
import checkMore from '@/assets/checkMore.png'

export default {
  data() {
    return {
      people2,
    	people1,
      checkMore,
      listactive:false,
      jizuisunshang:[]
    }
  },
  mounted() {
  	this.$store.dispatch('Getjizuisunshang').then((data) => {
      this.jizuisunshang = data.list;
    }).catch(() => {
    })
  },
  beforeDestroy() {
    
  },
  methods: {
    goMore(){
      this.$router.push('relativekn');
    },
    goDetail(){
      this.$router.push('relativekn1');
    },
    listin(){
      this.listactive = true;
    },
    listout(){
      this.listactive = false;
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

