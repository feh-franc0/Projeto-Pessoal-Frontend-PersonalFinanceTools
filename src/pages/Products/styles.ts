import styled from 'styled-components'

export const ContainerTableStocks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: red; */

  table {
    border-collapse: collapse;
    background-color: white;
    color: ${(props) => props.theme['color-secundary-dark']};
    font-size: 1.2rem;
  }

  thead tr {
    position: sticky;
    top: 0;
    background-color: ${(props) => props.theme['color-secundary']};
    color: ${(props) => props.theme.white};
  }

  table,
  th,
  td {
    border: 1px solid black;
    padding: 5px;
  }

  .containerLoader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .loader {
    animation: is-rotating 1s infinite;
    border: 10px solid #e5e5e5;
    border-top-color: ${(props) => props.theme['color-primary']};
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  @media screen and (max-width: 600px) {
    table {
      font-size: 1rem;
    }
  }
`

export const ScrollTable = styled.div`
  /* box-shadow: 2px 1px 15px gray; */
  text-align: center;
  width: 90%;
  justify-content: center;
  overflow: auto;
  height: calc(100vh - 26rem);
  margin: 20px auto;
  border-top-left-radius: 18px;
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['color-primary']};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  ::-webkit-scrollbar {
    background-color: ${(props) => props.theme['gray-300']};
    width: 5px;
    height: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  @media screen and (max-width: 600px) {
    height: calc(100vh - 16rem);
  }
`

export const ContainerMain = styled.div`
  width: 100%;
`

export const SummaryContainerSELICIPCACDI = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  /* background-color: #eee; */
  padding: 20px;
  position: relative;
  top: -25px;
  gap: 5px;

  .selic,
  .ipca,
  .cdi {
    border-radius: 8px;
    width: 25%;
    height: 100px;
    display: block;
    padding: 0px 20px;
  }

  .selic {
    box-shadow: 2px 1px 15px gray;
    background-color: white;
    .container {
      .header {
        h2 {
          color: ${(props) => props.theme['color-secundary-dark']};
        }
        svg {
          color: ${(props) => props.theme['color-secundary-dark']};
        }
      }
      .texto {
        color: ${(props) => props.theme['color-secundary-dark']};
      }
    }
  }

  .ipca {
    box-shadow: 2px 1px 15px gray;
    background-color: white;
    .container {
      .header {
        h2 {
          color: ${(props) => props.theme['color-secundary-dark']};
        }
        svg {
          color: ${(props) => props.theme['color-secundary-dark']};
        }
      }
      .texto {
        color: ${(props) => props.theme['color-secundary-dark']};
      }
    }
  }

  .cdi {
    box-shadow: 2px 1px 15px gray;
    background-color: white;
    .container {
      .header {
        h2 {
          color: ${(props) => props.theme['color-secundary-dark']};
        }
        svg {
          color: ${(props) => props.theme['color-secundary-dark']};
        }
      }
      .texto {
        color: ${(props) => props.theme['color-secundary-dark']};
      }
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    padding: 10px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

    h2 {
      font-size: 1.5rem;
      /* font-weight: bold; */
      margin-right: 10px;
    }
  }
  .texto {
    width: 100%;
    color: black;
    p {
      font-size: 2.3rem;
      font-weight: bold;
      width: 100%;
      text-align: center;
    }
  }
  @media screen and (max-width: 600px) {
    .selic > .container > .texto > p,
    .ipca > .container > .texto > p,
    .cdi > .container > .texto > p {
      font-size: 1.5rem;
    }

    .selic > .container > .header > svg,
    .ipca > .container > .header > svg,
    .cdi > .container > .header > svg {
      margin: 0px auto;
      display: none;
    }

    .selic,
    .ipca,
    .cdi {
      width: 35%;
    }
  }
`
