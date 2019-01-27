<template>
  <div>
    <div class="bg2"></div>
    <div class="tabWrap">
      <div style="display: inline-block;background-color: #fff;">
        <span>金种子赋能</span>
        <span>希望+</span>
        <span class="tabsel">特色项目</span>
      </div>
    </div>
  	<div class="brumbWrap">
  		<span>您的位置：公益项目>特色项目</span>
  	</div>
    <div class="content1Wrap">
      <div class="listWrap">
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
      <div class="listWrap">
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
      <div class="listWrap">
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
      <div class="listWrap">
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
      <div class="listWrap">
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
    </div>
  </div>
</template>

<script>
import people2 from '@/assets/people2.png'
import people1 from '@/assets/people1.png'

export default {
  data() {
    return {
      people2,
    	people1,
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
}
.content1Wrap .title{
  font-size: 18px;
  color: #333333;
  margin-bottom:25px;
}
.content1Wrap .listWrap{
  font-size: 0;
  margin-bottom:20px;
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
  color: #333333;
  margin-bottom:20px;
  margin-left:20px;
  margin-top:20px;
}
.content1Wrap .listContentWrap .content{
  font-size: 13px;
  color: #666666;
  margin-left:20px;
}
.checkMore{
  width: 90px;
  height: 34px;
  float: right;
}
</style>

