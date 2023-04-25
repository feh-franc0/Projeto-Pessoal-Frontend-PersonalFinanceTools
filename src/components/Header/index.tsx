import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Bank, SignOut, Wallet } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <h2>Gestão financeira</h2>
      <nav>
        <NavLink to="/accounting">
          <Wallet size={24} />
        </NavLink>
        <NavLink to="/finance">
          <Bank size={24} />
        </NavLink>
        <NavLink className="exit" to="/">
          <SignOut size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
