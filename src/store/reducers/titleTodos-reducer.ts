import { ADD_TITLE, DELETE_TITLE, UPDATE_TITLE } from '../constants/todos.ts';


export const titleTodos = (state = [], action) => {
    switch (action.type) {
        case ADD_TITLE: {
            return [
                ...state,
                {
                    title: [action.title],
                    id: action.id,
                },
            ]
        } case DELETE_TITLE: {
            return state.filter(({ id }) => id !== action.id);
        } case UPDATE_TITLE: {
            return state.map(({ id, title }) => {
                if (id === action.id) return {
                    title: action.newTitle,
                    id: id,
                }
                
                return {
                    title,
                    id,
                };
            });
        } default: {
            return state;
        }
    }
}