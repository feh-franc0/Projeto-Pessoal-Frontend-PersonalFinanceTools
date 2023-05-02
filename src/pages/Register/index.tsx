import { NavLink, useNavigate } from 'react-router-dom'
import { RegisterContainer } from './styles'
import { useState } from 'react'

export function Register() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const history = useNavigate()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const data = {
      name: userName,
      email,
      password,
      confirmpassword: confirmPassword,
    }
    console.log(data)
    const response = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(data),
      body: JSON.stringify(data),
    })
    const responseData = await response.json()
    console.log(responseData)

    // if (responseData.token) {
    //   console.log('logado')
    //   history('/accounting')
    // } else {
    //   alert(responseData.msg)
    // }

    history('/')
  }

  return (
    <RegisterContainer>
      <div className="form">
        <form id="login-form">
          <h1>REGISTRE-SE</h1>

          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            placeholder="digite seu User Name"
            className="userName"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="ConfirmPassword">Confirme sua Senha:</label>
          <input
            type="password"
            placeholder="Confirme sua Senha"
            id="ConfirmPassword"
            name="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="remeberAndForgot">
            <div className="terms">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Aceito os </label>
              <NavLink to="/">Termos de serviço</NavLink>
            </div>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Entrar
          </button>

          <hr style={{ marginBottom: '10px' }} />

          <div className="haveAccount">
            <p>ja tem uma conta?</p>
            <NavLink to="/">Faça login!</NavLink>
          </div>
        </form>
      </div>
    </RegisterContainer>
  )
}
