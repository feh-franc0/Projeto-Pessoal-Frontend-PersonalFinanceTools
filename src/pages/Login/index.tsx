import { LoginContainer, SideLeft, SideRight } from './styles'

import imgSideLeft from '../../assets/loginPic.png'
import iconGoogle from '../../assets/GoogleG.png'

export function Login() {
  // ? <Outlet /> = um espaço para ser inserido algum conteúdo
  return (
    <LoginContainer>
      <SideLeft>
        <img src={imgSideLeft} alt="" />
      </SideLeft>
      <SideRight>
        <div className="form">
          {/* <form action="">
            <label htmlFor="username">Usuário:</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />
            <input type="submit" value="Entrar" />
          </form> */}
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
                <a href="#">Esqueceu a senha?</a>
              </div>
            </div>

            <button type="submit">Entrar</button>

            <div className="register">
              <p>Não tem uma conta?</p>
              <a href="#">Registre-se</a>
            </div>

            <div className="login-with-google">
              <p>Logar com:</p>
              <button>
                <img src={iconGoogle} alt="" />
              </button>
            </div>
          </form>
        </div>
      </SideRight>
    </LoginContainer>
  )
}
