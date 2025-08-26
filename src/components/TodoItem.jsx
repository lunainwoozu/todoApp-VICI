import { useState, useEffect, useRef } from "react";
import { Pen, Trash2, X, Check } from 'lucide-react';

const TodoItem = ({todo, toggleCheckbox, deleteTodo, editTodo}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const inputRef = useRef(null);

  // 수정 상태 on/off
  const handleEditing = () => {
    setIsEditing(true);
  }

  // 자동 포커스
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus(); // isEditing이 true일 때 포커스
    }
  }, [isEditing]);

  const handleCancel = () => {
    setNewText(todo.text);
    setIsEditing(false);
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
    <li className="flex justify-between items-center my-2 rounded-lg">
      {/* 체크박스와 텍스트를 위한 label */}
      <label className="flex items-center flex-1 cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          className="checkbox bg-pink-100 checked:bg-blue-200 checked:text-blue-400"
          onChange={() => toggleCheckbox(todo.id)}
        />
        {/* 일반 텍스트 모드 */}
        {!isEditing && (
          <span className={`flex-1 ml-2 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        )}
      </label>

      {/* 수정 모드 */}
      {isEditing ? (
        <div className="flex gap-2 items-center">
          <input
            ref={inputRef}
            type="text"
            value={newText}
            onChange={handleTextChange}
            className="p-2 border rounded-md"
          />
          <div className="flex gap-1">
            <button onClick={handleCancel} className="">
              <X color="#999999" size={16} />
            </button>
            <button onClick={handleSave} className="">
              <Check color="#999999" size={16} />
            </button>
          </div>
        </div>
      ) : (
        // 버튼 모드
        <div className="flex gap-1 items-center">
          <button onClick={handleEditing} className="bg-transparent">
            <Pen color="#999999" size={16} />
          </button>
          <button onClick={handleDelete} className="bg-transparent">
            <Trash2 color="#999999" size={16} />
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;