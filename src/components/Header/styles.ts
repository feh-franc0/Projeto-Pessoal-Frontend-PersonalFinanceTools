import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */

  /* justify-content: space-between; */
  background-color: ${(props) => props.theme['color-primary']};
  padding: 1rem;
  padding-bottom: 3.5rem;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;

  h2 {
    color: white;
    font-size: 2.5rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid
          ${(props) => props.theme['color-primary-light']};
      }

      &.active {
        color: ${(props) => props.theme['color-primary-light']};
      }
    }
  }
`
