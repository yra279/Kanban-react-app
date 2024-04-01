import { DELETE_BOARD, UPDATE_BOARD } from "../constants/board.ts";

export const delete_board = (title) => ({
    type: DELETE_BOARD,
    title,
});

export const update_board = (nameBoard, newNameBoard) => ({
    type: UPDATE_BOARD,
    nameBoard,
    newNameBoard,
});