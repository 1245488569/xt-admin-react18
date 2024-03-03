import styled from 'styled-components'

interface ITopNavWrapper {
  $topNavContainerBg: string | undefined
}

export const TopNavWrapper = styled.div<ITopNavWrapper>`
  background: ${props => props.$topNavContainerBg};
  .ant-menu-light {
    background: ${props => props.$topNavContainerBg};
    border-bottom: none;
  }
`
