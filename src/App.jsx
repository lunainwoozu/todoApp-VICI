import { useState } from "react";
import useTodo from './hooks/useTodo';
import useUser from './hooks/useUser'
import useBadges from "./hooks/useBadges";
import useQuotes from "./hooks/useQuotes";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Profile from "./components/Profile";
import HallOfFame from './components/HallOfFame'
import BadgeModal from "./components/BadgeModal";
import QuoteToast from "./components/QuoteToast";
import ProgressBar from "./components/ProgressBar";

function App() {
  const {todos, addTodo, editTodo, deleteTodo, toggleCheckbox} = useTodo();
  const {user, updateUser} = useUser();
  const {badges, isBadgeModalOpen} = useBadges(todos);
  const [activeTab, setActiveTab] = useState('todos');
  const {quotes, isQuoteToastOpen, handleOpenToast} = useQuotes();

  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;

  return (
    <div className="relative overflow-hidden">
      {isQuoteToastOpen && <QuoteToast quotes={quotes} />}
      <div className="h-screen w-[360px] flex flex-col items-center">
        <Profile user={user} updateUser={updateUser} />
        <div className="tabs w-full justify-between">
          <button
            className={`tab tab-lg w-45 tab-bordered ${activeTab === 'todos' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('todos')}
          >
            할 일 목록
          </button>
          <button
            className={`tab tab-lg w-45 tab-bordered ${activeTab === 'hall' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('hall')}
          >
            배지
          </button>
        </div>
        <div className="w-full flex-grow bg-white rounded-t-xl flex flex-col">
          {activeTab === 'todos' &&
            <>
              <div className="p-6">
                <ProgressBar total={total} completed={completed} />
              </div>
              <div className="gap-4 p-4 pt-0">
                <TodoList todos={todos} toggleCheckbox={toggleCheckbox}
                  deleteTodo={deleteTodo} editTodo={editTodo} />
                <button className="btn btn-circle absolute bottom-18 right-4 z-10" onClick={handleOpenToast}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                </button>
              </div>
              <TodoInput addTodo={addTodo} />
            </>
            }
          {activeTab === 'hall' && <HallOfFame badges={badges} /> }
        </div>
      </div>
      {/* 배지 획득 모달 조건부 렌더링 */}
      {isBadgeModalOpen && <BadgeModal />}
    </div>
  );
};

export default App;