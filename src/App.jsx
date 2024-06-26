import { useState } from 'react';
import './App.css'
import TodoHeading from './components/TodoHeading'
import WelcomeMessage from './components/WelcomeMessage';
import AddTodo from './components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayTodo from './components/DisplayTodo';
// import todoBackground from "./assets/images/todoBackground";
function App() {
  const defaultTodo=[{name : "GO TO COLLEFE" , dueDate :"25/11/2000"}, {name : "Buy Ghee" , dueDate: "29/10/23"}];
  let [todoItems,setTodoItems]=useState([]);
  const onAddClick = (todoName, todoDate) => {
    // Check if both todoName and todoDate are not blank
    if (todoName.trim() !== "" && todoDate.trim() !== "") {       //trim() is JS removes the whitespaces // so if just space is used the function wont execute
      const newTodoItem = { name: todoName, dueDate: todoDate };
      const newItems = [...todoItems, newTodoItem];
      setTodoItems(newItems);
    }
  };
  const onDeleteClick=(todoName,todoDate)=>{
    const itemsLeft= todoItems.filter((item)=>!(item.name === todoName && item.dueDate === todoDate));
    setTodoItems(itemsLeft);
  }
  return(
    <div className='ccontainer'>
      <TodoHeading />
      <AddTodo onAddClick={onAddClick}/>
      <WelcomeMessage todoItems={todoItems}> </WelcomeMessage>
      <DisplayTodo todoItems={todoItems} onDeleteClick={onDeleteClick} />
    </div>
  );
};

export default App
