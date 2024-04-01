import { ADD_BOARD } from "../constants/board.ts";

export const addTitle = (title: string) => ({
    type: ADD_BOARD,
    title,
});