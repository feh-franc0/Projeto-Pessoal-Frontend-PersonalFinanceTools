import { NavLink } from 'react-router-dom'
import iconGoogle from '../../assets/GoogleG.png'

export function Login() {
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

        <div className="remeberAndForgot">
          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Lembrar-me</label>
          </div>

          <div className="forgot-password">
            <NavLink to="/register">Esqueceu a senha?</NavLink>
          </div>
        </div>

        <button type="submit">Entrar</button>

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
