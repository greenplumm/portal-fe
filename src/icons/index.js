import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';

const req = require.context('./svg', false, /\.svg$/);
req.keys().map(req);

Vue.component('svg-icon', SvgIcon);

// 使用方式
// <svg-icon iconClass='compass'></svg-icon>
