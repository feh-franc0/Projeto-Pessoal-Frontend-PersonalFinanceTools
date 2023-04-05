import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  margin: 5px;

  //* acessar o tema da aplicacao em style/themes/default.ts
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  //* props = variant={variant} do component ButtonContainer
  //* esse css é apenas para por uma cor mais amigavel, pode remove-lo
  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`
