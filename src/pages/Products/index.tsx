import { Coins } from 'phosphor-react'
import Table from './Table'
import {
  ContainerMain,
  ContainerTableStocks,
  ScrollTable,
  SummaryContainerSELICIPCACDI,
} from './styles'
import { useEffect, useState } from 'react'

export function Products() {
  const [selic, setSelic] = useState('')
  const [ipca, setIpca] = useState('')
  const [cdi, setCdi] = useState('')

  const token = localStorage.getItem('TOKEN_JWT')

  useEffect(() => {
    async function fetchData() {
      fetch('http://localhost:3000/finance/selic', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setSelic(data)
          console.log(selic)
        })
        .catch((error) => console.error(error))

      fetch('http://localhost:3000/finance/ipca', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setIpca(data)
          console.log(ipca)
        })
        .catch((error) => console.error(error))

      fetch('http://localhost:3000/finance/cdi', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setCdi(data)
          console.log(cdi)
        })
        .catch((error) => console.error(error))
    }
    fetchData()
  }, [])

  return (
    <ContainerTableStocks>
      <ContainerMain>
        <SummaryContainerSELICIPCACDI>
          <div className="selic">
            <div className="container">
              <div className="header">
                <h2>SELIC</h2>
                <Coins size={24} />
              </div>
              <div className="texto">
                <p>13,75%</p>
              </div>
            </div>
          </div>

          <div className="ipca">
            <div className="container">
              <div className="header">
                <h2>IPCA</h2>
                <Coins size={24} />
              </div>
              <div className="texto">
                <p> 0,71%</p>
              </div>
            </div>
          </div>

          <div className="cdi">
            <div className="container">
              <div className="header">
                <h2>CDI</h2>
                <Coins size={24} />
              </div>
              <div className="texto">
                <p>13,65% </p>
              </div>
            </div>
          </div>
        </SummaryContainerSELICIPCACDI>
        <ScrollTable>
          <Table />
        </ScrollTable>
      </ContainerMain>
    </ContainerTableStocks>
  )
}
