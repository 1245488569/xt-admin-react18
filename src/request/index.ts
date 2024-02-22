import axios, { type AxiosRequestConfig } from 'axios'
import { message } from 'antd'
import store from '@/store'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL,
})

service.interceptors.request.use((config) => {
  const defaultLanguage = store.getState().config.defaultLanguage
  const token = store.getState().user.token

  config.headers['Accept-Language'] = defaultLanguage
  console.log('token', token)

  if (token)
    config.headers.Authorization = token

  return config
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
  if (response.data.code === 400401) {
    // 过期的处理
  }

  return response.data
}, (error) => {
  return Promise.reject(error)
})

function request<T = any>(config: AxiosRequestConfig<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    service.request<any, T>(config).then((res: any) => {
      console.log('res', res)
      if (res.code !== 200) {
        message.error(res.message)
        return reject(res)
      }

      resolve(res.result)
    }).catch((err) => {
      return reject(err)
    })
  })
}

export function get<T = any>(url: string, config?: AxiosRequestConfig<T>): Promise<T> {
  return request<T>({ ...config, method: 'GET', url })
}

export function post<T = any>(url: string, config?: AxiosRequestConfig<T>): Promise<T> {
  return request<T>({ ...config, method: 'POST', url })
}

export function put<T = any>(url: string, config?: AxiosRequestConfig<T>): Promise<T> {
  return request<T>({ ...config, method: 'PUT', url })
}

export function del<T = any>(url: string, config?: AxiosRequestConfig<T>): Promise<T> {
  return request<T>({ ...config, method: 'Delete', url })
}

export default service
