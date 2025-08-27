import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

const TodoList = ({todos, toggleCheckbox, deleteTodo, editTodo, addTodo}) => {

  return (
    <div className="relative">
      <ul className="overflow-y-auto p-4">
        {todos.length > 0 ? (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo}
             toggleCheckbox={toggleCheckbox}
             deleteTodo={deleteTodo} editTodo={editTodo} />
          ))
        ) : (
          <p className="text-center">오늘의 할 일을 등록해 주세요!</p>
        )}
      </ul>
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default TodoList;