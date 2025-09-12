import { useState } from "react";
import useTodoStore from "../store/todoStore";

const TodoInput = () => {
  const [text, setText] = useState('');
  const {addTodo} = useTodoStore();

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text); // 전달받은 함수 호출
      setText(''); // 초기화
    }
  }

  return (
    <div className="absolute w-[360px] bottom-0 bg-white p-4 rounded-t-xl shadow-xl">
      <form onSubmit={handleSubmit} className="todo-input flex gap-2">
        <label className="input">
          <input id="todo" type="text" placeholder="오늘의 할 일은?"
           onChange={handleChange} value={text} required />
        </label>
        <button type="submit"
         className="btn bg-linear-to-r from-pink-200 to-blue-200">
          등록
        </button>
      </form>
    </div>
  );
};

export default TodoInput;