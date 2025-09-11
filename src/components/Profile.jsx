import { useState } from "react";
import {Plus} from "lucide-react"
import ProfileModal from './ProfileModal';

const Profile = ({user, updateUser}) => {
  // 모달 창 상태
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col items-center h-[35vh] p-8">
      <div className="relative avatar">
        <div className="w-24 rounded-full">
          <img src={user.photo} alt='프로필 이미지' />
        </div>
        <button type="button"
         className="absolute bottom-0 right-0 w-[20px] h-[20px] btn btn-circle bg-black border-0"
         onClick={handleOpenModal}>
          <Plus color="#eee" size={16} />
        </button>
      </div>
      <h2 className="mt-4">{user.nickname}</h2>
      <p>{user.message}</p>
      {isOpen && <ProfileModal
       user={user} updateUser={updateUser}
       handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default Profile;