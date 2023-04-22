import { Outlet } from 'react-router-dom'
import { LayoutInvestment } from './styles'
import { Header } from '../../components/Header'
// import { StockFilterForm } from '../../components/StockFilterForm'

export function InvestmentLayout() {
  // ? <Outlet /> = um espaço para ser inserido algum conteúdo
  return (
    <LayoutInvestment>
      <Header />
      {/* <StockFilterForm /> */}
      <Outlet />
    </LayoutInvestment>
  )
}
