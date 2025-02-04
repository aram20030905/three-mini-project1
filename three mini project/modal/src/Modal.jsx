import React from 'react'
import{useModal} from "./context"

function Modal(){
    const {changeBg, closeModal} =useModal()
    const myColors=['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5']
    const randomColor=myColors[Math.floor(Math.random()* myColors.length)]
    return(
        <div className='Modal'>
            <div className="modal-inner">
                <h1>Use Reducer Modal</h1>
                <p>Do you want to do the thing? Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus eveniet ut ipsa quidem quam consequuntur quisquam deserunt, a sapiente 
                    recusandae maiores magni aliquid, maxime ab iusto omnis blanditiis quaerat perferendis?
                    </p>
                    <div className="buttons">
                        <button onClick={closeModal}>Cancel</button>
                        <button onClick={()=>{
                            changeBg(randomColor)
                            closeModal()
                        }}>Ok</button>
                    </div>
            </div>

        </div>
    )
}
export default Modal