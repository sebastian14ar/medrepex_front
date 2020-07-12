import React from "react";
import ReactDOM from "react-dom";

// Styles
import "./styles/Alert.css";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div className="Alert">
        <div className="Alert__container">
          <button onClick={props.onClose} className="Alert__close-button">
            X
          </button>

          <span>Item was added to the shopping cart</span>
        </div>
      </div>,
      document.getElementById("alert")
    );
  }
}

export default Modal;
