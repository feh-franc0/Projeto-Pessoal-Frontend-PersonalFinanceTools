import { Coins } from 'phosphor-react'
import Table from './Table'
import {
  ContainerMain,
  ContainerTableStocks,
  ScrollTable,
  SummaryContainerSELICIPCACDI,
} from './styles'

export function Products() {
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
