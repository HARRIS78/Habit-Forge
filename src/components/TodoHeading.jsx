import styles from "./TodoHeading.module.css";
const TodoHeading=()=>
{
 return (
    //  <h2 className={styles.heading}>YOUR TODO LIST</h2>
<div className={styles.challenge}>
    
    <label >Choose Your Level :- </label>

<select className={styles.options}>
  <option className={styles.option1} >Level 1: 7 Days Challenge</option>
  <option className={styles.option2}>Level 2: 15 Days Challenge</option>
  <option className={styles.option3}>Level 3: 30 Days Challenge</option>
  <option className={styles.option4}>Level 4: 50 Days Challenge</option>
  <option className={styles.option5}>Level 5: 75 Days Challenge</option>
  <option className={styles.option6}>Level 6: 100 Days Challenge</option>
</select>
</div>
    );
}
export default TodoHeading;