import { useShallow } from 'zustand/react/shallow'
import { useSysConfigStore } from '@/stores/config'

interface IProps {
  className?: string
}

type Key = keyof IGlobalTheme
interface IThemeData {
  title: string
  key: Key
  value: string
}

export default function ChangeTheme(props: IProps) {
  const { className } = props

  const { logoTextColor, mainMenuBgColor, mainMenuActiveBgColor, mainMenuHoverBgColor, mainMenuTextColor, mainMenuActiveTextColor, mainMenuHoverTextColor, menuBgColor, menuActiveBgColor, menuHoverBgColor, menuTextColor, menuActiveTextColor, menuHoverTextColor, tabbarBgColor, tabbarItemBgColor, tabbarItemActiveBgColor, tabbarItemHoverBgColor, tabbarItemTextColor, tabbarItemActiveTextColor, tabbarItemHoverTextColor, toolbarBgColor, toolbarTextColor, setTheme } = useSysConfigStore(useShallow(state => ({
    logoTextColor: state.theme.logoTextColor,
    mainMenuBgColor: state.theme.mainMenuBgColor,
    mainMenuActiveBgColor: state.theme.mainMenuActiveBgColor,
    mainMenuHoverBgColor: state.theme.mainMenuHoverBgColor,
    mainMenuTextColor: state.theme.mainMenuTextColor,
    mainMenuActiveTextColor: state.theme.mainMenuActiveTextColor,
    mainMenuHoverTextColor: state.theme.mainMenuHoverTextColor,

    menuBgColor: state.theme.menuBgColor,
    menuActiveBgColor: state.theme.menuActiveBgColor,
    menuHoverBgColor: state.theme.menuHoverBgColor,
    menuTextColor: state.theme.menuTextColor,
    menuActiveTextColor: state.theme.menuActiveTextColor,
    menuHoverTextColor: state.theme.menuHoverTextColor,

    tabbarBgColor: state.theme.tabbarBgColor,
    tabbarItemBgColor: state.theme.tabbarItemBgColor,
    tabbarItemActiveBgColor: state.theme.tabbarItemActiveBgColor,
    tabbarItemHoverBgColor: state.theme.tabbarItemHoverBgColor,
    tabbarItemTextColor: state.theme.tabbarItemTextColor,
    tabbarItemActiveTextColor: state.theme.tabbarItemActiveTextColor,
    tabbarItemHoverTextColor: state.theme.tabbarItemHoverTextColor,

    toolbarBgColor: state.theme.toolbarBgColor,
    toolbarTextColor: state.theme.toolbarTextColor,

    setTheme: state.setTheme,
  })))

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { t } = useTranslation()

  const logoThemeData: IThemeData[] = [{ title: t('theme.logoTextColor'), key: 'logoTextColor', value: logoTextColor }]
  const mainMenuThemeData: IThemeData[] = [
    { title: t('theme.bgColor'), key: 'mainMenuBgColor', value: mainMenuBgColor },
    { title: t('theme.activeBgColor'), key: 'mainMenuActiveBgColor', value: mainMenuActiveBgColor },
    { title: t('theme.hoverBgColor'), key: 'mainMenuHoverBgColor', value: mainMenuHoverBgColor },
    { title: t('theme.textColor'), key: 'mainMenuTextColor', value: mainMenuTextColor },
    { title: t('theme.activeTextColor'), key: 'mainMenuActiveTextColor', value: mainMenuActiveTextColor },
    { title: t('theme.hoverTextColor'), key: 'mainMenuHoverTextColor', value: mainMenuHoverTextColor },
  ]
  const menuThemeData: IThemeData[] = [
    { title: t('theme.bgColor'), key: 'menuBgColor', value: menuBgColor },
    { title: t('theme.activeBgColor'), key: 'menuActiveBgColor', value: menuActiveBgColor },
    { title: t('theme.hoverBgColor'), key: 'menuHoverBgColor', value: menuHoverBgColor },
    { title: t('theme.textColor'), key: 'menuTextColor', value: menuTextColor },
    { title: t('theme.activeTextColor'), key: 'menuActiveTextColor', value: menuActiveTextColor },
    { title: t('theme.hoverTextColor'), key: 'menuHoverTextColor', value: menuHoverTextColor },
  ]
  const tabbarThemeData: IThemeData[] = [
    { title: `tabbar${t('theme.bgColor')}`, key: 'tabbarBgColor', value: tabbarBgColor },
    { title: `tabbarItem${t('theme.bgColor')}`, key: 'tabbarItemBgColor', value: tabbarItemBgColor },
    { title: `tabbar${t('theme.bgColor')}`, key: 'tabbarItemActiveBgColor', value: tabbarItemActiveBgColor },
    { title: t('theme.hoverBgColor'), key: 'tabbarItemHoverBgColor', value: tabbarItemHoverBgColor },
    { title: t('theme.textColor'), key: 'tabbarItemTextColor', value: tabbarItemTextColor },
    { title: t('theme.activeTextColor'), key: 'tabbarItemActiveTextColor', value: tabbarItemActiveTextColor },
    { title: t('theme.hoverTextColor'), key: 'tabbarItemHoverTextColor', value: tabbarItemHoverTextColor },
  ]
  const toolbarThemeData: IThemeData[] = [
    { title: t('theme.bgColor'), key: 'toolbarBgColor', value: toolbarBgColor },
    { title: t('theme.textColor'), key: 'toolbarTextColor', value: toolbarTextColor },
  ]

  return (
    <>
      <div className={`${className}`} onClick={() => setIsModalOpen(true)}>
        <SvgIcon name="ri:palette-line" size={20} className="cursor-pointer" />
      </div>

      <Modal title={t('theme.themeChange')} width={900} open={isModalOpen} footer={null} keyboard={false} maskClosable={false} centered={true} onCancel={() => setIsModalOpen(false)}>
        <div>
          <Divider>logo</Divider>
          <div className="flex">
            { logoThemeData.map(item => changeColor(item, setTheme)) }
          </div>

          <Divider>{t('theme.mianNav')}</Divider>
          <div className="flex">
            { mainMenuThemeData.map(item => changeColor(item, setTheme)) }
          </div>

          <Divider>{t('theme.subNav')}</Divider>
          <div className="flex">
            { menuThemeData.map(item => changeColor(item, setTheme)) }
          </div>

          <Divider>{t('theme.tabbar')}</Divider>
          <div className="flex">
            { tabbarThemeData.map(item => changeColor(item, setTheme)) }
          </div>

          <Divider>{t('theme.toolbar')}</Divider>
          <div className="flex">
            { toolbarThemeData.map(item => changeColor(item, setTheme)) }
          </div>

        </div>
      </Modal>
    </>
  )
}

function changeColor(item: IThemeData, setTheme: (key: keyof IGlobalTheme, color: string) => void) {
  return (
    <div key={item.key} className="w-1/4 flex flex-col items-center">
      <span className="mb-1">{item.title}</span>
      <ColorPicker defaultValue={item.value} onChange={e => setTheme(item.key, e.toHexString())} />
    </div>
  )
}
