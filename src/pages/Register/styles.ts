import styled from 'styled-components'

export const RegisterContainer = styled.div`
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
  .userName,
  input[type='email'],
  input[type='password'] {
    padding: 10px;
    margin-bottom: 10px;
    border: 0px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background-color: #e8f0fe;
    color: #000000;
  }

  .remeberAndForgot {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .terms {
    margin: auto 10px;
    input {
      margin-right: 5px;
    }
    a {
      text-decoration: none;
      color: #529fe5;
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
    margin-bottom: 20px;
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

  .haveAccount {
    display: block;
    margin-top: 20px;
    text-align: center;
    justify-content: center;

    p {
      display: inline-block;
      /* margin-right: 5px; */
      font-size: 1.3rem;
      color: #808080;
    }

    a {
      display: inline-block;
      font-size: 1.3rem;
      color: #808080;
      /* padding: 10px; */
      /* border: none; */
      /* border-radius: 5px; */
      /* background-color: #fff; */
      color: #529fe5;
      margin: auto 10px;
      text-decoration: none;
      cursor: pointer;
      /* box-shadow: 1px 1px 1px #ccc; */
    }
  }
`
