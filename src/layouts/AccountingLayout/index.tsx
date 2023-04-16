import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
import { Summary } from '../../components/Summary'

export function AccountingLayout() {
  // ? <Outlet /> = um espaço para ser inserido algum conteúdo
  return (
    <LayoutContainer>
      <Header />
      <Summary />
      <Outlet />
    </LayoutContainer>
  )
}
