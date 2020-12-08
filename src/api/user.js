/*
 * @Author: your name
 * @Date: 2020-12-09 20:04:46
 * @LastEditTime: 2020-12-14 10:19:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
import axios from '@/utils/request';

export function login(data) {
  return axios.post('/user/login', data);
}

export function getInfo() {
  return axios.get('/user/info');
}
