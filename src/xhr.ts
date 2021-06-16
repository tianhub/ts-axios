import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from './types'
import { parseHeaders } from './helpers/headers'
import { transformResponse } from './helpers/data'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve => {
    const { data = null, headers, method = 'get', url } = config
    const request = new XMLHttpRequest()
    request.open(method.toLowerCase(), url, true)

    // 设置相应类型
    if (config.responseType) {
      request.responseType = config.responseType
    }

    request.onreadystatechange = () => {
      if (request.readyState !== 4) {
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
      resolve(response)

    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    request.send(data)
  }))
}
