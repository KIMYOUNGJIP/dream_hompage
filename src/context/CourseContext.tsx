import React, { createContext, useContext, useState, useEffect } from 'react';

interface CourseContextType {
  favoriteIds: string[];
  completedIds: string[];
  toggleFavorite: (boothId: string) => void;
  isFavorite: (boothId: string) => boolean;
  toggleCompleted: (boothId: string) => void;
  isCompleted: (boothId: string) => boolean;
  resetCourse: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

const STORAGE_KEY_FAVORITES = 'yeonsung_dream_my_course_ids';
const STORAGE_KEY_COMPLETED = 'yeonsung_dream_completed_ids';

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FAVORITES);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load favorites from localStorage', e);
    }
    // 기본 추천 코스 3개 세팅 (처음 접속 시에도 학생이 둘러보기 쉽게)
    return ['b4-1-1', 'b5-1-1', 'b-job-1'];
  });

  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load completed from localStorage', e);
    }
    return [];
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favoriteIds));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favoriteIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedIds));
    } catch (e) {
      console.error('Failed to save completed to localStorage', e);
    }
  }, [completedIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2500);
  };

  const toggleFavorite = (boothId: string) => {
    setFavoriteIds((prev) => {
      if (prev.includes(boothId)) {
        showToast('내 코스에서 제외되었습니다.');
        return prev.filter((id) => id !== boothId);
      } else {
        showToast('🎒 내 코스에 쏙! 담겼어요!');
        return [...prev, boothId];
      }
    });
  };

  const isFavorite = (boothId: string) => favoriteIds.includes(boothId);

  const toggleCompleted = (boothId: string) => {
    setCompletedIds((prev) => {
      if (prev.includes(boothId)) {
        return prev.filter((id) => id !== boothId);
      } else {
        showToast('🎉 축하해요! 부스 체험을 완료했어요!');
        return [...prev, boothId];
      }
    });
  };

  const isCompleted = (boothId: string) => completedIds.includes(boothId);

  const resetCourse = () => {
    setFavoriteIds([]);
    setCompletedIds([]);
    showToast('나의 코스가 초기화되었습니다.');
  };

  return (
    <CourseContext.Provider
      value={{
        favoriteIds,
        completedIds,
        toggleFavorite,
        isFavorite,
        toggleCompleted,
        isCompleted,
        resetCourse,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = (): CourseContextType => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};
