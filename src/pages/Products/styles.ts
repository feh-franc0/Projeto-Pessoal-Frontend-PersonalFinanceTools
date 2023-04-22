import styled from 'styled-components'

export const ContainerTableStocks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  table {
    border-collapse: collapse;
    background-color: rgb(207 218 227);
    color: #000000;
    font-size: 1.2rem;
  }

  thead tr {
    position: sticky;
    top: 0;
    background-color: ${(props) => props.theme['color-secundary-dark']};
    color: #ffffff;
  }

  table,
  th,
  td {
    border: 1px solid black;
    padding: 5px;
  }
`

export const ScrollTable = styled.div`
  text-align: center;
  width: 85%;
  overflow: auto;
  height: calc(100vh - 25rem);
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
`
