<template>
  <div>
  	<div class="brumbWrap">
  		<span>您的位置：首页>爱的公示</span>
  	</div>
  	<div style="width: 600px;margin:0 auto;">
      <div class="titleWrap">
        <span style="margin-left:90px;">捐款方</span>
        <span style="margin-left:160px;">金额</span>
        <span style="margin-left:150px;">日期</span>
      </div>
      <div class="contentWrap">
        <span style="margin-left:30px;">康乐保（中国）医疗用品有限公司</span>
        <span style="margin-left:50px;">¥10，000</span>
        <span style="margin-left:110px;">2018年8月10日</span>
      </div>
      <div class="contentWrap">
        <span style="margin-left:30px;">康乐保（中国）医疗用品有限公司</span>
        <span style="margin-left:50px;">¥10，000</span>
        <span style="margin-left:110px;">2018年8月10日</span>
      </div>
      <div class="contentWrap">
        <span style="margin-left:30px;">康乐保（中国）医疗用品有限公司</span>
        <span style="margin-left:50px;">¥10，000</span>
        <span style="margin-left:110px;">2018年8月10日</span>
      </div>
    </div>
  </div>
</template>

<script>
import people from '@/assets/people.png'

export default {
  data() {
    return {
    	people,
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
.titleWrap{
  font-size: 0;
  height: 18px;
  line-height: 18px;
  border-bottom: 1px solid #E7E7E7;
  padding-bottom:33px;
}
.titleWrap span{
  font-size: 18px;
  color: #333333;
  display: inline-block;
}
.contentWrap{
  font-size: 0;
  height: 14px;
  line-height: 14px;
  border-bottom: 1px solid #E7E7E7;
  padding-bottom:33px;
  padding-top:20px;
}
.contentWrap span{
  font-size: 14px;
  color: #333333;
  display: inline-block;
}
</style>

