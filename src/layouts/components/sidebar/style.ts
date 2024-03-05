import styled from 'styled-components'

interface ISubSidebarWrapper {
  $customSubSidebarClass: {
    menuContainerBgColor: string
    menuTextColor: string
    menuHoverBgColor: string
    menuHoverTextColor: string
    menuActiveBgColor: string
    menuActiveTextColor: string
    darkMenuContainerBgColor: string
    darkMenuTextColor: string
    darkMenuHoverBgColor: string
    darkMenuHoverTextColor: string
    darkMenuActiveBgColor: string
    darkMenuActiveTextColor: string
  }
}

export const SubSidebarWrapper = styled.div<ISubSidebarWrapper>`
  background: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuContainerBgColor : props.$customSubSidebarClass.menuContainerBgColor};

  .xt-menu {
    background: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuContainerBgColor : props.$customSubSidebarClass.menuContainerBgColor};
    color: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuTextColor : props.$customSubSidebarClass.menuTextColor};

    .ant-menu-item {
      background: transparent;
      color: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuTextColor : props.$customSubSidebarClass.menuTextColor};

      &:hover {
        background: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuHoverBgColor : props.$customSubSidebarClass.menuHoverBgColor} !important;
        color: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuHoverTextColor : props.$customSubSidebarClass.menuHoverTextColor} !important;
      }

      &.ant-menu-item-selected {
        background: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuActiveBgColor : props.$customSubSidebarClass.menuActiveBgColor};
        color: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuActiveTextColor : props.$customSubSidebarClass.menuActiveTextColor};
      }
    }

    .ant-menu-submenu {
      background: transparent;
      /* color: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuTextColor : props.$customSubSidebarClass.menuTextColor}; */

      .ant-menu-submenu-title {
        &:hover {
          background: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuHoverBgColor : props.$customSubSidebarClass.menuHoverBgColor};
          color: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuHoverTextColor : props.$customSubSidebarClass.menuHoverTextColor};
        } 
      }

      .ant-menu-submenu-selected {
        color: ${props => props.theme.isDark ? props.$customSubSidebarClass.darkMenuActiveBgColor : props.$customSubSidebarClass.menuActiveBgColor};
      }
    }
  }
`
