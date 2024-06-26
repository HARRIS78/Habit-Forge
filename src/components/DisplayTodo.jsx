import DisplayOne from "./DisplayOne";
const DisplayTodo=({todoItems,onDeleteClick})=>{
  return (
    <div className="items-container">
     { todoItems.map((item,index) => (
        <DisplayOne
        key={index}
        todoName={item.name}
        todoDate={item.dueDate}
        onDeleteClick={onDeleteClick}
        />
      ))
      };
    </div>
  );
}
export default DisplayTodo;
