import styled from 'styled-components'

export const PageMainWrapper = styled.div`
  background-color: ${props => props.theme.isDark ? '#303643' : '#ffffff'};
  color: ${props => props.theme.isDark ? '#ffffff' : '#000000'};
`
