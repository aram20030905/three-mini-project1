import React, { useContext,  useEffect,  useReducer } from "react"
import { OPEN_MODAL, CLOSE_MODAL, BG_CHANGE } from "./action"
import reducer from "./reducer"

const ModalContext = React.createContext();






export const ModalProvider = ({ children }) => {

    const initialState = {
        isOpen: false,
        background : ''
    }
    const [state, dispatch] = useReducer(reducer, initialState)


    const openModal = () => {
        dispatch({ type: OPEN_MODAL })
    }




    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL })
    }
    const changeBg = (color)=>{
        dispatch({type:BG_CHANGE,
        payload:color})
    }


    useEffect(()=>{
document.body.style.backgroundColor =state.background
    },[state.background])

    return (
        <ModalContext.Provider value={{...state,closeModal,openModal, changeBg}}>

            {
                children
            }
        </ModalContext.Provider>
    )
}


export const useModal = () => {
    return useContext(ModalContext)
}