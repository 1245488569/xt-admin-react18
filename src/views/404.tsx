const Error404: React.FC = () => {
  console.log('Error404 tsx')
  const { t } = useTranslation()
  const navigate = useNavigate()
  function goHome() {
    navigate('/', { replace: true })
  }

  return (
    <div className="min-h-screen flex items-center justify-center from-purple-300 to-blue-200 bg-gradient-to-r">
      <div className="w-[500px] flex flex-col items-center justify-center rounded-md bg-white py-12">
        <div className="text-9xl text-purple-400 font-bold">
          404
        </div>
        <div className="py-8 text-6xl font-medium dark:text-dark-900">
          {t('notfound.title')}
        </div>
        <div className="pb-8 text-2xl font-medium dark:text-dark-900">
          {t('notfound.desc')}
        </div>
        <div>
          <button className="rounded-md from-purple-400 to-blue-500 bg-gradient-to-r px-6 py-3 font-semibold hover:from-pink-500 hover:to-orange-500" onClick={goHome}>
            {t('notfound.back')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error404
