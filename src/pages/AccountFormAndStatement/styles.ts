import styled from 'styled-components'

export const StyledZero = styled.div`
  /* background-color: #e6e6e6; */
  width: 100%;
  /* height: 100px; */

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    margin: 0px 6%;
    color: black;
    margin-top: 20px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 1px 1px 3px gray;
  }

  .form-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-right: 20px;
    padding: 10px 0px;

    .gap {
      display: flex;
      gap: 10px;
    }

    label {
      width: 100%;
      margin-right: 10px;
    }

    input[type='text'],
    input[type='number'] {
      width: 150px;
      border: 1px solid #dddddd;
      height: 25px;
      border-radius: 10px;
      padding: 10px;
    }
  }

  button[type='button'] {
    padding: 10px 15px;
    border: none;
    background-color: ${(props) => props.theme['error-alert']};
    border-radius: 8px;
    color: white;
    cursor: pointer;
  }

  button[type='submit'] {
    padding: 10px 15px;
    border: none;
    background-color: ${(props) => props.theme['color-primary']};
    border-radius: 8px;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['color-secundary-dark']};
    }
  }
`

export const FinancialStatementTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  -webkit-box-align: center;
  /* align-items: center; */
  background-color: white;
  margin: 20px 6% 0px;
  color: black;
  padding: 0px 10px;
  border-radius: 8px;
  box-shadow: gray 1px 1px 3px;
  overflow: auto;
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['color-primary']};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  ::-webkit-scrollbar {
    background-color: ${(props) => props.theme['gray-300']};
    width: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  /* height: calc(70% - 10vh); */
  max-height: calc(100vh - 32rem);

  table {
    border-collapse: collapse;
    width: 100%;
    /* margin-top: 20px; */

    thead {
      tr {
        th {
          position: sticky;
          top: 0;
          background-color: white;
          padding: 20px;
        }
      }
    }
  }

  th,
  td {
    text-align: left;
    padding: 8px;
    /* border-bottom: 1px solid #ddd; */
  }

  .earn {
    color: green;
  }

  .spend {
    color: red;
  }

  /* .trash {
    color: red;
  }

  .MagnifyingGlass {
    color: blue;
  }

  .Pencil {
    color: orange;
  } */

  th {
    /* background-color: #4caf50; */
    color: #000000;
    border-bottom: 2px solid #b0b0b0;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  button {
    /* background-color: #4caf50; */
    background-color: #00000000;
    border: none;
    /* color: white; */
    /* padding: 8px 16px; */
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 10px;
    cursor: pointer;

    svg {
      margin: 0px 0px;
    }
  }
`
