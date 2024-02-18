import { Suspense } from 'react'

/**
 * 组件懒加载，结合Suspense实现
 * @param Component 组件对象
 * @returns 返回新组件
 */
export function lazyLoad(Component: React.LazyExoticComponent<React.FC>) {
  return (
    <Suspense
      fallback={(
        <Spin
          size="large"
          className="h-full flex items-center justify-center"
        />
      )}
    >
      <Component />
    </Suspense>
  )
}
