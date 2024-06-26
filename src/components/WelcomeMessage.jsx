import styles from "./WelcomeMessage.module.css"
const WelcomeMessage=({todoItems})=>
{
  return <>{todoItems.length === 0 && <h4 className={styles.heading}>
  You have not any challenge pending, you might want to add <br />
   Or <br />
   you have completed all your challenges so congratulations !</h4>}</>;
};
export default WelcomeMessage;