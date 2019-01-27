<template>
  <div class="dashboard-container">
    <el-row class="panel-group" :gutter="40" type="flex" justify="center">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class='card-panel' @click="golocation">
          <el-row>
            <el-col :span="8" >
               <el-row style="text-align: center;margin-top:15px;">
                  <el-col :span="24" >
                    <div class="icon-people" style="display: inline;color:#996699;">
                      <svg-icon icon-class="international" style="font-size: 30px;"/>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="text-align: center;margin-top:10px;font-size: 14px;">
                  <el-col :span="24">
                    <span>地理分布</span>
                  </el-col>
                </el-row>
            </el-col>
            <el-col :span="16" style="text-align: center;padding-left:10px;padding-right:10px;margin-top:15px;">
              <span style="font-size: 12px;line-height: 15px;">通过地图统计分析不同出生地、发病地引起的山西省脑卒中患者的地理分布差异。</span>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class='card-panel' @click="gosex">
          <el-row>
            <el-col :span="8" >
               <el-row style="text-align: center;margin-top:15px;">
                  <el-col :span="24" >
                    <div class="icon-people" style="display: inline;color:#CC9999;">
                      <svg-icon icon-class="drag" style="font-size: 30px;"/>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="text-align: center;margin-top:10px;font-size: 14px;">
                  <el-col :span="24">
                    <span>性别比例</span>
                  </el-col>
                </el-row>
            </el-col>
            <el-col :span="16" style="text-align: center;padding-left:10px;padding-right:10px;margin-top:15px;">
              <span style="font-size: 12px;line-height: 15px;">通过饼状图统计分析性别对脑卒中患病率的影响。</span>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class='card-panel' @click="goage">
          <el-row>
            <el-col :span="8" >
               <el-row style="text-align: center;margin-top:15px;">
                  <el-col :span="24" >
                    <div class="icon-people" style="display: inline;color:#CC9966;">
                      <svg-icon icon-class="eye" style="font-size: 30px;"/>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="text-align: center;margin-top:10px;font-size: 14px;">
                  <el-col :span="24">
                    <span>年龄分布</span>
                  </el-col>
                </el-row>
            </el-col>
            <el-col :span="16" style="text-align: center;padding-left:10px;padding-right:10px;margin-top:15px;">
              <span style="font-size: 12px;line-height: 15px;">通过柱状图统计分析脑卒中患者的年龄分布特点。</span>
            </el-col>
          </el-row>
        </div>
      </el-col> 
    </el-row>

    <el-row class="panel-group" :gutter="40" type="flex" justify="center">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class='card-panel' @click="goanalyse1">
          <el-row>
            <el-col :span="8" >
               <el-row style="text-align: center;margin-top:15px;">
                  <el-col :span="24" >
                    <div class="icon-people" style="display: inline;color:#666666;">
                      <svg-icon icon-class="lock" style="font-size: 30px;"/>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="text-align: center;margin-top:10px;font-size: 14px;">
                  <el-col :span="24">
                    <span>logistics回归分析</span>
                  </el-col>
                </el-row>
            </el-col>
            <el-col :span="16" style="text-align: center;padding-left:10px;padding-right:10px;margin-top:15px;">
              <span style="font-size: 12px;line-height: 15px;">是一种广义的线性回归分析模型，用来探讨引发脑卒中发病的危险因素，并根据危险因素预测疾病发生的概率等。</span>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class='card-panel' @click="goanalyse2">
          <el-row>
            <el-col :span="8" >
               <el-row style="text-align: center;margin-top:15px;">
                  <el-col :span="24" >
                    <div class="icon-people" style="display: inline;color:#FF6666;">
                      <svg-icon icon-class="star" style="font-size: 30px;"/>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="text-align: center;margin-top:10px;font-size: 14px;">
                  <el-col :span="24">
                    <span>卡方检验</span>
                  </el-col>
                </el-row>
            </el-col>
            <el-col :span="16" style="text-align: center;padding-left:10px;padding-right:10px;margin-top:15px;">
              <span style="font-size: 12px;line-height: 15px;">卡方检验是以χ2分布为基础的一种常用假设检验方法，它的无效假设H0是：观察频数与期望频数没有差别。</span>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class='card-panel' @click="goanalyse3">
          <el-row>
            <el-col :span="8" >
               <el-row style="text-align: center;margin-top:15px;">
                  <el-col :span="24" >
                    <div class="icon-people" style="display: inline;color: #FFCCCC;">
                      <svg-icon icon-class="tab" style="font-size: 30px;"/>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="text-align: center;margin-top:10px;font-size: 14px;">
                  <el-col :span="24">
                    <span>独立样本T检验</span>
                  </el-col>
                </el-row>
            </el-col>
            <el-col :span="16" style="text-align: center;padding-left:10px;padding-right:10px;margin-top:15px;">
              <span style="font-size: 12px;line-height: 15px;">检验两个相互独立的样本，是否可以看作是同一大样本中抽取出来的两个小样本。</span>
            </el-col>
          </el-row>
        </div>
      </el-col> 
    </el-row>
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import title from '@/assets/title.png'
import permission from '@/directive/permission/index.js' // 权限判断指令

export default {
  name: 'dashboard',
  directives: { permission },
  data() {
    return {
      title
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  methods:{
    golocation(){
      this.$router.push({ name: 'location'})
    },
    gosex(){
      this.$router.push({ name: 'sex'})
    },
    goage(){
      this.$router.push({ name: 'age'})
    },
    goanalyse1(){
      this.$router.push({ name: 'analyse1'})
    },
    goanalyse2(){
      this.$router.push({ name: 'analyse2'})
    },
    goanalyse3(){
      this.$router.push({ name: 'analyse3'})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 89px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #f0f2f5;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shoppingCard {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 30px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 33px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
