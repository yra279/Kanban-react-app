import { ADD_BOARD, DELETE_BOARD, UPDATE_BOARD } from "../constants/board.ts";
import { ADD_TITLE } from "../constants/todos.ts";

export const board = (state = [], action) => {
    switch (action.type) {
        case ADD_BOARD: {
            return [
                {
                    title: action.title,
                    listIdTitles: [],
                }, ...state
            ];
        } case DELETE_BOARD: {
            return state.filter(({ title }) => title !== action.title)
        } case ADD_TITLE: {
            if (typeof action.boardName === 'string') {
                state[state.map(({ title }) => title).indexOf(action?.boardName)]?.listIdTitles.push(action.id);
            }
            return state;
        } case UPDATE_BOARD: {
            return state.map(({ title, listIdTitles }, id) => {
                if (title === action.nameBoard) return { title: action.newNameBoard, listIdTitles };
                return {
                    title,
                    listIdTitles
                };
            });
        } default: {
            return state;
        }
    }
}