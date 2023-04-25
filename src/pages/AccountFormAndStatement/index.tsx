import {
  ArrowCircleDown,
  ArrowCircleUp,
  MagnifyingGlass,
  Pencil,
  Trash,
} from 'phosphor-react'
import { FinancialStatementTable, StyledZero } from './styles'
import { Summary } from '../../components/Summary'

export function AccountFormAndStatement() {
  return (
    <>
      <Summary />
      <StyledZero>
        <form>
          <div className="form-group">
            <label htmlFor="descricao">Descrição:</label>
            <input type="text" id="descricao" name="descricao" required />
          </div>

          <div className="form-group">
            <label htmlFor="valor">Valor:</label>
            <input type="number" id="valor" name="valor" required />
          </div>

          <div className="form-group">
            <div className="gap">
              <input
                type="radio"
                id="entrada"
                name="tipo"
                value="entrada"
                required
              />
              <label htmlFor="entrada">Entrada</label>
              <input
                type="radio"
                id="saida"
                name="tipo"
                value="saida"
                required
                checked
              />
              <label htmlFor="saida">Saída</label>
            </div>
          </div>

          <button type="submit">Adicionar</button>
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
              <tr>
                <td>Item 1</td>
                <td>R$ 50,00</td>
                <td>
                  <ArrowCircleUp className="earn" size={32} />
                </td>
                <td>
                  <button>
                    <Trash className="trash" size={28} />
                    <MagnifyingGlass className="MagnifyingGlass" size={28} />
                    <Pencil className="Pencil" size={28} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Item 2</td>
                <td>R$ 30,00</td>
                <td>
                  <ArrowCircleDown className="spend" size={32} />
                </td>
                <td>
                  <button>
                    <Trash className="trash" size={28} />
                    <MagnifyingGlass className="MagnifyingGlass" size={28} />
                    <Pencil className="Pencil" size={28} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td>R$ 20,00</td>
                <td>
                  <ArrowCircleUp className="earn" size={32} />
                </td>
                <td>
                  <button>
                    <Trash className="trash" size={28} />
                    <MagnifyingGlass className="MagnifyingGlass" size={28} />
                    <Pencil className="Pencil" size={28} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td>R$ 20,00</td>
                <td>
                  <ArrowCircleUp className="earn" size={32} />
                </td>
                <td>
                  <button>
                    <Trash className="trash" size={28} />
                    <MagnifyingGlass className="MagnifyingGlass" size={28} />
                    <Pencil className="Pencil" size={28} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td>R$ 20,00</td>
                <td>
                  <ArrowCircleUp className="earn" size={32} />
                </td>
                <td>
                  <button>
                    <Trash className="trash" size={28} />
                    <MagnifyingGlass className="MagnifyingGlass" size={28} />
                    <Pencil className="Pencil" size={28} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td>R$ 20,00</td>
                <td>
                  <ArrowCircleUp className="earn" size={32} />
                </td>
                <td>
                  <button>
                    <Trash className="trash" size={28} />
                    <MagnifyingGlass className="MagnifyingGlass" size={28} />
                    <Pencil className="Pencil" size={28} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td>R$ 20,00</td>
                <td>
                  <ArrowCircleUp className="earn" size={32} />
                </td>
                <td>
                  <button>
                    <Trash className="trash" size={28} />
                    <MagnifyingGlass className="MagnifyingGlass" size={28} />
                    <Pencil className="Pencil" size={28} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td>R$ 20,00</td>
                <td>
                  <ArrowCircleUp className="earn" size={32} />
                </td>
                <td>
                  <button>
                    <Trash className="trash" size={28} />
                    <MagnifyingGlass className="MagnifyingGlass" size={28} />
                    <Pencil className="Pencil" size={28} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </FinancialStatementTable>
      </StyledZero>
    </>
  )
}
