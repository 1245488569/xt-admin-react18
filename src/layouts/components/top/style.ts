import styled from 'styled-components'

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
  /* background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuContainerBgColor : props.$customMenuClass?.menuContainerBgColor};
  .ant-menu-light {
    background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuContainerBgColor : props.$customMenuClass?.menuContainerBgColor};
    border-bottom: none;
  }

  .xt-menu {
    .ant-menu-item, .ant-menu-submenu {
      margin-right: 8px;
      border-radius: 8px;
      background: transparent;
      color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuTextColor : props.$customMenuClass?.menuTextColor};

      &:hover {
        background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverBgColor : props.$customMenuClass?.menuHoverBgColor};
        color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;
        border-bottom: 2px solid ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor};
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

    .ant-menu-item::after, .ant-menu-submenu::after {
      content: none;
    }
  } */


  /* .ant-menu-submenu-popup.ant-menu-submenu {
    .ant-menu-item, .ant-menu-submenu {
      background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuContainerBgColor : props.$customMenuClass?.menuContainerBgColor};
      color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuTextColor : props.$customMenuClass?.menuTextColor};

      &:hover {
        background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverBgColor : props.$customMenuClass?.menuHoverBgColor};
        color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;
      }

      &.ant-menu-item-selected, &.ant-menu-submenu-selected {
        background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveBgColor : props.$customMenuClass?.menuActiveBgColor};
        color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveTextColor : props.$customMenuClass?.menuActiveTextColor};
      }
    }
  } */
  
`
