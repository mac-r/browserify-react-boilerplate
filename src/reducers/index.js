import { combineReducers } from 'redux'
// import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
// const { SHOW_ALL } = VisibilityFilters

const initialState = {
  hello: ':)'
}

function visibilityFilter(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
