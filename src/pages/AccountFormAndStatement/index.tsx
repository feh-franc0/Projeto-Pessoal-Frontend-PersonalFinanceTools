import {
  ArrowCircleDown,
  ArrowCircleUp,
  MagnifyingGlass,
  Pencil,
  Trash,
} from 'phosphor-react'
import { FinancialStatementTable, StyledZero } from './styles'
import { Summary } from '../../components/Summary'
import { useEffect, useState } from 'react'

interface IResultSummaryAccounting {
  _id: string
  name: string
  earnOrSpend: 'earn' | 'spend'
  price: number
  __v: number
}

interface IDataSummary {
  totalEarn: string
  totalSpend: string
  summary: string
}

interface IDataForm {
  name: string
  earnOrSpend: string
  price: number
}

export function AccountFormAndStatement() {
  const [account, setAccount] = useState<IResultSummaryAccounting[]>([])
  const [formAccount, setFormAccount] = useState<IDataForm>({
    name: '',
    earnOrSpend: 'spend',
    price: 0,
  })

  const token = localStorage.getItem('TOKEN_JWT')

  const loadAccount = async () => {
    const response = await fetch('http://localhost:3000/accounting/all', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const dados = await response.json()
    setAccount(dados)
  }

  const loadSummaryAccount = async () => {
    const response = await fetch('http://localhost:3000/accounting/summary', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const dados = await response.json()
    setDataSummary(dados)
  }

  useEffect(() => {
    loadAccount()
    loadSummaryAccount()
  }, [])

  const handleAdd = async (event: any) => {
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/accounting', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formAccount),
      })

      await response.json()
      loadAccount()
      loadSummaryAccount()
    } catch (error) {
      console.error(error)
    }
  }

  // console.log('account: ', account)
  const [dataSummary, setDataSummary] = useState<IDataSummary>({
    totalEarn: '',
    totalSpend: '',
    summary: '',
  })

  // const token = localStorage.getItem('TOKEN_JWT')

  // console.log(dataSummary)
  // const { totalEarn, totalSpend, summary } = dataSummary

  return (
    <>
      <Summary dataSummaryAccount={dataSummary} />
      <StyledZero>
        <form>
          <div className="form-group">
            <label htmlFor="descricao">Descrição:</label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              required
              value={formAccount.name}
              onChange={(event) =>
                setFormAccount({ ...formAccount, name: event.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="valor">Valor:</label>
            <input
              type="number"
              id="valor"
              name="valor"
              required
              value={formAccount.price}
              onChange={(event) =>
                setFormAccount({
                  ...formAccount,
                  price: Number(event.target.value),
                })
              }
            />
          </div>

          <div className="form-group">
            <div className="gap">
              <input
                type="radio"
                id="entrada"
                name="tipo"
                value="earn"
                required
                onChange={(event) =>
                  setFormAccount({
                    ...formAccount,
                    earnOrSpend: event.target.value,
                  })
                }
              />
              <label htmlFor="entrada">Entrada</label>
              <input
                type="radio"
                id="saida"
                name="tipo"
                value="spend"
                required
                defaultChecked
                onChange={(event) =>
                  setFormAccount({
                    ...formAccount,
                    earnOrSpend: event.target.value,
                  })
                }
              />
              <label htmlFor="saida">Saída</label>
            </div>
          </div>

          <button type="submit" onClick={handleAdd}>
            Adicionar
          </button>
        </form>

        <FinancialStatementTable>
          <table>
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Descrição</th>
                <th style={{ width: '30%' }}>Valor</th>
                <th style={{ width: '10%' }}>Tipo</th>
                <th style={{ width: '20%' }}></th>
              </tr>
            </thead>
            <tbody>
              {account.map((obj) => (
                <tr key={obj._id}>
                  <td>{obj.name}</td>
                  <td>{obj.price}</td>
                  <td>
                    {obj.earnOrSpend === 'earn' ? (
                      <ArrowCircleUp className="earn" size={32} />
                    ) : (
                      <ArrowCircleDown className="spend" size={32} />
                    )}
                  </td>
                  <td>
                    <button>
                      <Trash className="trash" size={28} />
                      <MagnifyingGlass className="MagnifyingGlass" size={28} />
                      <Pencil className="Pencil" size={28} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FinancialStatementTable>
      </StyledZero>
    </>
  )
}
