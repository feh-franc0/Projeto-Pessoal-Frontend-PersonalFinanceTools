import styled from 'styled-components'

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  /* background-color: #eee; */
  padding: 20px;
  position: relative;
  top: -25px;

  .ganho,
  .despesa,
  .sobrou {
    border-radius: 8px;
    width: 25%;
    height: 100px;
    display: block;
    padding: 0px 20px;
  }

  .ganho {
    background-color: white;

    box-shadow: 2px 1px 15px gray;
    .container {
      .header {
        svg {
          color: green;
        }
      }
    }
  }

  .despesa {
    background-color: white;
    .container {
      .header {
        svg {
          color: red;
        }
      }
    }
  }

  .sobrou {
    background-color: green;
    .container {
      .header {
        h2 {
          color: white;
        }
        svg {
          color: white;
        }
      }
      .texto {
        color: white;
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
    gap: 5px;
    .ganho,
    .despesa,
    .sobrou {
      width: 36%;
      height: 80px;
    }
    .ganho > .container > .texto > p,
    .despesa > .container > .texto > p,
    .sobrou > .container > .texto > p {
      font-size: 1.2rem;
    }
    .ganho > .container > .header > h2,
    .despesa > .container > .header > h2,
    .sobrou > .container > .header > h2 {
      padding: 0px 10px;
      font-size: 1.3rem;
    }
    .ganho > .container > .header > svg,
    .despesa > .container > .header > svg,
    .sobrou > .container > .header > svg {
      display: none;
    }
    .ganho > .container,
    .despesa > .container,
    .sobrou > .container {
      padding: 0px;
    }
  }
`
