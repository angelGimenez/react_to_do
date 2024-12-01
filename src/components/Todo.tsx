import { type Todo as TodoType } from '../utils/types'

interface Props extends TodoType {
  id: string
  title: string
  completed: boolean
  handleCompleted: (id: TodoType['id'], completed: TodoType['completed']) => void
  handleRemove: (id: TodoType['id']) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, handleCompleted, handleRemove }) => {
  return (
    <div className='view'>
      <input className='toggle' type='checkbox' checked={completed} onChange={(event) => {handleCompleted(id, event.target.checked)}} />
      <label>{title}</label>
      <button className='destroy' onClick={() => {handleRemove(id)}} />
    </div>
  )
}