<template>
  <div class='mainapp'>
    <header>
      <h1>xxxx</h1>
    </header>
    <div id='subapp-container'>
      <!-- <el-tabs class='main-c-tabs' v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="fw" name="first" style="height: 100vh">

          <div id="flow-design" v-if="!isIFrame">Loading...</div>
        </el-tab-pane>
        <el-tab-pane label="www" name="second">
          <div id="scaffolding">purehtml loading...</div>
        </el-tab-pane>
        <el-tab-pane v-if="!isIFrame" label="配置中心" name="third">
          <router-view />
        </el-tab-pane>
      </el-tabs> -->
      {{activeName}}
      <Page1 />
    </div>
  </div>
</template>
<script>
import { loadMicroApp } from 'qiankun';
import Config from './components/config.vue';
import { SCAFFOLDING_NAME, FLOW_DESIGN_NAME } from './utils/constants';
import Page1 from './features/page1';

export default {
  components: {
    Config,
    Page1
  },
  props: {
    loading: Boolean,
    isIFrame: Boolean,
    apps: Array
  },
  data() {
    return {
      activeName: 'first'
    };
  },
  created() {
    // const flowDesign = this.apps.find((curr) => (curr.name === FLOW_DESIGN_NAME));
    // if (!this.isIFrame) {
    //   loadMicroApp(flowDesign);
    // }
  },
  methods: {
    handleClick(tab) {
      if (tab.name === 'second') {
        const scaffold = this.apps.find((curr) => (curr.name === SCAFFOLDING_NAME));
        loadMicroApp(
          scaffold,
          { sandbox: { experimentalStyleIsolation: true } },
        );
      }
    }
  }
};
</script>
<style>
.main-c-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll {
    margin-left: 25px;
}
</style>
