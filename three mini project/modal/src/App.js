
import{useModal} from "./context"
import Modal from "./Modal";

function App() {

  const {isOpen, openModal, closeModal}= useModal()

  return (
    <div className="App">
     {isOpen && <div className="hider" onClick={closeModal}></div>}
      {isOpen && <Modal/>}
    
     <button className="main-btn" onClick={openModal}>
      Open Modal
     </button>
    </div>
  );
}

export default App;
