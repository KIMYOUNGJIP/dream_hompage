import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CourseProvider } from './context/CourseContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { BoothsPage } from './pages/BoothsPage';
import { BoothDetailPage } from './pages/BoothDetailPage';
import { MapPage } from './pages/MapPage';
import { SchedulePage } from './pages/SchedulePage';
import { MyCoursePage } from './pages/MyCoursePage';
import { TeacherPage } from './pages/TeacherPage';

export const App: React.FC = () => {
  return (
    <CourseProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col bg-[#FFFDF9]">
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/booths" element={<BoothsPage />} />
              <Route path="/booths/:id" element={<BoothDetailPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/my-course" element={<MyCoursePage />} />
              <Route path="/teacher" element={<TeacherPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <Toast />
        </div>
      </HashRouter>
    </CourseProvider>
  );
};

export default App;
