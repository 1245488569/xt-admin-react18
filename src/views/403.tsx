interface IProps {
  children?: React.ReactNode
}

const Error403: React.FC<IProps> = () => {
  const navigate = useNavigate()
  function goHome() {
    navigate('/', { replace: true })
  }

  return (
    <Result
      status={403}
      title="403"
      subTitle="抱歉，您当前没有权限访问此页面"
      extra={(
        <Button type="primary" onClick={goHome}>
          回首页
        </Button>
      )}
    />
  )
}

export default Error403
