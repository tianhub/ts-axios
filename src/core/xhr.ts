import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from '../types'
import { parseHeaders } from '../helpers/headers'
import { transformResponse } from '../helpers/data'
import { createError } from '../helpers/error'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise(((resolve, reject) => {
    const { data = null, headers, method = 'get', url, responseType, timeout = 0 } = config
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url!, true)

    // 设置响应类型
    if (responseType) {
      request.responseType = responseType
    }

    if (timeout) {
      request.timeout = timeout
    }

    request.onreadystatechange = () => {
      if (request.readyState !== 4) {
        return
      }

      if (request.status === 0) {
        return
      }

      const responseData = request.responseType === 'text' ? request.responseText : request.response
      const headers = parseHeaders(request.getAllResponseHeaders())
      const response: AxiosResponse = {
        data: transformResponse(responseData),
        status: request.status,
        statusText: request.statusText,
        headers,
        config,
        request
      }
      handleResponse(response)

    }

    request.onerror = function handleError() {
      reject(createError('Network Error', config, null, request))
    }

    request.ontimeout = function handleTimeout() {
      reject(createError(`timeout of ${timeout} ms exceeded`, config, 'ECONNABORTED', request));
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    request.send(data)

    function handleResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response);
      } else {
        reject(createError(`http code ${response.status} happened`, config, null, request, response));
      }
    }
  }))
}
