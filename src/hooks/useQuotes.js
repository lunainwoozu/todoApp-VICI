import { useState, useEffect } from 'react';
import axios from 'axios';

const useQuotes = () => {
  const [quotes, setQuotes] = useState(null);
  const [isQuoteToastOpen, setisQuoteToastOpen] = useState(false)

  // 클릭 시마다 새로운 명언 데이터 api로 받아오기
  const handleOpenToast = async () => {
      try {
        const response = await axios.get(`https://korean-advice-open-api.vercel.app/api/advice`);
        setQuotes(response.data);
        setisQuoteToastOpen(true);
      } catch (err) {
        console.error(`API 에러:`, err);
        setQuotes('오류로 인해 불러오지 못했습니다.');
        setisQuoteToastOpen(true);
      }
  }

  useEffect(() => {
    if (isQuoteToastOpen) {
      const timer = setTimeout(() => {
        setisQuoteToastOpen(false);
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, [isQuoteToastOpen]);

  return {quotes, isQuoteToastOpen, handleOpenToast}
};

export default useQuotes;