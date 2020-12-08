<!--
 * @Author: your name
 * @Date: 2020-11-25 18:41:08
 * @LastEditTime: 2020-12-14 10:35:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/examples/main/components/config.vue
-->
<script>
export default {
  data() {
    return {
      primaryColor: ''
    };
  },
  mounted() {
    this.primaryColor = localStorage.getItem('globalThemeColor');
  },
  methods: {}
};
</script>
<template>
  <div ref="top" class="top">
    <div class="logo">管理中心</div>
  </div>
</template>

<style lang="less" scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  // background: #242f42;
}
.top .homePage {
  color: #fff;
}
.top .fastLinks {
  color: #fff;
}
.switches {
  color: #fff;
}
/deep/ .el-dropdown-link {
  color: #fff;
}

.logo {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    width: 250px;
  }
}
</style>
