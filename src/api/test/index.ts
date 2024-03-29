import { get, post } from '@/request'

export function loginApi(form: any) {
  return post('/login', {
    data: form,
  })
}

export function logoutApi() {
  return get('/logout')
}

export function permissionApi() {
  return get('/user/permission')
}

export function tableListApi(data: any) {
  return post('list', {
    data,
  })
}
