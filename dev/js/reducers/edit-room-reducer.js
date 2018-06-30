export default function(isRoomEditingMode=false, action) {
    switch(action.type) {
        case 'TOGGLE_ROOM_EDITING_MODE':
            return !isRoomEditingMode;
    }
    return isRoomEditingMode;
}
