import { mockTodos } from '../mocks/todos.ts'
import { ACTIONS } from '../utils/consts.ts'
import { type ListOfTodos, type Action } from '../utils/types'

export const initialState = mockTodos
export const reducer = (state: ListOfTodos, action: Action) => {
  const { type, payload } = action

  switch(type) {
    case ACTIONS.ADD_TODO: {
      const newTodo = {
        id: crypto.randomUUID(),
        title: payload.title,
        completed: false
      }
  
      const newTodos = [...state, newTodo]
      return newTodos
    }

    case ACTIONS.COMPLETED: {
      const newTodos = state.map(todo => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            completed: payload.completed
          }
        }
  
        return todo
      })
  
      return newTodos
    }

    case ACTIONS.REMOVE: {
      const newTodos = state.filter(todo => todo.id !== payload.id)
      return newTodos
    }

    case ACTIONS.ERASE_COMPLETED: {
      const newTodos = state.filter(todo => !todo.completed)
      return newTodos
    }
  }

  return state
}