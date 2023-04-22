import { StockFilterFormContainer } from './styles'

export function StockFilterForm() {
  return (
    <StockFilterFormContainer>
      <div className="container">
        <div className="text">
          <p>Texto que ocupa 100% do width</p>
        </div>
        <div className="checkboxes">
          <div className="checkbox-container">
            <label>
              <input type="checkbox" name="checkbox1" value="Papel" />
              Papel
            </label>
            <label>
              <input type="checkbox" name="checkbox2" value="Cotação" /> Cotação
            </label>
            <label>
              <input type="checkbox" name="checkbox3" value="P/L" />
              P/L
            </label>
            <label>
              <input type="checkbox" name="checkbox4" value="P/VP" /> P/VP
            </label>
            <label>
              <input type="checkbox" name="checkbox5" value="PSR" /> PSR
            </label>
            <label>
              <input type="checkbox" name="checkbox6" value="Div.Yield" />
              Div.Yield
            </label>
            <label>
              <input type="checkbox" name="checkbox7" value="P/Ativo" /> P/Ativo
            </label>
          </div>
          <div className="checkbox-container">
            <label>
              <input type="checkbox" name="checkbox8" value="P/Cap.Giro" />
              P/Cap.Giro
            </label>
            <label>
              <input type="checkbox" name="checkbox9" value="P/EBIT" /> P/EBIT
            </label>
            <label>
              <input
                type="checkbox"
                name="checkbox10"
                value="P/Ativ Circ.Liq"
              />
              P/Ativ Circ.Liq
            </label>
            <label>
              <input type="checkbox" name="checkbox11" value="EV/EBIT" />
              EV/EBIT
            </label>
            <label>
              <input type="checkbox" name="checkbox12" value="EV/EBITDA" />{' '}
              EV/EBITDA
            </label>
            <label>
              <input type="checkbox" name="checkbox13" value="Mrg Ebit" />
              Mrg Ebit
            </label>
            <label>
              <input type="checkbox" name="checkbox14" value="Mrg. Líq." /> Mrg.
              Líq.
            </label>
          </div>
          <div className="checkbox-container">
            <label>
              <input type="checkbox" name="checkbox15" value="Liq. Corr." />
              Liq. Corr.
            </label>
            <label>
              <input type="checkbox" name="checkbox16" value="ROIC" />
              ROIC
            </label>
            <label>
              <input type="checkbox" name="checkbox17" value="ROE" /> ROE
            </label>
            <label>
              <input type="checkbox" name="checkbox18" value="Liq.2meses" />
              Liq.2meses
            </label>
            <label>
              <input type="checkbox" name="checkbox19" value="Patrim. Líq" />{' '}
              Patrim. Líq
            </label>
            <label>
              <input
                type="checkbox"
                name="checkbox20"
                value="Dív.Brut/ Patrim."
              />
              Dív.Brut/ Patrim.
            </label>
            <label>
              <input type="checkbox" name="checkbox21" value="Cresc. Rec.5a" />
              Cresc. Rec.5a
            </label>
          </div>
        </div>
      </div>
    </StockFilterFormContainer>
  )
}
