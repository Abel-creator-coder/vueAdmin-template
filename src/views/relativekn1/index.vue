<template>
  <div>
  	<div class="brumbWrap">
  		<span>您的位置：关于我们>脊椎损伤>相关知识</span>
  	</div>
  	<p style="font-size:18px;color:#333333;width:600px;margin:0 auto;text-align:left;">每年多达72万人出现脊髓损伤</p>
    <div class="contentWrap">
      <p class="content">2013年12月2日 | 日内瓦 - 每年发生脊髓损伤的人有50万之多。脊髓损伤者出现过早死亡的可能性要高出二至五倍，其中低收2013年12月2日 | 日内瓦 - 每年发生脊髓损伤的人有50万之多。脊髓损伤者出现过早死亡的可能性要高出二至五倍，其中低收</p>
    </div>
    <div style="width: 600px;margin:0 auto;">
      <img :src="bg4" style="width: 600px;">
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
    </div>
    <div class="contentWrap">
      <p class="title">脊髓损伤的潜能：</p>
      <p class="content">脊髓损伤伤友大部分都是后天受伤致残，大多数受过良好的教育、大多数具有宝贵的社会经历、大多数是家庭经济的主要负担者、大多数是单位</p>
    </div>
    <div class="contentWrap">
      <p class="title">脊髓损伤的潜能：</p>
      <p class="content">脊髓损伤伤友大部分都是后天受伤致残，大多数受过良好的教育、大多数具有宝贵的社会经历、大多数是家庭经济的主要负担者、大多数是单位</p>
    </div>
    <div class="contentWrap">
      <p class="title">脊髓损伤的潜能：</p>
      <p class="content">脊髓损伤伤友大部分都是后天受伤致残，大多数受过良好的教育、大多数具有宝贵的社会经历、大多数是家庭经济的主要负担者、大多数是单位</p>
    </div>
    <div class="contentWrap">
      <p class="title">脊髓损伤的潜能：</p>
      <p class="content">脊髓损伤伤友大部分都是后天受伤致残，大多数受过良好的教育、大多数具有宝贵的社会经历、大多数是家庭经济的主要负担者、大多数是单位</p>
    </div>
  </div>
</template>

<script>
import people2 from '@/assets/people2.png'
import people1 from '@/assets/people1.png'
import bg4 from '@/assets/bg4.png'
import checkMore from '@/assets/checkMore.png'

export default {
  data() {
    return {
      people2,
    	people1,
      checkMore,
      bg4,
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
.tabWrap span:nth-child(4){
	margin-right:0px;
}
.tabWrap .tabsel{
	background-color: #03A692;
}
.brumbWrap{
	width: 600px;
	margin: 0 auto;
	margin-top:20px;
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

