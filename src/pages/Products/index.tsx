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

  const token = localStorage.getItem('TOKEN_JWT')

  async function fetchData() {
    try {
      const response = await Promise.all([
        fetch('http://localhost:3000/finance/selic', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        fetch('http://localhost:3000/finance/ipca', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        fetch('http://localhost:3000/finance/cdi', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ])

      const [selicRes, ipcaRes, cdiRes] = await Promise.all(
        response.map((res) => res.json()),
      )

      setTaxas((prevState) => ({
        ...prevState,
        selic: selicRes.result[0].valor,
        ipca: ipcaRes.result[0].valor,
        cdi: cdiRes.result[0].valor,
      }))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
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
