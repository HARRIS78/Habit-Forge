import styles from "./DisplayOne.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
const DisplayOne=({todoName,todoDate,onDeleteClick})=>
{
  return(
  <div className={styles.container} title='task due by given date'>
     <div className={styles.todoname}>{todoName}</div>
     <div className={styles.tododate}>{todoDate}</div>
     <button type="button" className="btn btn-danger btn-lg " title="Delete Task"
      onClick={()=>onDeleteClick(todoName,todoDate)}> <RiDeleteBin5Fill /> </button>
  </div>);
}
export default DisplayOne;