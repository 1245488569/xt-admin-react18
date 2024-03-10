interface IProps {
  className?: string
}

export default function Reload(props: IProps) {
  const { className } = props
  const nav = useNavigate()

  function reload() {
    nav('/reload')
  }

  return (
    <div className={`${className}`} onClick={reload}>
      <SvgIcon name="carbon:renew" size={20} className="cursor-pointer" />
    </div>
  )
}
