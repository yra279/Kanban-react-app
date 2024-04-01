import uuid from 'react-uuid';
import { ACTIVE_TODO, ADD_TITLE, ADD_TODO, DELETE_TITLE, DELETE_TODO, UPDATE_ID_TODO, UPDATE_TITLE } from '../constants/todos.ts';

export const add_title = (title: string, boardName: string) => ({
    type: ADD_TITLE,
    title,
    id: uuid(),
    boardName,
});

export const delete_title = (id: string) => ({
    type: DELETE_TITLE,
    id,
});

export const update_title = (id: string, newTitle: string) => ({
    type: UPDATE_TITLE,
    id,
    newTitle,
});

export const add_todo = (title: string, text: string, id: string, listTasks: any) => ({
    type: ADD_TODO,
    title,
    text,
    id,
    listTasks,
});

export const active_todo = (idTitle: string, idTask: string) => ({
    type: ACTIVE_TODO,
    idTitle,
    idTask,
})

export const update_id_todo = (id: string, title: string, newId: string) => ({
    type: UPDATE_ID_TODO,
    id,
    title,
    newId
})

export const delete_todo = (id: string, title: string) => ({
    type: DELETE_TODO,
    id,
    title
})