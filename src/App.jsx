import { useState, useEffect } from "react";
import useTodo from './hooks/useTodo';
import useUser from './hooks/useUser'
import useBadges from "./hooks/useBadges";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import HallOfFame from './components/HallOfFame'
import BadgeModal from "./components/BadgeModal";

function App() {
  const {todos, addTodo, editTodo, deleteTodo, toggleCheckbox} = useTodo();
  const {user, updateUser} = useUser();
  const { badges, isBadgeModalOpen } = useBadges(todos);
  const [activeTab, setActiveTab] = useState('todos');
  
  return (
    <div className="relative">
      <div className="h-screen min-w-[375px] flex flex-col items-center">
        <Profile user={user} updateUser={updateUser} />
        <div className="tabs">
          <button
            className={`tab tab-lg tab-bordered ${activeTab === 'todos' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('todos')}
          >
            할 일 목록
          </button>
          <button
            className={`tab tab-lg tab-bordered ${activeTab === 'hall' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('hall')}
          >
            배지
          </button>
        </div>
        <div className="w-full y-full flex-grow overflow-y-auto bg-white rounded-t-xl">
          {activeTab === 'todos' &&
          <TodoList todos={todos} toggleCheckbox={toggleCheckbox}
            deleteTodo={deleteTodo} editTodo={editTodo} addTodo={addTodo} />}
          {activeTab === 'hall' && <HallOfFame badges={badges} /> }
        </div>
      </div>
      {/* 배지 획득 모달 조건부 렌더링 */}
      {isBadgeModalOpen && <BadgeModal />}
    </div>
  );
};

export default App;