import { useState } from "react";

const TodoItem = ({todo, toggleCheckbox, deleteTodo, editTodo}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditing = () => {
    setIsEditing(true);
  }
  const handleCancel = () => {
    setNewText(todo.text); // 텍스트를 원래대로 되돌림
    setIsEditing(false); // 수정 모드 종료
  };

  const handleTextChange = (e) => {
    setNewText(e.target.value);
  }

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false)
  }

  const handleDelete = () => {
    deleteTodo(todo.id)
  }

  return (
    <li className="flex">
      <label className="label">
        <input type="checkbox" checked={todo.completed}
        className="checkbox bg-pink-100 checked:bg-blue-200 checked:text-blue-400"
        onChange={() => toggleCheckbox(todo.id)} />
          {isEditing ? (
            <div className="flex gap-2 items-center">
              <input type="text" value={newText} onChange={handleTextChange} className="p-2 border rounded" />
              <button onClick={handleCancel} className="ml-2 px-3 py-1 bg-gray-300 rounded">취소</button>
              <button onClick={handleSave} className="ml-2 px-3 py-1 bg-green-500 text-white rounded">저장</button>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <span>{todo.text}</span>
              <button onClick={handleEditing} className="ml-2 px-3 py-1 bg-blue-500 text-white rounded">수정</button>
              <button onClick={handleDelete} className="ml-2 px-3 py-1 bg-red-500 text-white rounded">삭제</button>
            </div>
          )}
      </label>
    </li>
  );
};

export default TodoItem;