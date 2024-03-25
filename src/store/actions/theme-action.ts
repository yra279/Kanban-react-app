import { CHANGE_THEME } from "../constants/theme.ts"

export const themeDark = () => ({
    type: CHANGE_THEME,
    theme: 'Dark',
});

export const themeLight = () => ({
    type: CHANGE_THEME,
    theme: 'Light',
});