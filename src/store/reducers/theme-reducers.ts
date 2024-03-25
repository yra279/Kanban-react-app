import { CHANGE_THEME } from "../constants/theme.ts";

export const theme = (state = 'Dark', action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            return action.theme;
        } default: {
            return state;
        }
    }
}