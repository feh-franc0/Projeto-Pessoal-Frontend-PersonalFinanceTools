import { NavLink } from 'react-router-dom'
import { RegisterContainer } from './styles'

export function Register() {
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
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="digite seu Email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            placeholder="digite sua Senha"
            id="password"
            name="password"
            required
          />

          <label htmlFor="ConfirmPassword">Confirme sua Senha:</label>
          <input
            type="password"
            placeholder="Confirme sua Senha"
            id="ConfirmPassword"
            name="ConfirmPassword"
            required
          />

          <div className="remeberAndForgot">
            <div className="terms">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Aceito os </label>
              <NavLink to="/">Termos de serviço</NavLink>
            </div>
          </div>

          <button type="submit">Entrar</button>

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
