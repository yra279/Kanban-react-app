import { createStore } from "redux";
import { rootRecucer } from './reducers/index.ts';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: any;
    }
}

export const configStore = () => createStore(
    rootRecucer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);