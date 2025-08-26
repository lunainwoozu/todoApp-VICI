import {X} from 'lucide-react'
import { useState } from 'react';

const ProfileModal = ({user, updateUser, handleCloseModal}) => {
  const [newProfile, setNewProfile] = useState(user)

  const handleChange = (e) => {
    const {name,value} = e.target;
    setNewProfile({
      ...newProfile,
      [name]: value
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // FileReader를 사용해 파일을 읽고 Data URL로 변환
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfile({
          ...newProfile,
          photo: reader.result // Data URL을 photo 속성에 저장
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // 저장 후 창을 자동으로 닫아 반영된 모습 보이게 할 것
  const handleSave = () => {
    updateUser(newProfile);
    handleCloseModal();
  };

  return (
    <dialog className='absolute top-50 left-4 flex flex-col justify-center items-center gap-4 p-20 z-10 rounded-xl'>
      <button onClick={handleCloseModal}
       className="absolute top-2 right-2 p-3 text-gray-500 hover:text-gray-700">
        <X size={16} />
      </button>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={newProfile.photo} alt='프로필 이미지' />
        </div>
      </div>
      <input type="file" name="photo" id="photo"
       accept="image/*"
       onChange={handleFileChange} />
      <input type="text" name="nickname" id="nickname"
       onChange={handleChange}
       placeholder='닉네임' value={newProfile.nickname} className='w-full p-2 border-b' />
      <input type="text" name="message" id="message"
       onChange={handleChange}
       placeholder='문장' value={newProfile.message} className='w-full p-2 border-b' />
      <button onClick={handleSave} className="btn btn-primary mt-4">저장</button>
    </dialog>
  );
};

export default ProfileModal;