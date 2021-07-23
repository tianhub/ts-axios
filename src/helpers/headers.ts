import { deepMerge, isPlainObject } from './util'
import { Method } from '../types'
import { head } from 'shelljs'

function normalizedHeaders(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach((key) => {
    if (!headers[normalizedName] && key.toLowerCase() === normalizedName.toLowerCase()) {
      headers[normalizedName] = headers[key]
      delete headers[key]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizedHeaders(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}

export function parseHeaders(headers: string): any {
  const parsed = Object.create(null)
  if (!headers) {
    return parsed
  }
  headers.split('\r\n').forEach(line => {
    let [key, value] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (value) {
      value = value.trim()
    }
    parsed[key] = value
  })
  return parsed
}

export function flattenHeaders(headers: any, method: Method): any {
  if (!headers) {
    return headers
  }

  headers = deepMerge(headers.common, headers[method], headers)

  const needDeleteProperty = ['get', 'put', 'delete', 'options', 'head', 'patch', 'post', 'common']

  needDeleteProperty.forEach(key => {
    delete headers[key]
  })

  return headers
}
