import { useState } from "react";
import TodoList from "./components/TodoList";
import User from "./components/User";
import TodoInput from "./components/TodoInput";

function App() {
  const [todos, setTodos] = useState([]);

  // 새로운 할 일 추가
  const addTodo = (text) => {
    // 스프레드로 이전 todo 배열에서 업데이트
    setTodos([...todos, {
      id: Date.now(),
      text: text,
      completed: false
    }])
  }

  // 할 일 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 할 일 수정 함수
  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo)
    );
  };

  const toggleCheckbox = (id) => {
    setTodos(
      todos.map(todo => todo.id === id ?
        { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="min-h-screen min-w-[375px] flex flex-col items-center">
      <User />
      <TodoList todos={todos} toggleCheckbox={toggleCheckbox}
       deleteTodo={deleteTodo} editTodo={editTodo} />
      <TodoInput addTodo={addTodo} />
    </div>
  );
};

export default App;