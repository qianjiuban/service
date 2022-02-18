import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'
import Router from '@/router'
import { setLocal } from '@/common/js/utils'

import {
  rayTimeStampFun,
  raySignatureFun,
  rayHeadSignatureFun,
} from '@/rayframework/app'

const BASE_API = rayframework.axiosConfig.url
const service = axios.create({
  baseURL: BASE_API,
  withCredentials: true,
  timeout: 2000000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
})

service.interceptors.request.use((config) => {
  let rayTimeStamp = rayTimeStampFun()
  let raySignature = raySignatureFun(rayTimeStamp)
  let token = Cookies.get('token')
  if (!config.headers.hasOwnProperty('rayAccessToken') && token) {
    config.headers['rayAccessToken'] = token
  }
  config.headers['rayHeadSignature'] = rayHeadSignatureFun(
    rayTimeStamp,
    raySignature
  )
  const params = {
    rayTimeStamp,
    raySignature,
  }

  if (config.method === 'post') {
    if (config.params === undefined) {
      let paramss = { ...params }
      config['params'] = paramss
    }
    if (config.type == 'json') {
      if (config.params === undefined) {
        let paramss = { ...params }
        config['params'] = paramss
      }
      config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    } else {
      config.data = qs.stringify(config.data)
    }
  } else if (config.method === 'get') {
    if (config.method == 'get') {
      if (config.params) {
        Object.keys(config.params).forEach((i) => {
          config.params[i] = encodeURI(config.params[i])
        })
      }
    }
    config.params = {
      ...config.params,
      ...params,
    }
  }
  return config
})
service.interceptors.response.use((response) => {
  const result = response.data
  if (
    result.code == 14 ||
    result.code == 11 ||
    result.code == 12 ||
    result.code == 13 ||
    result.code == 21 ||
    result.code == 22 ||
    result.code == 23 ||
    result.code == 24
  ) {
    setLocal('token', '')
    localStorage.clear()
    Router.push({
      path: '/login',
    })
  } else {
  }
  return result
})

export default service
