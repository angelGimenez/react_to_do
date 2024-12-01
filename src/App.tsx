import 'todomvc-app-css/index.css'
import './styles.css'
import { Header } from './components/Header.tsx'
import { Todos } from './components/Todos.tsx'
import { Footer } from './components/Footer.tsx'
import { useReducerTodo } from './hooks/useReducerTodo.ts'
import { useFilterChange } from './hooks/useFilterChange.ts'

export function App() {
  
  const { todos, handleAddTodo, handleCompleted, handleRemove, handleEraseCompleted } = useReducerTodo()
  const { filterSelected, filteredTodos, handleFilterChange } = useFilterChange(todos)
  
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  return (
    <div className='todoapp'>
      <Header handleAddTodo={handleAddTodo}/>
      <Todos todos={filteredTodos} handleCompleted={handleCompleted} handleRemove={handleRemove} />
      <Footer activeCount={activeCount} completedCount={completedCount} filterSelected={filterSelected} handleFilterChange={handleFilterChange} handleEraseCompleted={handleEraseCompleted} />
    </div>
  )
}