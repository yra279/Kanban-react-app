import { ADD_TITLE } from "../constants/boardTitleList.ts";

export const addTitle = (title: string) => ({
    type: ADD_TITLE,
    title,
});