import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  height: 100%;

  .main-box {
    background-color: ${props => props.theme.isDark ? '#141414' : '#f5f5f5'};
    color: ${props => props.theme.isDark ? '#ffffff' : '#000000'};
  }
`
