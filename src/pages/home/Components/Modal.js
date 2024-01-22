import React from "react";
import{FaTimes} from "react-icons/fa"

const Modal = ({modal, handleClick}) => {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="cross">
        <FaTimes style={{color:"white"}} size={25} onClick={handleClick}/>
        </div>
        <h1>
          Began modeling at age 10, modeled for Calvin Klein, Dolce & Gabanna,
          Gucci, Versace and Guess. 
        </h1>
      </div>
    </div>
  );
};

export default Modal;
