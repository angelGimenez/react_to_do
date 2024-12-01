import { TODO_FILTERS } from './consts.ts'

//Hay que utilizar 'interface' para objetos y 'type' para el resto

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export type Action =
| { type: 'ADD_TODO', payload: {title: Todo['title']} }
| { type: 'COMPLETED', payload: {id: Todo['id'], completed: Todo['completed']} }
| { type: 'REMOVE', payload: {id: Todo['id']} }
| { type: 'ERASE_COMPLETED', payload?: undefined }