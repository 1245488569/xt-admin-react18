const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center from-purple-300 to-blue-200 bg-gradient-to-r">
      <div className="w-[500px] flex flex-col items-center justify-center rounded-md bg-white py-12">
        <div className="text-9xl text-purple-400 font-bold">
          404
        </div>
        <div className="py-8 text-6xl font-medium dark:text-dark-900">
          未找到页面
        </div>
        <div className="pb-8 text-2xl font-medium dark:text-dark-900">
          您正在寻找的页面不存在
        </div>
        <div>
          <button className="rounded-md from-purple-400 to-blue-500 bg-gradient-to-r px-6 py-3 font-semibold hover:from-pink-500 hover:to-orange-500">
            首页
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
