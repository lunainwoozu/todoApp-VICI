import { create } from 'zustand';

// 로컬 스토리지에서 상태를 불러오는 함수
const loadState = (key, initialState) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("로컬 스토리지 불러오기 에러:", err);
    return initialState;
  }
};

// 로컬 스토리지에 상태를 저장하는 함수
const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error("로컬 스토리지 저장 에러:", err);
  }
};

const useTodoStore = create((set) => ({
  // 초기 상태
  todos: loadState('todos', []),

  // 할 일 추가
  addTodo: (text) => set((state) => {
    const newTodos = [
      ...state.todos,
      {
        id: Date.now(),
        text: text,
        completed: false
      }
    ];
    saveState('todos', newTodos);
    return { todos: newTodos };
  }),

  // 할 일 삭제
  deleteTodo: (id) => set((state) => {
    const newTodos = state.todos.filter(todo => todo.id !== id);
    saveState('todos', newTodos);
    return { todos: newTodos };
  }),

  // 체크박스 토글
  toggleCheckbox: (id) => set((state) => {
    const newTodos = state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveState('todos', newTodos);
    return { todos: newTodos };
  }),

  // 할 일 수정
  editTodo: (id, newText) => set((state) => {
    const newTodos = state.todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    saveState('todos', newTodos);
    return { todos: newTodos };
  }),
}));

export default useTodoStore;