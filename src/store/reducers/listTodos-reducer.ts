import { ADD_TODO, DELETE_TODO, ACTIVE_TODO, UPDATE_ID_TODO } from "../constants/todos.ts";


export const listTodos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    title: action.title,
                    text: action.text,
                    id: action.id,
                    listTasks: action.listTasks,
                },
            ]
        } case ACTIVE_TODO: {
            return state.map(elem => {
                if (elem.id == action.idTitle) {
                    console.log(elem);
                    elem.listTasks[action.idTask].active = !elem.listTasks[action.idTask].active; 
                    return elem;
                }
                return elem;
            }
            );
        } case UPDATE_ID_TODO: {
            return state.map(elem => {
                if (elem.id === action.id && elem.title === action.title) {
                    return {
                        title: elem.title,
                        text: elem.text,
                        id: action.newId,
                        listTasks: elem.listTasks,
                    }
                }

                return elem;
            });
        } case DELETE_TODO: {
            return state.filter(({ id, title }) => id !== action.id && title !== action.title);
        }
        default: {
            return state;
        }
    }
}