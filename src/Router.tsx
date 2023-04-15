import { Routes, Route } from 'react-router-dom'
// import { Home } from './pages/Home'
import { DashBoard } from './pages/DashBoard'
import { Products } from './pages/Products'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { AdminLayout } from './layouts/AdminLayout/index'
import { Login } from './pages/Login'

export function Router() {
  //* Apartir do "/" coloque o estilo DefaultLayout <Route path="/" element={<DefaultLayout />}>

  //* Apartir do "/admin" coloque o estilo AdminLayout <Route path="/" element={<AdminLayout />}>
  // ? para acessa a rota de produtos use /admin/products

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/products" element={<Products />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/" element={<DashBoard />} />
      </Route>
    </Routes>
  )
}
