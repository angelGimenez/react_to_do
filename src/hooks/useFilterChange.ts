import { TODO_FILTERS } from '../utils/consts.ts'
import { type ListOfTodos, type FilterValue } from '../utils/types'
import { useState } from 'react'

export function useFilterChange (todos: ListOfTodos) {

  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    if (filterSelected === TODO_FILTERS.ALL) return todo
  })

  function handleFilterChange (filterSelected: FilterValue) {
    setFilterSelected(filterSelected)
  }

  return { filterSelected, filteredTodos, handleFilterChange }

}