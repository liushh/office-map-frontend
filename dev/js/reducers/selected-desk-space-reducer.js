export default function(state=null, action) {
    switch(action.type) {
        case 'SELECT_DESK_SPACE':
            return action.payload;
            break;
    }
    switch(action.type) {
        case 'UNSELECT_DESK_SPACE':
            return null;
            break;
    }
    return state;
}
