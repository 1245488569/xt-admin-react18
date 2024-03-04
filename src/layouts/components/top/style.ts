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
  background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuContainerBgColor : props.$customMenuClass?.menuContainerBgColor};
  .ant-menu-light, .ant-menu-dark  {
    border-bottom: none;
  }

  .xt-menu {
    .ant-menu-item, .ant-menu-submenu {
      margin-right: 8px;
    }

    .ant-menu-item {
      &:hover {
        border-bottom: 2px solid ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor};
      }

      &.ant-menu-item-selected {
        color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveTextColor : props.$customMenuClass?.menuActiveTextColor};
        background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveBgColor : props.$customMenuClass?.menuActiveBgColor};
        border-bottom: 2px solid ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveTextColor : props.$customMenuClass?.menuActiveTextColor};
      }
    }

    .ant-menu-submenu {
      &:hover {
        color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;
        border-bottom: 2px solid ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor};
      }

      &.ant-menu-submenu-selected {
        background: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveBgColor : props.$customMenuClass?.menuActiveBgColor};
        border-bottom: 2px solid ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuActiveTextColor : props.$customMenuClass?.menuActiveTextColor};
      }
    }

    .ant-menu-submenu-open {
      color: ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor} !important;
      border-bottom: 2px solid ${props => props.theme.isDark ? props.$customMenuClass?.darkMenuHoverTextColor : props.$customMenuClass?.menuHoverTextColor};
    }
  }
  
`
