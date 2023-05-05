import React, { useEffect, useState } from 'react'

interface Coluna {
  coluna: string
}

interface Dados {
  Papel: string
  Cotação: string
  PsobreL: string
  PsobreVP: string
  PSR: string
  DivYield: string
  PsobreAtivo: string
  PsobreCapGiro: string
  PsobreEBIT: string
  PsobreAtivCircLiq: string
  EVsobreEBIT: string
  EVsobreEBITDA: string
  MrgEbit: string
  MrgLíq: string
  LiqCorr: string
  ROIC: string
  ROE: string
  Liq2meses: string
  PatrimLíq: string
  DívBrutsobrePatrim: string
  CrescRec5a: string
}

interface Tabela {
  coluna: Coluna[]
  dados: Dados[]
}

// const obj: Tabela = {
//   coluna: [
//     {
//       coluna: 'Papel',
//     },
//     {
//       coluna: 'Cotação',
//     },
//     {
//       coluna: 'P/L',
//     },
//     {
//       coluna: 'P/VP',
//     },
//     {
//       coluna: 'PSR',
//     },
//     {
//       coluna: 'Div.Yield',
//     },
//     {
//       coluna: 'P/Ativo',
//     },
//     {
//       coluna: 'P/Cap.Giro',
//     },
//     {
//       coluna: 'P/EBIT',
//     },
//     {
//       coluna: 'P/Ativ Circ.Liq',
//     },
//     {
//       coluna: 'EV/EBIT',
//     },
//     {
//       coluna: 'EV/EBITDA',
//     },
//     {
//       coluna: 'Mrg Ebit',
//     },
//     {
//       coluna: 'Mrg. Líq.',
//     },
//     {
//       coluna: 'Liq. Corr.',
//     },
//     {
//       coluna: 'ROIC',
//     },
//     {
//       coluna: 'ROE',
//     },
//     {
//       coluna: 'Liq.2meses',
//     },
//     {
//       coluna: 'Patrim. Líq',
//     },
//     {
//       coluna: 'Dív.Brut/ Patrim.',
//     },
//     {
//       coluna: 'Cresc. Rec.5a',
//     },
//   ],
//   dados: [
//     {
//       Papel: 'CFLU4',
//       Cotação: '1.000,00',
//       PsobreL: '0,00',
//       PsobreVP: '0,00',
//       PSR: '0,000',
//       DivYield: '0,00%',
//       PsobreAtivo: '0,000',
//       PsobreCapGiro: '0,00',
//       PsobreEBIT: '0,00',
//       PsobreAtivCircLiq: '0,00',
//       EVsobreEBIT: '0,00',
//       EVsobreEBITDA: '0,00',
//       MrgEbit: '8,88%',
//       MrgLíq: '10,72%',
//       LiqCorr: '1,10',
//       ROIC: '17,68%',
//       ROE: '32,15%',
//       Liq2meses: '0,00',
//       PatrimLíq: '60.351.000,00',
//       DívBrutsobrePatrim: '0,06',
//       CrescRec5a: '8,14%',
//     },
//     {
//       Papel: 'MNSA3',
//       Cotação: '0,42',
//       PsobreL: '0,00',
//       PsobreVP: '0,00',
//       PSR: '0,000',
//       DivYield: '0,00%',
//       PsobreAtivo: '0,000',
//       PsobreCapGiro: '0,00',
//       PsobreEBIT: '0,00',
//       PsobreAtivCircLiq: '0,00',
//       EVsobreEBIT: '0,00',
//       EVsobreEBITDA: '0,00',
//       MrgEbit: '-208,15%',
//       MrgLíq: '-362,66%',
//       LiqCorr: '3,63',
//       ROIC: '-13,50%',
//       ROE: '145,70%',
//       Liq2meses: '0,00',
//       PatrimLíq: '-9.105.000,00',
//       DívBrutsobrePatrim: '-6,52',
//       CrescRec5a: '-41,11%',
//     },
//   ],
// }

function rewriteTextToCorrectForm(text: String) {
  if (text === 'Papel') {
    return 'Papel'
  }
  if (text === 'Cotação') {
    return 'Cotação'
  }
  if (text === 'P/L') {
    return 'PsobreL'
  }
  if (text === 'P/VP') {
    return 'PsobreVP'
  }
  if (text === 'PSR') {
    return 'PSR'
  }
  if (text === 'Div.Yield') {
    return 'DivYield'
  }
  if (text === 'P/Ativo') {
    return 'PsobreAtivo'
  }
  if (text === 'P/Cap.Giro') {
    return 'PsobreCapGiro'
  }
  if (text === 'P/EBIT') {
    return 'PsobreEBIT'
  }
  if (text === 'P/Ativ Circ.Liq') {
    return 'PsobreAtivCircLiq'
  }
  if (text === 'EV/EBIT') {
    return 'EVsobreEBIT'
  }
  if (text === 'EV/EBITDA') {
    return 'EVsobreEBITDA'
  }
  if (text === 'Mrg Ebit') {
    return 'MrgEbit'
  }
  if (text === 'Mrg. Líq.') {
    return 'MrgLíq'
  }
  if (text === 'Liq. Corr.') {
    return 'LiqCorr'
  }
  if (text === 'ROIC') {
    return 'ROIC'
  }
  if (text === 'ROE') {
    return 'ROE'
  }
  if (text === 'Liq.2meses') {
    return 'Liq2meses'
  }
  if (text === 'Patrim. Líq') {
    return 'PatrimLíq'
  }
  if (text === 'Dív.Brut/ Patrim.') {
    return 'DívBrutsobrePatrim'
  }
  if (text === 'Cresc. Rec.5a') {
    return 'CrescRec5a'
  } else {
    throw new Error('Oops!')
  }
}

function Table() {
  const [stocks, setStocks] = useState<Tabela>()

  const token = localStorage.getItem('TOKEN_JWT')

  useEffect(() => {
    async function fetchStocks() {
      try {
        const response = await fetch('http://localhost:3000/finance/stocks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const data = await response.json()
        setStocks(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchStocks()
  }, [])

  if (stocks) {
    // console.log(stocks)
  }

  // if (stocks === undefined) {
  //   throw new Error('deu erro')
  // }

  return (
    <>
      {stocks ? (
        <table>
          <thead>
            <tr>
              {stocks ? (
                stocks.coluna.map((coluna, index) => (
                  <th key={index}>{coluna.coluna}</th>
                ))
              ) : (
                <></>
              )}
            </tr>
          </thead>
          <tbody>
            {stocks ? (
              stocks.dados.map((dado, index) => (
                <tr key={index}>
                  {stocks.coluna.map((coluna, index) => (
                    <td key={index}>
                      {dado[rewriteTextToCorrectForm(coluna.coluna)]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      ) : (
        <div className="containerLoader">
          <div className="loader"></div>
        </div>
      )}
    </>
  )
}

export default Table
