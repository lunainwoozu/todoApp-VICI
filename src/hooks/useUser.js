import { useState, useEffect } from "react";

const useUser = () => {
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

  return {user, updateUser}
}

export default useUser;