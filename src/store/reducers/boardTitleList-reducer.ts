import { ADD_TITLE } from "../constants/boardTitleList.ts";


export const boardTitlelist = (state = [], action) => {
    switch (action.type) {
        case ADD_TITLE: {
            return [action.title, ...state];
        } default: {
            return state;
        }
    }
}