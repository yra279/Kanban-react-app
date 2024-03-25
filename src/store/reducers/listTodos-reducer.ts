import { ADD_TODO, DELETE_TODO } from "../constants/todos.ts";


export const listTodos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    title: [action.title],
                    text: [action.text],
                    id: [action.id],
                    listTasks: action.listTasks,
                },
            ]
        } case DELETE_TODO: {
            return state.filter(({ id, title }) => id !== action.id && title !== action.title);
        }
        default: {
            return state;
        }
    }
}