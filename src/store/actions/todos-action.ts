import { ADD_TITLE, ADD_TODO, DELETE_TITLE } from '../constants/todos.ts';

export const add_title = (title: string) => ({
    type: ADD_TITLE,
    title,
});

export const delete_title = (title: string) => ({
    type: DELETE_TITLE,
    title,
});

export const add_todo = (title: string, text: string, id: string, listTasks: any) => ({
    type: ADD_TODO,
    title,
    text,
    id,
    listTasks,
});