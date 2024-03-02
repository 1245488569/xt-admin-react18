// import { COLOR_SCHEME, DEFAULT_LANGUAGE, Element_SIZE, THEME } from './config/cache'
// import { LocalStorageService } from './utils/storage'

const sysGlobalConfig: IGlobalConfig = {

  // 默认语言. zhCn: 简体中文 zhTw: 繁体中文 en: 英文
  // defaultLanguage: LocalStorageService.get(DEFAULT_LANGUAGE) as Language ?? 'zhCn',
  defaultLanguage: 'zhCn',
  /**
   * Element 组件尺寸
   * 这里有和主内容区默认文字大小关联
   * 可选：large、default、small
   * large 主内容区默认文字大小 16px
   * default 主内容区默认文字大小 14px
   * small 主内容区默认文字大小 12px
   */
  elementSize: 'default',
  /**
   * 颜色方案
   * '' 用户系统默认
   * light 明亮模式
   * dark 暗黑模式
   */
  colorScheme: 'light',
  app: {
    /**
     * 是否开启权限功能
     */
    enablePermission: true,
    // 是否开启载入进度条
    enableProgress: true,
    // 是否开启动态标题
    enableDynamicTitle: true,
    // 是否开启boshboard(设置为false，登录后框架会跳转到菜单中的第一个模块)
    enableDashboard: true,
    /**
     * 布局模式
     * onlyTopNav 只有顶部导航
     * onlySubSideNav 只有侧边栏导航
     * mainSubSideNav 侧边主导航+侧边次栏导航
     * topSubSideNav 顶部主导航+侧边次栏导航
     */
    layoutMode: 'onlyTopNav',
  },
  nav: {
    // 次导航栏是否收起
    subMenuCollapse: false,
    // 操作栏（tabbar和toolbar）是否固定
    fixed: true,
  },
  // 标签栏
  tabbar: {
    // 是否开启
    enable: true,
  },
  // 工具栏
  toolbar: {
    // 是否开启
    enable: true,
    // 是否开启全屏
    enableFullscreen: true,
    // 是否开启颜色系统（明亮暗黑模式）
    enableColorScheme: true,
    // 是否开启换肤
    enableChangeTheme: true,
    // 是否开启国际化
    enableI18n: true,
    // 是否开启侧边栏展开收起按钮
    enableSidebarCollapse: true,
    // 是否开启面包屑导航
    enableBreadcrumb: true,
    // 是否开启页面刷新
    enablePageReload: true,
    // 是否开启菜单搜索
    enableMenuSearch: true,
    // 是否开启框架元素大小切换（改变elementui的大小和上方elementSize的作用一样）
    enableElementSize: true,
    // 是否开启应用配置（建议在生产环境关闭）
    enableAppSetting: true,
    // 是否开启通知中心
    enableNotification: false,
  },
  // 样式设置
  theme: {
    // --------------app----------------
    // 主区域背景色
    // mianContentBgColor: '#f5f5f5',
    // --------------logo----------------
    // logo背景色（目前是让logo的背景色跟随菜单主题）
    // logoBgColor: '#cad7fe',
    // logo文字色
    logoTextColor: '#ffffff',

    // --------------主菜单----------------
    // 主菜单背景色
    mainMenuBgColor: '#303643',
    // 选中主菜单背景色
    mainMenuActiveBgColor: '#FF6600',
    // 鼠标经过主菜单背景色
    mainMenuHoverBgColor: '#FF6600',
    // 主菜单文字颜色
    mainMenuTextColor: '#d6d7d9',
    // 选中主菜单文字颜色
    mainMenuActiveTextColor: '#ffffff',
    // 鼠标经过主菜单文字颜色
    mainMenuHoverTextColor: '#ffffff',

    // --------------次菜单----------------
    // 次菜单背景色
    menuBgColor: 'linear-gradient(to right,#c9d6ff,#e2e2e2)',
    // 选中次菜单背景色
    menuActiveBgColor: '#409eff',
    // 鼠标经过次菜单背景色
    menuHoverBgColor: '#409eff',
    // 次菜单文字颜色
    menuTextColor: '#2f4f4f',
    // 选中次菜单文字颜色
    menuActiveTextColor: '#ffffff',
    // 鼠标经过次菜单文字颜色
    menuHoverTextColor: '#ffffff',

    // --------------tabbar----------------
    // tabbar背景色
    tabbarBgColor: '#f2f3f5',
    // tabbarItem背景色
    tabbarItemBgColor: '#f2f3f5',
    // 选中tabbarItem背景色
    tabbarItemActiveBgColor: '#ffffff',
    // 鼠标经过tabbarItem背景色
    tabbarItemHoverBgColor: '#e4e4e4',
    // tabbarItem文字色
    tabbarItemTextColor: '#999',
    // 选中tabbarItem文字色
    tabbarItemActiveTextColor: '#42b983',
    // 鼠标经过tabbarItem文字色
    tabbarItemHoverTextColor: '#999',

    // --------------toolbar----------------
    // toolbar背景色
    toolbarBgColor: '#ffffff',
    // toolbar文字色
    toolbarTextColor: '#000000',
  },
}

export default sysGlobalConfig
