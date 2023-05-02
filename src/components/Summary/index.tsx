import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer } from './styles'
import { useEffect, useState } from 'react'

interface IDataSummary {
  totalEarn: string
  totalSpend: string
  summary: string
}

export function Summary() {
  const [dataSummary, setDataSummary] = useState<IDataSummary>({
    totalEarn: '',
    totalSpend: '',
    summary: '',
  })

  const token = localStorage.getItem('TOKEN_JWT')

  useEffect(() => {
    fetch('http://localhost:3000/accounting/summary', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setDataSummary(data))
      .catch((error) => console.error(error))
  }, [])

  console.log(dataSummary)
  const { totalEarn, totalSpend, summary } = dataSummary

  return (
    <SummaryContainer>
      <div className="ganho">
        <div className="container">
          <div className="header">
            <h2>Ganho</h2>
            <ArrowCircleUp size={32} />
          </div>
          <div className="texto">
            <p>R$ {totalEarn}</p>
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
            <p>R$ {totalSpend}</p>
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
            <p>R$ {summary}</p>
          </div>
        </div>
      </div>
    </SummaryContainer>
  )
}
