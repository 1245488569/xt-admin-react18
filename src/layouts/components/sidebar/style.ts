import styled from 'styled-components'

interface ISubSidebarWrapper {
  $customMenuClass: {
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
  background: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuContainerBgColor : props.$customMenuClass.menuContainerBgColor};

  .ant-menu-inline-collapsed {
    width: auto;
  }

  .ant-menu {
    color: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuTextColor : props.$customMenuClass.menuTextColor} !important;
  }

  .xt-menu {
    background: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuContainerBgColor : props.$customMenuClass.menuContainerBgColor};
    color: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuTextColor : props.$customMenuClass.menuTextColor};
    border-inline-end: none !important;

    .ant-menu-sub.ant-menu-inline {
      background: transparent;

      .ant-menu-item, .ant-menu-submenu {
        margin: 0 4px 2px;
      }
    }

    .ant-menu-item {
      background: transparent;
      color: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuTextColor : props.$customMenuClass.menuTextColor};

      &:hover {
        background: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuHoverBgColor : props.$customMenuClass.menuHoverBgColor} !important;
        color: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuHoverTextColor : props.$customMenuClass.menuHoverTextColor} !important;
      }

      &.ant-menu-item-selected {
        background: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuActiveBgColor : props.$customMenuClass.menuActiveBgColor};
        color: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuActiveTextColor : props.$customMenuClass.menuActiveTextColor};
      }
    }

    .ant-menu-submenu {
      background: transparent;

      .ant-menu-submenu-title {
        color: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuTextColor : props.$customMenuClass.menuTextColor};
        &:hover {
          background: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuHoverBgColor : props.$customMenuClass.menuHoverBgColor};
          color: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuHoverTextColor : props.$customMenuClass.menuHoverTextColor};
        } 
      }

      .ant-menu-submenu-selected {
        .ant-menu-submenu-title {
          color: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuActiveBgColor : props.$customMenuClass.menuActiveBgColor};
        }
      }
    }

    .ant-menu-submenu.ant-menu-submenu-selected {
      > .ant-menu-submenu-title {
        color: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuActiveBgColor : props.$customMenuClass.menuActiveBgColor};

        &:hover {
          background: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuHoverBgColor : props.$customMenuClass.menuHoverBgColor};
          color: ${props => props.theme.isDark ? props.$customMenuClass.darkMenuHoverTextColor : props.$customMenuClass.menuHoverTextColor};
        } 
      }
    }
  }
`

interface IMainSidebarWrapper {
  $customMainSidebarClass: {
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

export const MainSidebarMenuWrapper = styled.div<IMainSidebarWrapper>`
  background: ${props => props.theme.isDark ? props.$customMainSidebarClass.darkMenuContainerBgColor : props.$customMainSidebarClass.menuContainerBgColor};

  .main-sidebar-menu-container {
    overflow: hidden auto;
    overscroll-behavior: contain;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .main-menu-item {
    background: transparent;
    color: ${props => props.theme.isDark ? props.$customMainSidebarClass.darkMenuTextColor : props.$customMainSidebarClass.menuTextColor};

    &:hover {
      background: ${props => props.theme.isDark ? props.$customMainSidebarClass.darkMenuHoverBgColor : props.$customMainSidebarClass.menuHoverBgColor};
      color: ${props => props.theme.isDark ? props.$customMainSidebarClass.darkMenuHoverTextColor : props.$customMainSidebarClass.menuHoverTextColor};
    }

    &.is-active {
      background: ${props => props.theme.isDark ? props.$customMainSidebarClass.darkMenuActiveBgColor : props.$customMainSidebarClass.menuActiveBgColor};
      color: ${props => props.theme.isDark ? props.$customMainSidebarClass.darkMenuActiveTextColor : props.$customMainSidebarClass.menuActiveTextColor};
    }
  }
`
