## react18 + Typescript + Vite + zustand + antd + unocss

### 说明：
1. 页面缓存功能，等react19版本才会考虑实现。
2. 项目中放弃了memo，useMemo，useCallback等优化，因为react19会调整他的编译器，也许就不需要我们自己去优化了，所以等19版本出来后试具体情况再做调整。

### 如果大家觉得有用，请帮忙点下star，十分感谢

### React18版本代码地址
1. 码云：https://gitee.com/nideweixiaonuannuande/xt-admin-react18
2. github：https://github.com/1245488569/xt-admin-react18

### vue3版本代码地址
1. 码云：https://gitee.com/nideweixiaonuannuande/xt-admin-vue3
2. github：https://github.com/1245488569/xt-admin-vue3

### React18版本演示地址
1. http://nideweixiaonuannuande.gitee.io/xt-admin-react18/#/login

### Vue3版本演示地址
1. 常用：http://nideweixiaonuannuande.gitee.io/xt-admin-vue3/#/login
（目前账号密码可以随便输入）

## 特点
1. react18
2. Vite5
3. Typescript5
4. zustand
5. antd5
6. Unocss
7. pnpm 包管理器
8. 权限菜单支持
9. 4种布局模式随意切换
10. 布局高度 宽度随意切换
11. Api 自动引入
12. Mock 支持
13. 暗黑模式 支持
14. i18n 国际化支持
15. 图标自动引入（iconify万种图标自动且按需引入）
16. 组件自动引入（components目录下组件自动且按需引入）
17. 菜单搜索(暂未实现)
18. 全屏
19. 页面刷新
20. 动态换肤
21. ahooks 支持
22. gzip brotli资源压缩支持
23. 环境变量配置支持
24. 统一的代码规范与风格支持
25. 漂亮的 login 404 403 页 支持
26. 配置选择支持
27. SvgIcon支持
28. 多级缓存(暂未实现)
29. 历史菜单
30. 面包屑导航
31. 其余的（请查看app.ts 或者 .env文件 或者assets/styles/globals/layout.less）

## `node` 版本推荐
最低18，推荐20

## 使用（请一定使用pnpm）

1. git初始化
```shell
git init
```

2. 安装依赖
```shell
pnpm install
```

3. 开发
```shell
pnpm dev
```

4. 打包

```shell
pnpm build
# 测试环境
pnpm build:test
```

5. 代码规范校验

```shell
pnpm lint
# 校验时修复
pnpm lint:eslint
pnpm lint:stylelint
```
