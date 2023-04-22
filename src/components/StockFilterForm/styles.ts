import styled from 'styled-components'

export const StockFilterFormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 20px;
  position: relative;
  top: -20px;

  .container {
    background-color: #0080c0;
    border-radius: 20px;
    padding: 10px;

    .text {
      color: white;
      padding: 2px 2px 10px 2px;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  .checkboxes {
    /* background-color: blue; */
    border-radius: 0px 0px 20px 20px;
  }

  .checkbox-container {
    display: flex;
    justify-content: space-between;

    label {
      flex-basis: calc(100% / 7);
      width: 10vw;
      max-width: 150px;
    }
  }
`
