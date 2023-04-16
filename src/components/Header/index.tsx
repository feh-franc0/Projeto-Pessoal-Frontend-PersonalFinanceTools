import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Bank, Wallet } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <h2>Gestão financeira</h2>
      <nav>
        <NavLink to="/">
          <Wallet size={24} />
        </NavLink>
        <NavLink to="/history">
          <Bank size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
