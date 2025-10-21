import { SET_CHARACTER, REMOVE_CHARACTER } from "../types";

export const setCharacter = (character) => ({
  type: SET_CHARACTER,
  payload: character,
});

export const removeCharacter = () => ({
  type: REMOVE_CHARACTER,
});

const initialState = {
  character: null,
};

const character = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER:
      return { ...state, character: action.payload };
    case REMOVE_CHARACTER:
      return { ...state, character: null };
    default:
      return state;
  }
};

export default character;
