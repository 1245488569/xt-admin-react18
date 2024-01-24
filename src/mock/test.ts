import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import Mock from 'mockjs'

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
])
