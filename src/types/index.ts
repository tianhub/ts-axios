export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'DELETE'
  | 'options'
  | 'OPTIONS'
  | 'head'
  | 'HEAD'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  param?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse<T = any> {
  config: AxiosRequestConfig
  headers: any
  status: number
  statusText: string
  data: T
  request: any
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {
}

export interface AxiosError {
  message: string
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
}

export interface Axios {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>,
    response: AxiosInterceptorManager<AxiosResponse>
  },

  request<T>(config: AxiosRequestConfig): AxiosPromise<T>

  get<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  delete<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  head<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  options<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  put<T>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

  post<T>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>

  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosInterceptorManager<T> {
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number

  eject(id: number): void
}

export interface ResolvedFn<T> {
  (val: T): T | Promise<T>
}

export interface RejectedFn {
  (error: any): any
}
