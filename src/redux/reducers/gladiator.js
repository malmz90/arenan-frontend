import { SET_GLADIATOR, REMOVE_GLADIATOR } from '../types'

export const setGladiator = (gladiator) => ({
  type: SET_GLADIATOR,
  payload: gladiator,
})

export const removeGladiator = () => ({
  type: REMOVE_GLADIATOR,
})

const initialState = {
  user: null,
}

const gladiator = (state = initialState, action) => {
  switch (action.type) {
    case SET_GLADIATOR:
      return { ...state, gladiator: action.payload }
    case REMOVE_GLADIATOR:
      return { ...state, gladiator: null }
    default:
      return state
  }
}

export default gladiator
