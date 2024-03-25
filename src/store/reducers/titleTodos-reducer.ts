import { ADD_TITLE, DELETE_TITLE } from '../constants/todos.ts';
import uuid from 'react-uuid';


export const titleTodos = (state = [], action) => {
    switch (action.type) {
        case ADD_TITLE: {
            return [
                ...state,
                {
                    title: [action.title],
                    id: uuid(),
                },
            ]
        } case DELETE_TITLE: {
            return state.filter(({ title }) => title !== action.title);
        }
        default: {
            return state;
        }
    }
}