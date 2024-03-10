import classNames from 'classnames'

interface IProps {
  children?: React.ReactNode
  size?: number
  collaspe?: boolean
  height?: string
  className?: string
}

export default function Home(props: IProps) {
  const { children, size = 20, collaspe = false, height = '', className } = props
  const isCollaspe = collaspe

  return (
    <PageMainWrapper className={classNames(`relative m-5 rounded-lg p-5 ${className}`, { 'overflow-hidden': isCollaspe })} style={{ height: isCollaspe ? height : '' }}>

      {children}

      { isCollaspe && (
        <div className="absolute bottom-0 left-0 w-full cursor-pointer px-0 pb-2 pt-10 text-center duration-300">
          <SvgIcon name="ant-design:down-outlined" size={size} />
        </div>
      ) }
    </PageMainWrapper>
  )
}
