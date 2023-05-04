import { Coins } from 'phosphor-react'
import Table from './Table'
import {
  ContainerMain,
  ContainerTableStocks,
  ScrollTable,
  SummaryContainerSELICIPCACDI,
} from './styles'
import { useEffect, useState } from 'react'

interface ITaxasAccounting {
  selic: string
  ipca: string
  cdi: string
}

export function Products() {
  const [taxas, setTaxas] = useState<ITaxasAccounting>({
    selic: '',
    ipca: '',
    cdi: '',
  })

  // const [selic, setSelic] = useState('')
  // const [ipca, setIpca] = useState('')
  // const [cdi, setCdi] = useState('')

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
          setTaxas({ ...taxas, selic: data.result[0].valor })
          // console.log('taxas: ', taxas)
        })
        .catch((error) => console.error(error))

      fetch('http://localhost:3000/finance/ipca', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setTaxas({ ...taxas, ipca: data.result[0].valor })
          // console.log('taxas: ', taxas)
        })
        .catch((error) => console.error(error))

      fetch('http://localhost:3000/finance/cdi', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setTaxas({ ...taxas, cdi: data.result[0].valor })
          // console.log('taxas: ', taxas)
        })
        .catch((error) => console.error(error))
    }
    fetchData()
    console.log('taxas: ', taxas)
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
                <p>{taxas.selic}%</p>
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
                <p> {taxas.ipca}%</p>
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
                <p> {taxas.cdi}% </p>
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
