import { type Todo as TodoType, type ListOfTodos } from '../utils/types'
import { Todo } from './Todo.tsx'

interface Props {
  todos: ListOfTodos
  handleCompleted: (id: TodoType['id'], completed: TodoType['completed']) => void
  handleRemove: (id: TodoType['id']) => void
}

export const Todos: React.FC<Props> = ({ todos, handleCompleted, handleRemove }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo id={todo.id} title={todo.title} completed={todo.completed} handleCompleted={handleCompleted} handleRemove={handleRemove} />
        </li>
      ))}
    </ul>
  )
}