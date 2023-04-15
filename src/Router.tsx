import { Routes, Route } from 'react-router-dom'
// import { Home } from './pages/Home'
import { DashBoard } from './pages/DashBoard'
import { Products } from './pages/Products'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { AdminLayout } from './layouts/AdminLayout/index'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { LoginAndRegister } from './layouts/LoginAndRegister'

export function Router() {
  //* Apartir do "/" coloque o estilo DefaultLayout <Route path="/" element={<DefaultLayout />}>

  //* Apartir do "/admin" coloque o estilo AdminLayout <Route path="/" element={<AdminLayout />}>
  // ? para acessa a rota de produtos use /admin/products

  return (
    <Routes>
      <Route path="/" element={<LoginAndRegister />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/" element={<DashBoard />} />
      </Route>
    </Routes>
  )
}
