import React from "react";
import {useState} from "react";
import Backdrop from "./Backdrop.js"
import Modal from "./Modal.js"
function Todo(props)
{
  const[temp1, temp2]=useState(false);
  function deleteHandler()
  {
    temp2(true);

  }
  function closemodal()
  {
    temp2(false)
  }
  return (
  <div className="card">
    <h2>{props.text}</h2>
    <div className="actions">
     <button className="btn" onClick={deleteHandler}> Delete</button>
    </div>
    {temp1 ? <Modal onCancel={closemodal} onConfirm={closemodal} /> : null}
    {temp1 ? <Backdrop onCancel={closemodal}/> : null}
  </div>
  );

}
export default Todo;