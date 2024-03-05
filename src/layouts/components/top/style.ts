import styled, { createGlobalStyle } from 'styled-components'

interface IMenuWrapper {
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
  } | undefined
}

export const TopNavWrapper = styled.div<IMenuWrapper>`
  background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuContainerBgColor : props.$customMenuClass?.menuContainerBgColor};
  .ant-menu-light, .ant-menu-dark  {
    border-bottom: none;
  }

  .xt-menu {
    background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuContainerBgColor : props.$customMenuClass?.menuContainerBgColor};
    color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuTextColor : props.$customMenuClass?.menuTextColor};

    .ant-menu-item, .ant-menu-submenu {
      margin-right: 8px;
      background: transparent;
      color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuTextColor : props.$customMenuClass?.menuTextColor};

      &:hover {
        background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverBgColor : props.$customMenuClass?.menuHoverBgColor};
        color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;
        border-bottom: 2px solid ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor};

        .ant-menu-submenu-title {
          color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;
        }
      }

      &.ant-menu-item-selected, &.ant-menu-submenu-selected {
        background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveBgColor : props.$customMenuClass?.menuActiveBgColor};
        color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveTextColor : props.$customMenuClass?.menuActiveTextColor};
        border-bottom: 2px solid ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveTextColor : props.$customMenuClass?.menuActiveTextColor};

        .ant-menu-submenu-title {
          color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveTextColor : props.$customMenuClass?.menuActiveTextColor};
        }
      }
    }

    .ant-menu-submenu-open {
      background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveBgColor : props.$customMenuClass?.menuActiveBgColor};
      color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;
      border-bottom: 2px solid ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor};

      .ant-menu-submenu-title {
        color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;
      }
    }
  }
  
`
export const GlobalStyles = createGlobalStyle<IMenuWrapper>`
  body {
    .xt-admin-popup-menu {
      .ant-menu-item {
        background: transparent;
        color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuTextColor : props.$customMenuClass?.menuTextColor};

        &:hover {
          background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverBgColor : props.$customMenuClass?.menuHoverBgColor}!important;
          color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;

          .ant-menu-submenu-title {
            background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverBgColor : props.$customMenuClass?.menuHoverBgColor}!important;
            color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;
          }
        }

        &.ant-menu-item-selected {
          background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveBgColor : props.$customMenuClass?.menuActiveBgColor} !important;
          color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveTextColor : props.$customMenuClass?.menuActiveTextColor};

          .ant-menu-submenu-title {
            color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveTextColor : props.$customMenuClass?.menuActiveTextColor};
          }
        }
      }

      .ant-menu-submenu {
        background: transparent;
        color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuTextColor : props.$customMenuClass?.menuTextColor};

        &:hover {
          .ant-menu-submenu-title {
            background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverBgColor : props.$customMenuClass?.menuHoverBgColor}!important;
            color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;
          }
        }

        &.ant-menu-submenu-selected {
          color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveTextColor : props.$customMenuClass?.menuActiveTextColor};

          .ant-menu-submenu-title {
            background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveBgColor : props.$customMenuClass?.menuActiveBgColor} !important;
            color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveTextColor : props.$customMenuClass?.menuActiveTextColor};
          }
        }
      }

      .ant-menu-submenu-open {
        color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;

        .ant-menu-submenu-title {
          background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveBgColor : props.$customMenuClass?.menuActiveBgColor};
          color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;
        }
      }
    }
  }
`
