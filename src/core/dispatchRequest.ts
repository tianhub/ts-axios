import { AxiosRequestConfig, AxiosPromise } from '../types'
import xhr from './xhr'
import { buildUrl } from '../helpers/url'
import { transformRequest } from '../helpers/data'
import { flattenHeaders, processHeaders } from '../helpers/headers'

export default function dispatchRequest(config: AxiosRequestConfig):AxiosPromise  {
  processConfig(config)
  return xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
  config.headers = flattenHeaders(config.headers, config.method!)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, param } = config;
  return buildUrl(url!, param);
}

function transformRequestData(config: AxiosRequestConfig): Object{
  return transformRequest(config.data);
}

function transformHeaders(config: AxiosRequestConfig): Object {
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
}
