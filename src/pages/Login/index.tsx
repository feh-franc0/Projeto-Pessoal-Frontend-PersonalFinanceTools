import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import iconGoogle from '../../assets/GoogleG.png'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useNavigate()

  const handleLogin = () => {
    if (email === 'email@gmail.com' && password === 'minhasenha123') {
      history('/accounting') // redireciona para a página home se as credenciais forem válidas
    } else {
      alert('Email ou senha inválidos.') // mostra uma mensagem de erro se as credenciais não forem válidas
    }
  }

  return (
    <div className="form">
      <form id="login-form">
        <h1>LOGIN</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="digite seu Email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          placeholder="digite sua Senha"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="remeberAndForgot">
          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Lembrar-me</label>
          </div>

          <div className="forgot-password">
            <NavLink to="/register">Esqueceu a senha?</NavLink>
          </div>
        </div>

        <button type="submit" onClick={handleLogin}>
          Entrar
        </button>

        <div className="register">
          <p>Não tem uma conta?</p>
          <NavLink to="/register">Registre-se</NavLink>
        </div>

        <div className="login-with-google">
          <p>Logar com:</p>
          <button>
            <img src={iconGoogle} alt="" />
          </button>
        </div>
      </form>
    </div>
  )
}
