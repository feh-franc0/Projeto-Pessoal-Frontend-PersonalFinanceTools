import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer } from './styles'
// import { useEffect, useState } from 'react'

export function Summary(props: any) {
  console.log('myprops', props.dataSummaryAccount)

  return (
    <SummaryContainer>
      <div className="ganho">
        <div className="container">
          <div className="header">
            <h2>Ganho</h2>
            <ArrowCircleUp size={32} />
          </div>
          <div className="texto">
            <p>R$ {props.dataSummaryAccount.totalEarn}</p>
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
            <p>R$ {props.dataSummaryAccount.totalSpend}</p>
          </div>
        </div>
      </div>

      <div className="sobrou">
        <div className="container">
          <div className="header">
            <h2>Saldo</h2>
            <CurrencyDollar size={32} />
          </div>
          <div className="texto">
            <p>R$ {props.dataSummaryAccount.summary}</p>
          </div>
        </div>
      </div>
    </SummaryContainer>
  )
}
