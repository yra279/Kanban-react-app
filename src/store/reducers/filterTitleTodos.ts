export const filterTitleTodos = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_FILTER_TITLE_TODOS": {
            return action.state;
        } default: {
            return state
        }
    }
}