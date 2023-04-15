import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-700']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`

export const LoginContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  /* padding: 2.5rem; */

  /* background: ${(props) => props.theme['color-primary']};
  border-radius: 8px; */

  display: flex;
  justify-content: center;
`

export const SideLeft = styled.div`
  color: blue;
  width: 50%;
  text-align: center;
  background-color: ${(props) => props.theme['color-primary']};
  /* background-image: url('../../../loginpicture.jpg'); */
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
`

export const SideRight = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  color: #000;

  h1 {
    text-align: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  #login-form {
    /* background-color: red;  */
    width: 100vw;
    margin: 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    /* border: 1px solid #ccc; */
    border-radius: 5px;
  }

  label {
    margin-bottom: 5px;
  }

  input[type='email'],
  input[type='password'] {
    padding: 10px;
    margin-bottom: 10px;
    border: 0px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background-color: #e8f0fe;
    color: #feffff;
  }

  .remeberAndForgot {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .remember-me {
    input {
      margin-right: 5px;
    }
    label {
    }
  }

  .forgot-password {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    a {
      text-decoration: none;
      color: #529fe5;
    }
  }

  button[type='submit'] {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #529fe5;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  .register {
    display: flex;
    align-items: center;
    margin-top: 20px;
    p {
      margin-right: 5px;
    }
    a {
      color: #529fe5;
    }
  }

  .login-with-google {
    display: block;
    margin-top: 20px;
    text-align: center;
    justify-content: center;

    p {
      margin-right: 5px;
    }

    button {
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: #fff;
      color: #000;
      font-size: 16px;
      cursor: pointer;
      /* box-shadow: 1px 1px 1px #ccc; */

      img {
        display: block;
        width: 50px;
      }
    }
  }
`
