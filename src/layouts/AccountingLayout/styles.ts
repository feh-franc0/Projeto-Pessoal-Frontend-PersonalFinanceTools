import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['white-bg']};
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;

  @media screen and (max-width: 650px) {
    margin: 0;
    height: calc(100vh);
  }
`
