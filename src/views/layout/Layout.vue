<template>
  <div>
    <Navbar></Navbar>
  </div>
</template>

<script>
import { Navbar } from './components';
export default {
  name: 'layout',
  components:{
    Navbar:Navbar,
  },
  
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
</style>
