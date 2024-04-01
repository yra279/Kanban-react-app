import { combineReducers } from "redux";
import { boardTitlelist } from "./boardTitleList-reducer.ts";
import { theme } from "./theme-reducers.ts";
import { titleTodos } from "./titleTodos-reducer.ts";
import { listTodos } from "./listTodos-reducer.ts";
import { board } from "./board-reducer.ts";
import { filterTitleTodos } from "./filterTitleTodos.ts";

export const rootRecucer = combineReducers({
    boardTitlelist,
    theme,
    titleTodos,
    listTodos,
    board,
    filterTitleTodos,
});