export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'Todas',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Activas',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completadas',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  },
} as const

export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  COMPLETED: 'COMPLETED',
  REMOVE: 'REMOVE',
  ERASE_COMPLETED: 'ERASE_COMPLETED'
} as const