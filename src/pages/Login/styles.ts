import styled from 'styled-components'

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

  /* .form {
    width: 400px;
    margin: auto;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .form form {
    display: flex;
    flex-direction: column;
  }

  .form label {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .form input[type='text'],
  .form input[type='password'] {
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    background-color: #f0f0f0;
  }

  .form input[type='submit'] {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .form input[type='submit']:hover {
    background-color: #3e8e41;
  } */

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
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  .remember-me {
    /* display: flex; */
    /* justify-content: space-between; */
    /* margin-bottom: 10px; */
    input {
    }
    label {
    }
  }

  .forgot-password {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .forgot-password a {
    color: blue;
  }

  button[type='submit'] {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  .register {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .register p {
    margin-right: 5px;
  }

  .register a {
    color: blue;
  }

  .login-with-google {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .login-with-google p {
    margin-right: 5px;
  }

  .login-with-google button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #ccc;
  }
`
