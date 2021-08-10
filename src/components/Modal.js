import React from "react";
import {useState} from "react"; 
function Modal(props)
{
  function cancelhandler()
  {
    props.onCancel();
  }
  function confirmhandler()
  {
    props.onConfirm();
  }
  return (
  <div className="modal">
  <p>Are u sure?</p>
  <button className="btn btn--alt" onClick={cancelhandler}>Cancel</button>
  <button className="btn" onClick={confirmhandler}>Conform</button>
  </div>
    );

}
export default Modal;