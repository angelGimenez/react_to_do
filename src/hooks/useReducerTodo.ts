import { ACTIONS } from '../utils/consts.ts'
import { type Todo } from '../utils/types'
import { initialState, reducer } from '../reducers/reducerTodo.ts'
import { useReducer } from 'react'

export function useReducerTodo () {
  const [todos, dispatch] = useReducer(reducer, initialState)

  function handleAddTodo (title: Todo['title']) {
    dispatch({type: ACTIONS.ADD_TODO, payload: {title}})
  }

  function handleCompleted (id: Todo['id'], completed: Todo['completed']) {
    dispatch({type: ACTIONS.COMPLETED, payload: {id, completed}})
  }

  function handleRemove (id: Todo['id']) {
    dispatch({type: ACTIONS.REMOVE, payload: {id}})
  }

  function handleEraseCompleted () {
    dispatch({type: ACTIONS.ERASE_COMPLETED, payload: undefined})
  }
  
  return { todos, handleAddTodo, handleCompleted, handleRemove, handleEraseCompleted }
}