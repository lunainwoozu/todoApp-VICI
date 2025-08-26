import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import TodoInput from "./components/TodoInput";

function App() {
  const [todos, setTodos] = useState(() => {
    // 이전 저장된 todo 불러오거나 빈 배열을 기본으로 설정
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : []
  });

  // todo 내용이 달라질 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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

  // 유저 정보 상태 관리
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    // 기본 유저 정보 객체
    const defaultUser = {
      nickname: "닉네임",
      message: "유저메시지",
      photo: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
    };
    return savedUser ? JSON.parse(savedUser) : defaultUser;
  });

  // 유저 내용 저장
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  },[user])

  const updateUser = (updateUser) => {
    setUser(updateUser)
  }
  

  return (
    <div className="relative min-h-screen min-w-[375px] flex flex-col items-center">
      <Profile user={user} updateUser={updateUser} />
      <TodoList todos={todos} toggleCheckbox={toggleCheckbox}
       deleteTodo={deleteTodo} editTodo={editTodo} />
      <TodoInput addTodo={addTodo} />
    </div>
  );
};

export default App;