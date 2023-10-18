import styled from 'styled-components'

export const NavigationBarContainer = styled.div`
  background-color: gray;
  color: white;
  padding: 16px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.color.main || 'white'};
`
