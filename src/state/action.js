import { ADD_PEOPLE } from './types';
import { EDIT_PEOPLE } from './types';

export const addPeople = person => ({ type: ADD_PEOPLE, payload: person })
export const editPeople = person => ({ type: EDIT_PEOPLE, payload: person })