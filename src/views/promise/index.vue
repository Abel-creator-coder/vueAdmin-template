<template>
  <div>
    <div class="bg2"></div>
    <div class="tabWrap">
      <div style="display: inline-block;background-color: #fff;">
        <span>金种子赋能</span>
        <span  class="tabsel">希望+</span>
        <span>特色项目</span>
      </div>
    </div>
  	<div class="brumbWrap">
  		<span>您的位置：公益项目>希望+</span>
  	</div>
    <div class="content1Wrap">
      <p class="title">金种子赋能</p>
      <div class="left">
        <p class="title">脊髓损伤者金种子培养计划</p>
        <p class="content">「金种子培养计划」是北京新起点公益基金会发起的，旨在通过专业教育和培养，培育已康复，具有服务精神、具备丰富康复经验的脊髓损伤者</p>
        <a href="" class="checkMore">查看详情</a>
      </div>
    <img :src="bg3" class="bg3">
    </div>
    <div class="content2Wrap">
      <p style="font-size: 18px;color:#333333;margin-bottom:20px;">资助流程</p>
      <img :src="pipe" style="width: 600px;height: 83px;">
    </div>
    <div class="content3Wrap">
      <p class="title">相关知识</p>
      <div class="listWrap" @click="goDetail">
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
    <div class="content4Wrap">
      <p style="font-size: 18px;color:#333333;margin-bottom:20px;">项目分布图</p>
      <img :src="map" class="map">
      <div class="right">
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>
        <p class="title1">华南地区：</p>
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>
        <p class="text">上海长海医院</p>

      </div>
    </div>
  </div>
</template>

<script>
import bg3 from '@/assets/bg3.png'
import pipe from '@/assets/pipe.png'
import checkMore from '@/assets/checkMore.png'
import people2 from '@/assets/people2.png'
import map from '@/assets/map.png'


export default {
  data() {
    return {
      bg3,
      pipe,
      checkMore,
      people2,
      map,
    }
  },
  mounted() {
  	
  },
  beforeDestroy() {
    
  },
  methods: {
    goMore(){
      this.$router.push('relativekn');
    },
    goDetail(){
      this.$router.push('relativekn1');
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
.content1Wrap .title{
  font-size: 18px;
  color: #333333;
  margin-bottom:25px;
  margin-top:25px;
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
  margin-top:20px;
}
.content3Wrap{
  width: 600px;
  margin:0 auto;
  overflow:hidden;
}
.content3Wrap .title{
  font-size: 18px;
  color: #333333;
  margin-bottom:25px;
}
.content3Wrap .listWrap{
  font-size: 0;
  margin-bottom:20px;
}
.content3Wrap .listWrap img{
  width: 173px;
  height: 165px;
  vertical-align: middle;
}
.content3Wrap .listContentWrap{
  display: inline-block;
  width: 427px;
  height: 165px;
  vertical-align: middle;
}
.content3Wrap .listContentWrap .title{
  font-size: 15px;
  color: #333333;
  margin-bottom:20px;
  margin-left:20px;
  margin-top:20px;
}
.content3Wrap .listContentWrap .content{
  font-size: 13px;
  color: #666666;
  margin-left:20px;
}
.checkMore{
  width: 90px;
  height: 34px;
  float: right;
  cursor: pointer;
}
.content4Wrap{
  width: 600px;
  margin:0 auto;
  margin-top:20px;
  font-size: 0;
}
.content4Wrap .map{
  width: 432px;
  height: 335px;
}
.content4Wrap .text{
  font-size: 13px;
  color: #666666;
  margin:0;
  margin-bottom:10px;
  line-height: 13px;
}
.content4Wrap .title1{
  font-size: 14px;
  color: #333333;
  margin: 0;
  margin-top:5px;
  margin-bottom:15px;
  line-height: 14px;
  border-left:2px solid #03A692;
  padding-left:5px;
}
.content4Wrap .right{
  display: inline-block;
  width: 167px;
  height: 335px;
  overflow:hidden;
  overflow-y: scroll;
  padding-left:40px;
}
.content4Wrap .right::-webkit-scrollbar {/*滚动条整体样式*/
  width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.content4Wrap .right::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: #03A692;
}
.content4Wrap .right::-webkit-scrollbar-track {/*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}
</style>

