import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DashBoard } from './pages/DashBoard'
import { Products } from './pages/Products'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { AdminLayout } from './layouts/AdminLayout/index'

export function Router() {
  //* Apartir do "/" coloque o estilo DefaultLayout <Route path="/" element={<DefaultLayout />}>

  //* Apartir do "/admin" coloque o estilo AdminLayout <Route path="/" element={<AdminLayout />}>
  // ? para acessa a rota de produtos use /admin/products

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/" element={<DashBoard />} />
        <Route path="/admin/products" element={<Products />} />
      </Route>
    </Routes>
  )
}
