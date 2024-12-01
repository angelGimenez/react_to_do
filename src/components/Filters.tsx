import { FILTERS_BUTTONS } from '../utils/consts.ts'
import { type FilterValue } from '../utils/types'

interface Props {
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, handleFilterChange }) => {
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''

          return(
            <li key={key}>
              <a className={className} href={href} onClick={(event) => {
                event.preventDefault()
                handleFilterChange(key as FilterValue)
              }}>
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}