import { Outlet } from 'react-router-dom'
import { LoginContainer, SideLeft, SideRight } from './styles'

import imgSideLeft from '../../assets/loginPic.png'

export function LoginAndRegister() {
  return (
    <LoginContainer>
      <SideLeft>
        <img src={imgSideLeft} alt="" />
      </SideLeft>
      <SideRight>
        <Outlet />
      </SideRight>
    </LoginContainer>
  )
}
