import TodoItem from "./TodoItem";

const TodoList = ({todos, toggleCheckbox, deleteTodo, editTodo}) => {

  return (
    <div className="bg-white min-h-[60vh] min-w-full p-4 rounded-t-xl">
      <ul>
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
    </div>
  );
}

export default TodoList;