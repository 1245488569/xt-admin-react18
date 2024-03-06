import styled from 'styled-components'

interface IToolbarWrapper {
  $customToolbarClass: {
    toolbarBgColor: string
    toolbarTextColor: string
    darkToolbarBgColor: string
    darkToolbarTextColor: string
  }
}

export const ToolbarWrapper = styled.div<IToolbarWrapper>`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 30%);
  background: ${props => props.theme.isDark ? props.$customToolbarClass.darkToolbarBgColor : props.$customToolbarClass.toolbarBgColor};
  color: ${props => props.theme.isDark ? props.$customToolbarClass.darkToolbarTextColor : props.$customToolbarClass.toolbarTextColor};
`
