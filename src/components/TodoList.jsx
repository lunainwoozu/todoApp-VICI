import TodoItem from "./TodoItem";
import useTodoStore from "../store/todoStore";

const TodoList = () => {
  const todos = useTodoStore(state => state.todos); // todos 상태만 가져옴

  return (
    <div className="pb-[72px]">
      <ul className="flex flex-col gap-2 p-2 max-h-[calc(100vh-379px)] overflow-y-auto">
        {todos.length > 0 ? (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <p className="text-center">오늘의 할 일을 등록해 주세요!</p>
        )}
      </ul>
    </div>
  );
}

export default TodoList;