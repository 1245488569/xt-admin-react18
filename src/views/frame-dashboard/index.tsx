export function Component() {
  return (
    <div className="min-w-1200px">
      <PageMain>
        <div className="flex justify-around">
          <div className="w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
            <div className="mb-4 flex items-center">
              <SvgIcon name="strong_new" size={35} />
              <span className="ml-2 text-lg text-[#000] font-bold dark:text-white">最新的技术栈</span>
            </div>
            <div className="text-[#3c3c43bf] dark:text-white">
              Vite5 + React18 + TypeScript5 + react-routerV6  ，学习快人一步
            </div>
          </div>

          <div className="ml-2 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
            <div className="mb-4 flex items-center">
              <SvgIcon name="theme" size={35} />
              <span className="ml-2 text-lg text-[#000] font-bold dark:text-white">样式多样</span>
            </div>
            <div className="text-[#3c3c43bf] dark:text-white">
              4种最主流的布局模式支持，随心所欲的配色支持
            </div>
          </div>

          <div className="ml-2 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
            <div className="mb-4 flex items-center">
              <SvgIcon name="permission" size={35} />
              <span className="ml-2 text-lg text-[#000] font-bold dark:text-white">全场景的权限验证</span>
            </div>
            <div className="text-[#3c3c43bf] dark:text-white">
              菜单权限，按钮权限，企业级权限管理
            </div>
          </div>

          <div className="ml-2 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
            <div className="mb-4 flex items-center">
              <SvgIcon name="i18n" size={35} />
              <span className="ml-2 text-lg text-[#000] font-bold dark:text-white">走向国际</span>
            </div>
            <div className="text-[#3c3c43bf] dark:text-white">
              通用国际化解决方案，通过简单配置实现语言切换
            </div>
          </div>

        </div>
      </PageMain>

      <PageMain>
        <div className="mb-4 text-24px font-bold">我的开源项目:</div>
        <div className="flex justify-around">
          <div className="w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
            <div className="mb-4 flex items-center">
              <span className="text-lg font-bold">
                🔥
                <a className="ml-2 text-[#409eff] hover:text-[#409eff]" href="https://gitee.com/nideweixiaonuannuande/xt-admin-vue3" target="_blank" rel="noreferrer">xt-admin-vue3</a>
              </span>
            </div>
            <div className="text-[#3c3c43bf] dark:text-white">
              一款基于Vue3+Typescript Vite pinia+ element plus+unocss且超级好用的中后台管理框架
            </div>
          </div>

          <div className="ml-2 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
            <div className="mb-4 flex items-center">
              <span className="text-lg font-bold">
                🎉
                <a className="ml-2 text-[#409eff] hover:text-[#409eff]" href="https://gitee.com/nideweixiaonuannuande/xt-admin-react18" target="_blank" rel="noreferrer">xt-admin-react18</a>
              </span>
            </div>
            <div className="break-all text-[#3c3c43bf] dark:text-white">
              一款基于React18+Typescript+Vite+zustand+Antd+unocss且超级好用的中后台管理框架
            </div>
          </div>

          <div className="ml-2 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
            <div className="mb-4 flex items-center">
              <span className="text-lg font-bold">
                🔥
                <a className="ml-2 text-[#409eff] hover:text-[#409eff]" href="https://gitee.com/nideweixiaonuannuande/nxtm" target="_blank" rel="noreferrer">nxtm</a>
              </span>
            </div>
            <div className="text-[#3c3c43bf] dark:text-white">
              node切换源工具
            </div>
          </div>

          <div className="ml-2 w-300px rounded bg-[#f6f6f7] p-5 dark:bg-[#252529]">
            <div className="mb-4 flex items-center">
              <span className="text-lg font-bold">
                🎉
                <a className="ml-2 text-[#409eff] hover:text-[#409eff]" href="https://gitee.com/nideweixiaonuannuande/unplugin-antd-resolver" target="_blank" rel="noreferrer">unplugin-antd-resolver</a>
              </span>
            </div>
            <div className="text-[#3c3c43bf] dark:text-white">
              用于在 unplugin-auto-import 中实现 antd 组件的按需引入(antd5版本)。
            </div>
          </div>

        </div>
      </PageMain>
    </div>

  )
}
