import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
// import iconGoogle from '../../assets/GoogleG.png'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useNavigate()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const data = { email, password }
    console.log(data)
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const responseData = await response.json()
    localStorage.setItem('TOKEN_JWT', responseData.token)
    console.log('responseData: ', responseData.token)

    if (responseData.token) {
      console.log('logado')
      history('/accounting')
    } else {
      alert(responseData.msg)
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

        <button type="submit" onClick={handleSubmit}>
          Entrar
        </button>

        <div className="register">
          <p>Não tem uma conta?</p>
          <NavLink to="/register">Registre-se</NavLink>
        </div>

        <div className="login-with-google">
          {/* <p>Logar com:</p>
          <button>
            <img src={iconGoogle} alt="" />
          </button> */}
        </div>
      </form>
    </div>
  )
}
