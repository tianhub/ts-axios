import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildUrl } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, param } = config;
  return buildUrl(url, param);
}

function transformRequestData(config: AxiosRequestConfig): Object{
  return transformRequest(config.data);
}

function transformHeaders(config: AxiosRequestConfig): Object {
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
}

export default axios
