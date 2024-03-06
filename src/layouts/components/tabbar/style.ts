import styled from 'styled-components'

interface ITabbarWrapper {
  $customTabbarClass: {
    tabbarBgColor: string
    tabbarItemBgColor: string
    tabbarItemActiveBgColor: string
    tabbarItemHoverBgColor: string
    tabbarItemTextColor: string
    tabbarItemActiveTextColor: string
    tabbarItemHoverTextColor: string
    darkTabbarBgColor: string
    darkTabbarItemBgColor: string
    darkTabbarItemActiveBgColor: string
    darkTabbarItemHoverBgColor: string
    darkTabbarItemTextColor: string
    darkTabbarItemActiveTextColor: string
    darkTabbarItemHoverTextColor: string
  }
}

export const TabbarWrapper = styled.div<ITabbarWrapper>`
  background: ${props => props.theme.isDark ? props.$customTabbarClass.darkTabbarBgColor : props.$customTabbarClass.tabbarBgColor};

  .tabbar-item {
    background: ${props => props.theme.isDark ? props.$customTabbarClass.darkTabbarItemBgColor : props.$customTabbarClass.tabbarItemBgColor};
    color: ${props => props.theme.isDark ? props.$customTabbarClass.darkTabbarItemTextColor : props.$customTabbarClass.tabbarItemTextColor};

    &:hover {
      background: ${props => props.theme.isDark ? props.$customTabbarClass.darkTabbarItemHoverBgColor : props.$customTabbarClass.tabbarItemHoverBgColor};
      color: ${props => props.theme.isDark ? props.$customTabbarClass.darkTabbarItemHoverTextColor : props.$customTabbarClass.tabbarItemHoverTextColor};
    }

    &.active {
      background: ${props => props.theme.isDark ? props.$customTabbarClass.darkTabbarItemActiveBgColor : props.$customTabbarClass.tabbarItemActiveBgColor};
      color: ${props => props.theme.isDark ? props.$customTabbarClass.darkTabbarItemActiveTextColor : props.$customTabbarClass.tabbarItemActiveTextColor};
    }
  }
`
