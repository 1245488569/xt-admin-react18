import type { MenuProps } from 'antd'
import { message } from '@/utils/AntdGlobal'
import { useUserStore } from '@/stores/user'

export default function Personal() {
  const { t } = useTranslation()
  const nav = useNavigate()
  function logout() {
    useUserStore.getState().logout().then(() => {
      nav('/login', { replace: true })
    })
  }
  const items: MenuProps['items'] = [
    { key: '1', label: t('personal.personal'), onClick: () => message.info('敬请期待') },
    { key: '2', label: t('personal.loginOut'), onClick: logout },
  ]
  return (
    <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
      <Avatar src={<img src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" alt="avatar" />} className="cursor-pointer" />
    </Dropdown>
  )
}
