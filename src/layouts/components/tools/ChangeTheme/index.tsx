interface IProps {
  className?: string
}

export default function ChangeTheme(props: IProps) {
  const { className } = props

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className={`${className}`} onClick={() => setIsModalOpen(true)}>
        <SvgIcon name="ri:palette-line" size={20} className="cursor-pointer" />
      </div>

      <Modal title="Basic Modal" open={isModalOpen} footer={null} keyboard={false} maskClosable={false} centered={true} onCancel={() => setIsModalOpen(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}
