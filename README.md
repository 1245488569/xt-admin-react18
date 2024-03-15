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

### **项目特点概览**

#### 🚀 **前沿技术与框架集成**

-   **React 18**：采用最新版本的React，带来更流畅的用户体验和并发渲染功能。
-   **Vite 5**：基于快速开发工具Vite 5构建，实现闪电般的启动速度和热更新性能。
-   **TypeScript 5**：利用TypeScript进行类型检查，确保代码健壮性和可维护性。
-   **Zustand**：利用轻量级状态管理库Zustand简化复杂状态的管理和共享。

#### 🛠️ **强大UI组件及优化工具**

-   **Ant Design v5**：整合丰富的Ant Design UI组件库，提供一致、高效的界面设计体验。
-   **UnoCSS**：通过零配置原子类CSS方案Unocss，轻松实现样式按需引入和高效构建。

#### 📦 **动态权限与个性化体验**

-   **权限菜单支持**：内置动态权限控制机制，根据角色切换不同菜单项可见性。
-   **布局模式自定义**：具备4种预设布局模式切换，并支持页面高度、宽度自由调整。
-   **暗黑模式**：一键切换暗黑主题，同时支持国际化(i18n)特性，满足全球用户需求。
-   **图标&组件自动引入**：借助Iconify支持超过万种图标自动按需引入，components目录下的组件同样实现自动化导入。

#### 📝 **便捷开发与资源优化**

-   **API自动引入 & Mock数据支持**：自动处理API接口引用，内置Mock数据服务以模拟真实后端响应。
-   **全屏显示**：提供全屏展示功能，提升专注度与沉浸式操作体验。
-   **页面刷新**：支持页面实时刷新，保证数据即时同步。
-   **动态换肤**：随心所欲切换皮肤风格，打造个性化后台管理系统。
-   **ahooks助力**：集成了ahooks工具库，扩展React Hook能力，提高开发效率。

#### 🔥 **性能与部署优化**

-   **Gzip/Brotli压缩**：内置gzip和brotli资源压缩策略，显著减小文件大小，加速应用加载速度。
-   **环境变量配置**：全面支持多环境变量配置，方便在不同环境下运行时调整设置。
-   **统一规范与风格**：遵循严格的代码规范与风格指南，保障团队协作质量和代码一致性。
-   **精美错误与登录页**：预制美观的登录、404、403错误页面，展现专业品牌形象。

#### 🎉 **其他实用功能**

-   **SvgIcon支持**：无缝兼容SVG图标格式，让图标管理更加灵活自如。
-   **配置选项丰富**：提供多样化的配置选择，以满足不同的项目需求和定制化诉求。
-   **历史菜单与面包屑导航**：配备历史菜单记录以及直观的面包屑导航，便于用户操作与浏览路径回溯。

#### 📦 **未来展望与附加功能**

-   **菜单搜索（待实现）** ：计划添加菜单搜索功能，使用户能够快速定位目标页面。
-   **多级缓存（待实现）** ：未来将支持多级缓存策略，进一步提升系统性能。

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
![image.png](https://img-blog.csdnimg.cn/img_convert/9799cfe6c8a0e548d75b8dcdb9a67113.png)

![image.png](https://img-blog.csdnimg.cn/img_convert/b6f803f7a2352bafd522fdaa7976a209.png)

![image.png](https://img-blog.csdnimg.cn/img_convert/ed995eac93a48903e1db8b40e453ce0c.png)

![image.png](https://img-blog.csdnimg.cn/img_convert/a06f927dbac510c3c96189bafa678c2c.png)
