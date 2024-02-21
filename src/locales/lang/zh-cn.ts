export default {
  route: {
    login: '登录',
    dashboard: '首页',
    personal: '个人设置',
    multimenu: {
      root: '多级导航缓存',
      page1: '导航1',
      page2: '导航2',
      level2: {
        page1: '导航1-1',
        page2: '导航1-2',
        level3: {
          page: '导航1-1-1',
        },
      },
    },
    list: {
      root: '列表',
      page1: '用户列表',
      page2: '商品列表',
      detail1: '用户详情',
      detail2: '商品详情',
    },
    permission: '权限',
    tabbar: '标签栏',
    directives: {
      root: '自定义指令',
      copy: '复制指令',
      watermarker: '水印指令',
    },
  },
  tabbar: {
    refresh: '刷新',
    delete: '关闭',
    deleteLeft: '关闭左侧',
    deleteRight: '关闭右侧',
    deleteOther: '关闭其他',
  },
  login: {
    title: '用户登录',
    account: '账号',
    password: '密码',
    loginBtn: '登录',
    accountRequired: '用户名为必填项',
    passwordRquired: '密码为必填项',
    accountLength: '长度在3到20个字符',
    passwordLength: '长度在6到20个字符',
  },
  personal: {
    personal: '个人设置',
    loginOut: '退出',
  },
  notfound: {
    title: '未找到页面',
    desc: '您正在寻找的页面不存在',
    back: '首页',
  },
  theme: {
    themeChange: '主题更换',
    logo: 'Logo',
    mianNav: '主导航',
    subNav: '侧导航',
    tabbar: '导航栏',
    toolbar: '工具栏',
    other: '其他',
    mianContentBgColor: '主区域背景色',

    logoBgColor: '背景色',
    logoTextColor: '文字颜色',

    bgColor: '背景色',
    activeBgColor: '选中背景色',
    hoverBgColor: '鼠标经过背景色',
    textColor: '文字颜色',
    activeTextColor: '选中文字颜色',
    hoverTextColor: '鼠标经过文字颜色',
  },
  btn: {
    confirm: '确定',
    cancel: '取消',
  },
}
