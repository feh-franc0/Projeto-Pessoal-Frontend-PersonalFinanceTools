import { Routes, Route } from 'react-router-dom'
// import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { AccountingLayout } from './layouts/AccountingLayout/index'
import { InvestmentLayout } from './layouts/InvestmentLayout/index'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { AccountFormAndStatement } from './pages/AccountFormAndStatement'
import { LoginAndRegister } from './layouts/LoginAndRegister'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginAndRegister />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/accounting" element={<AccountingLayout />}>
        <Route path="/accounting" element={<AccountFormAndStatement />} />
      </Route>

      <Route path="/finance" element={<InvestmentLayout />}>
        <Route path="/finance" element={<Products />} />
      </Route>
    </Routes>
  )
}
