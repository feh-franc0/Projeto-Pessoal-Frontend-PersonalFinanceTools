import Table from './Table'
import { ContainerTableStocks, ScrollTable } from './styles'

export function Products() {
  return (
    <ContainerTableStocks>
      <ScrollTable>
        <Table />
      </ScrollTable>
    </ContainerTableStocks>
  )
}
