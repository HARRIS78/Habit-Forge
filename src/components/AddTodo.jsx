import { useState } from "react";
import styles from "./AddTodo.module.css"
import { MdAddToPhotos } from "react-icons/md";
const AddTodo=({onAddClick})=>{
  let [todoName,setTodoName]=useState("");
  let [todoDate,setTododate]=useState("");

  const handleTodoName=(event)=>{
    setTodoName(event.target.value);

  }
  const handleTodoDate=(event)=>{
    setTododate(event.target.value);
  }
  const handleAddButton=()=>{
    onAddClick(todoName,todoDate);
    setTodoName("");
    setTododate("");
  }
  return(
    <div className={styles.container}>
      <input className={styles.inputname} type="text" placeholder="Enter Your Challenge" value={todoName} onChange={handleTodoName} title="Enter Todo"></input>
      <input className={styles.inputname} type="date" placeholder="00-00-00" value={todoDate} onChange={handleTodoDate} title="Set Date"></input>
      <button type="button" className="btn btn-outline-light btn-lg" onClick={handleAddButton} title="Add Task">   <MdAddToPhotos />   
</button>
    </div>
  );
}
export default AddTodo;