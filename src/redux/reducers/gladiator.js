import { SET_GLADIATOR } from '../types'

export const setGladiator = (gladiator) => ({
  type: SET_GLADIATOR,
  payload: gladiator,
})

const initialState = {
  user: null,
}

const gladiator = (state = initialState, action) => {
  switch (action.type) {
    case SET_GLADIATOR:
      return { ...state, gladiator: action.payload }
    default:
      return state
  }
}

export default gladiator
