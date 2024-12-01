import { type FilterValue } from '../utils/types'
import { Filters } from './Filters.tsx'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  handleEraseCompleted: () => void
}

export const Footer: React.FC<Props> = ({ activeCount, completedCount, filterSelected, handleFilterChange, handleEraseCompleted }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> {activeCount === 1 ? 'tarea pendiente' : "tareas pendientes"}
      </span>

      <Filters filterSelected={filterSelected} handleFilterChange={handleFilterChange} />

      {completedCount > 0 && <button className='clear-completed' onClick={handleEraseCompleted}>Borrar {completedCount === 1 ? 'completada' : "completadas"}</button>}
    </footer>
  )
}