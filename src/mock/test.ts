import { defineFakeRoute } from 'vite-plugin-fake-server/client'

// 这里不能使用这种结构 否则会报错[vite-plugin-fake-server] failed to load module from src\mock\test.ts
// import { Random } from 'mockjs'
import Mock from 'mockjs'

interface DataList {
  date: string
  name: string
  address: string
}

const dataList: DataList[] = [] // 用于接受生成数据的数组
for (let i = 0; i < 100; i++) {
  // 可自定义生成的个数
  const template = {
    date: Mock.Random.date(), // 生成一个随机日期,可加参数定义日期格式
    name: Mock.Random.name(), // 生成姓名
    address: Mock.Random.province(), // 生成地址
  }
  dataList.push(template)
}

export default defineFakeRoute([
  {
    url: '/api/login',
    method: 'post',
    response: ({ body }: any) => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          name: body.account,
          age: 18,
          token: `${body.account}_${Mock.Random.string(10)}`,
        },
      }
    },
  },

  {
    url: '/api/user/permission',
    method: 'get',
    response: ({ headers }: any) => {
      console.log(headers)
      console.log(headers.authorization && headers.authorization.includes('test'))

      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: headers.authorization && headers.authorization.includes('test') ? ['user.edit'] : ['user.read', 'user.detail', 'user.add', 'user.edit'],
      }
    },
  },

  {
    url: '/api/list',
    method: 'post',
    response: (params) => {
      const info = params.body
      const [index, size, total] = [
        info.current,
        info.pageSize,
        dataList.length,
      ]
      const len = total / size
      const totalPages
        = len - Number.parseInt(String(len)) > 0 ? Number.parseInt(String(len)) + 1 : len
      const newDataList = dataList.slice(index * size, (index + 1) * size)
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          current: index,
          pageSize: size,
          rows: newDataList,
          total,
          totalPages,
        },
      }
    },
  },

  {
    url: '/api/logout',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {},
      }
    },
  },
])
