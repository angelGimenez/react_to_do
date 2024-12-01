import { type Todo } from '../utils/types'
import { useState } from 'react'

interface Props {
  handleAddTodo: (title: Todo['title']) => void
}

export const CreateTodo: React.FC<Props> = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState('')

  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    handleAddTodo(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className='new-todo' value={inputValue} onChange={(event) => {setInputValue(event.target.value)}} placeholder='¿Qué tarea quieres añadir?' autoFocus />
    </form>
  )
}