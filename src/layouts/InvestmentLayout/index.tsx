import { Outlet } from 'react-router-dom'
import { HeaderAdmin } from '../../components/HeaderAdmin'

export function InvestmentLayout() {
  // ? <Outlet /> = um espaço para ser inserido algum conteúdo
  return (
    <div>
      <HeaderAdmin />
      <Outlet />
    </div>
  )
}
