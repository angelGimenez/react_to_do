import { type Todo } from '../utils/types'
import { CreateTodo } from './CreateTodo.tsx'

interface Props {
  handleAddTodo: (title: Todo['title']) => void
}

export const Header: React.FC<Props> = ({ handleAddTodo }) => {
  return (
    <header className='header'>
      <h1>Lista de tareas</h1>
      <CreateTodo handleAddTodo={handleAddTodo}/>
    </header>
  )
}