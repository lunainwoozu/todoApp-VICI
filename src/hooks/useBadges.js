import { useState, useEffect } from 'react';

const BADGE_LEVELS = [10, 20, 30, 40, 50];

const useBadges = (todos) => {
  const [badges, setBadges] = useState(() => {
    const savedBadges = localStorage.getItem('badges');
    return savedBadges ? JSON.parse(savedBadges) : [];
  });
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false);
  const [lastAcquiredBadge, setLastAcquiredBadge] = useState(null);

  // 로컬 스토리지에 배지 저장
  useEffect(() => {
    localStorage.setItem('badges', JSON.stringify(badges));
  }, [badges]);

  // 할일 완료 개수에 따라 배지 획득 로직
  useEffect(() => {
    const completedCount = todos.filter(todo => todo.completed).length;

    BADGE_LEVELS.forEach(level => {
      setBadges(prevBadges => {
        if (completedCount === level &&
           !prevBadges.some(badge => badge.level === level)){
            const newBadge = {
              id: Date.now(),
              level: level,
              name: `${level}개 달성 배지`,
              date: new Date().toLocaleDateString(),
            };
          // 마지막 획득 배지 상태를 업데이트 (여기서는 동기적으로 처리 가능)
          setLastAcquiredBadge(newBadge);
          return [...prevBadges, newBadge]; // 새로운 배지를 추가한 배열 반환
        }
        return prevBadges
      })
    })
  }, [todos]); // todos 상태가 변경될 때마다 실행

  // 획득 배지가 있을 때만 모달을 띄우고 자동으로 닫히는 로직
  useEffect(() => {
    if (lastAcquiredBadge) {
      setIsBadgeModalOpen(true);
      const timer = setTimeout(() => {
        setIsBadgeModalOpen(false);
        setLastAcquiredBadge(null); // 모달이 닫힌 후 상태 초기화
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [lastAcquiredBadge]);

  return { badges, isBadgeModalOpen };
};

export default useBadges;