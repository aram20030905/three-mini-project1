import { OPEN_MODAL, CLOSE_MODAL, BG_CHANGE } from "./action"
const reducer = (state, action) => {
    if (action.type == OPEN_MODAL) {
        return { ...state, isOpen: true }
    }
    if (action.type == CLOSE_MODAL) {
        return { ...state, isOpen: false }
    }

    if(action.type = BG_CHANGE){
        return {...state, background:action.payload}
    }
    return { ...state }
}


export  default reducer
