import { ADD_PEOPLE } from './types';
import { EDIT_PEOPLE } from './types';

const initialState = {
  people: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PEOPLE:
      return { people: [...state.people, action.payload] }
    case EDIT_PEOPLE:
      return Object.assign({}, state, {
        people: [
          ...state.people,
          {
            name: action.payload.name,
            town: action.payload.town,
            favorite: action.payload.favorite,
            extra: action.payload.extra
          }
        ]
      })

    default:
      return state;
  }
}