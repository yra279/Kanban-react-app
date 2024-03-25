import { combineReducers } from "redux";
import { boardTitlelist } from "./boardTitleList-reducer.ts";
import { theme } from "./theme-reducers.ts";
import { titleTodos } from "./titleTodos-reducer.ts";
import { listTodos } from "./listTodos-reducer.ts";

export const rootRecucer = combineReducers({
    boardTitlelist,
    theme,
    titleTodos,
    listTodos,
});