const Login: React.FC = () => {
  interface FormProps {
    account: string
    password: string
  }
  function onFinish(values: FormProps) {
    console.log('Success:', values)
  }

  return (
    <section className="min-h-screen flex items-stretch text-white">
      <div className="hidden w-1/2 items-center bg-[url(@/assets/images/login-bg.webp)] bg-cover bg-no-repeat lg:flex">
        <div className="z-10 w-full px-24">
          <div className="text-left text-5xl font-bold tracking-wide">
            欢迎您
          </div>
          <div className="my-4 text-3xl">
            这是一款美观，实用，易用的管理后台
          </div>
        </div>
      </div>

      <div className="relative z-0 w-full flex items-center justify-center bg-[#161616] px-0 text-center lg:w-1/2 md:px-16">
        <div className="absolute inset-0 z-10 bg-[url(@/assets/images/login-bg.webp)] bg-cover bg-no-repeat lg:hidden">
          <div className="absolute inset-0 z-0 bg-black opacity-60" />
        </div>

        <div className="z-999 w-full">
          <div className="my-6 flex items-center justify-center text-3xl">
            用户登录
          </div>

          <Form autoComplete="off" onFinish={onFinish}>
            <Form.Item name="account" rules={[{ required: true, message: '请输入账号' }, { min: 3, max: 20, message: '长度在3到20个字符' }]}>
              <Input placeholder="账号" prefix={<SvgIcon name="ep:avatar" />} />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }, { min: 6, max: 20, message: '长度在6到20个字符' }]}>
              <Input.Password placeholder="密码" prefix={<SvgIcon name="ep:lock" />} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" block htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Login
