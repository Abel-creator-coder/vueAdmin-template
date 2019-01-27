<template>
  <div>
  	<div class="content1Wrap">
  		<p class="title">金种子赋能</p>
  		<div class="left">
  			<p class="title">脊髓损伤者金种子培养计划</p>
  			<p class="content">「金种子培养计划」是北京新起点公益基金会发起的，旨在通过专业教育和培养，培育已康复，具有服务精神、具备丰富康复经验的脊髓损伤者</p>
  			<a href="" class="checkMore">查看详情</a>
  		</div>
		<img :src="bg3" class="bg3">
  	</div>
  	<div class="content1Wrap">
  		<p class="title">希望+</p>
  		<img :src="bg3" class="bg3">
  		<div class="left">
  			<p class="title">脊髓损伤者金种子培养计划</p>
  			<p class="content">「金种子培养计划」是北京新起点公益基金会发起的，旨在通过专业教育和培养，培育已康复，具有服务精神、具备丰富康复经验的脊髓损伤者</p>
  			<a href="" class="checkMore">查看详情</a>
  		</div>
  	</div>
  	<div class="content1Wrap">
  		<p class="title">特色项目</p>
  		<div class="left">
  			<p class="title">脊髓损伤者金种子培养计划</p>
  			<p class="content">「金种子培养计划」是北京新起点公益基金会发起的，旨在通过专业教育和培养，培育已康复，具有服务精神、具备丰富康复经验的脊髓损伤者</p>
  			<a href="" class="checkMore">查看详情</a>
  		</div>
		<img :src="bg3" class="bg3">
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
    }
  },
  mounted() {
  	
  },
  beforeDestroy() {
    
  },
  methods: {
    
  }
}
</script>

<style scoped>
.content1Wrap{
	font-size: 0;
	width: 600px;
	margin: 0 auto;
	margin-bottom:21px;
}
.content1Wrap .title{
	font-size: 24px;
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
</style>

