import {
  ArrowCircleDown,
  ArrowCircleUp,
  // MagnifyingGlass,
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
  price: string
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
  price: string
}

interface IidAccountEdit {
  idItem?: string
}

export function AccountFormAndStatement() {
  const [isSpendChecked, setIsSpendChecked] = useState(true)
  const [mode, setMode] = useState<'cadastro' | 'edit'>('cadastro')
  const [account, setAccount] = useState<IResultSummaryAccounting[]>([])
  const [idAccountEdit, setIdAccountEdit] = useState<IidAccountEdit>({
    idItem: '',
  })
  const [formAccount, setFormAccount] = useState<IDataForm>({
    name: '',
    earnOrSpend: 'spend',
    price: '',
  })
  const [dataSummary, setDataSummary] = useState<IDataSummary>({
    totalEarn: '',
    totalSpend: '',
    summary: '',
  })

  const token = localStorage.getItem('TOKEN_JWT')

  const loadListItemsAccount = async () => {
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
    loadListItemsAccount()
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
      setFormAccount({
        price: '',
        earnOrSpend: 'spend',
        name: '',
      })
      setIsSpendChecked(true)
      loadListItemsAccount()
      loadSummaryAccount()
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = (id: string) => {
    console.log('handleDelete: ', id)
    fetch(`http://localhost:3000/accounting/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('response -> ', response)
        loadListItemsAccount()
        loadSummaryAccount()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleEdit = async ({
    _id,
    name,
    price,
    earnOrSpend,
  }: IResultSummaryAccounting) => {
    console.log('handleEdit: ', _id, name, price, earnOrSpend)
    setFormAccount({ price, earnOrSpend, name })
    setIdAccountEdit({ idItem: _id })
    setIsSpendChecked(earnOrSpend === 'spend')
    setMode('edit')
  }

  const handleCancelEdit = () => {
    setFormAccount({
      price: '',
      earnOrSpend: 'spend',
      name: '',
    })

    setIdAccountEdit({ idItem: '' })
    setIsSpendChecked(true)
    setMode('cadastro')
  }

  const handleEditForm = (event: any) => {
    event.preventDefault()
    fetch(`http://localhost:3000/accounting/${idAccountEdit.idItem}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formAccount),
    })
      .then((response) => {
        console.log('response put -> ', response)
        loadListItemsAccount()
        loadSummaryAccount()
        setMode('cadastro')
        setIdAccountEdit({ idItem: '' })
        setFormAccount({
          price: '',
          earnOrSpend: 'spend',
          name: '',
        })
        setIsSpendChecked(true)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  // const handleView = (id: string) => {
  //   // lógica para visualizar um objeto com o id fornecido
  //   console.log('handleView: ', id)
  // }

  return (
    <>
      <Summary dataSummaryAccount={dataSummary} />
      <StyledZero>
        {mode === 'cadastro' ? (
          <form>
            <div className="form-group">
              <label htmlFor="descricao">Descrição:</label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                required
                placeholder="aluguel"
                value={formAccount.name}
                onChange={(event) =>
                  setFormAccount({ ...formAccount, name: event.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="valor">Valor:</label>
              <input
                type="text"
                id="valor"
                name="valor"
                required
                placeholder="1200.00"
                value={formAccount.price}
                onChange={(event) =>
                  setFormAccount({
                    ...formAccount,
                    price: event.target.value,
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
                  checked={!isSpendChecked}
                  required
                  onChange={(event) => {
                    setFormAccount({
                      ...formAccount,
                      earnOrSpend: event.target.value,
                    })
                    setIsSpendChecked(false)
                  }}
                />
                <label htmlFor="entrada">Entrada</label>
                <input
                  type="radio"
                  id="saida"
                  name="tipo"
                  checked={isSpendChecked}
                  value="spend"
                  required
                  onChange={(event) => {
                    setFormAccount({
                      ...formAccount,
                      earnOrSpend: event.target.value,
                    })
                    setIsSpendChecked(true)
                  }}
                />
                <label htmlFor="saida">Saída</label>
              </div>
            </div>

            <button type="submit" onClick={handleAdd}>
              Adicionar
            </button>
          </form>
        ) : (
          <form>
            <div className="form-group">
              <label htmlFor="descricao">Descrição:</label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                required
                placeholder="aluguel"
                value={formAccount.name}
                onChange={(event) =>
                  setFormAccount({ ...formAccount, name: event.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="valor">Valor:</label>
              <input
                type="text"
                id="valor"
                name="valor"
                required
                placeholder="1200.00"
                value={formAccount.price}
                onChange={(event) =>
                  setFormAccount({
                    ...formAccount,
                    price: event.target.value,
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
                  checked={!isSpendChecked}
                  required
                  onChange={(event) => {
                    setFormAccount({
                      ...formAccount,
                      earnOrSpend: event.target.value,
                    })
                    setIsSpendChecked(false)
                  }}
                />
                <label htmlFor="entrada">Entrada</label>
                <input
                  type="radio"
                  id="saida"
                  name="tipo"
                  checked={isSpendChecked}
                  value="spend"
                  required
                  onChange={(event) => {
                    setFormAccount({
                      ...formAccount,
                      earnOrSpend: event.target.value,
                    })
                    setIsSpendChecked(true)
                  }}
                />
                <label htmlFor="saida">Saída</label>
              </div>
            </div>

            <button type="submit" onClick={handleEditForm}>
              Editar
            </button>
            <button type="button" onClick={handleCancelEdit}>
              <p>cancelar</p>
            </button>
          </form>
        )}

        <FinancialStatementTable>
          <table>
            <thead>
              <tr>
                <th style={{ width: '50%' }}>Descrição</th>
                <th style={{ width: '20%' }}>Valor</th>
                <th style={{ width: '15%' }}>Tipo</th>
                <th style={{ width: '15%' }}></th>
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
                    <button onClick={() => handleEdit(obj)}>
                      <Pencil className="Pencil" size={28} />
                    </button>
                    <button onClick={() => handleDelete(obj._id)}>
                      <Trash className="trash" size={28} />
                    </button>
                    {/* <button onClick={() => handleView(obj._id)}>
                      <MagnifyingGlass className="MagnifyingGlass" size={28} />
                    </button> */}
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
