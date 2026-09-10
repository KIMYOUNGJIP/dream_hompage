import React from 'react';
import { useCourse } from '../context/CourseContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useCourse();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none toast-container">
      <div className="bg-gray-900/90 text-white font-bold text-sm sm:text-base px-5 py-3 rounded-full shadow-2xl backdrop-blur-sm border border-white/20 animate-gentle flex items-center gap-2 text-center">
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
