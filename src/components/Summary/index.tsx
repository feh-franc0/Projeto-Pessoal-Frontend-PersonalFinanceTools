import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <div className="saldo">
        <div className="container">
          <div className="header">
            <h2>Saldo</h2>
            <ArrowCircleUp size={32} />
          </div>
          <div className="texto">
            <p>R$ 1200,00</p>
          </div>
        </div>
      </div>

      <div className="despesa">
        <div className="container">
          <div className="header">
            <h2>Despesa</h2>
            <ArrowCircleDown size={32} />
          </div>
          <div className="texto">
            <p>R$ 1200,00</p>
          </div>
        </div>
      </div>

      <div className="sobrou">
        <div className="container">
          <div className="header">
            <h2>Título</h2>
            <CurrencyDollar size={32} />
          </div>
          <div className="texto">
            <p>R$ 1200,00</p>
          </div>
        </div>
      </div>
    </SummaryContainer>
  )
}
