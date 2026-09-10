import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sparkles, MapPin, Calendar, Heart, ShieldAlert, Store } from 'lucide-react';
import { useCourse } from '../context/CourseContext';

export const Navbar: React.FC = () => {
  const { favoriteIds } = useCourse();

  const navItems = [
    { to: '/', label: '홈', icon: Sparkles },
    { to: '/booths', label: '부스 둘러보기', icon: Store },
    { to: '/map', label: '층별 배치도', icon: MapPin },
    { to: '/schedule', label: '맞춤 시간표', icon: Calendar },
    { to: '/my-course', label: '나의 코스', icon: Heart, badge: favoriteIds.length },
    { to: '/teacher', label: '선생님 안내', icon: ShieldAlert, isSpecial: true },
  ];

  return (
    <>
      {/* 상단 네비게이션 (데스크탑 및 태블릿) */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* 로고 & 타이틀 */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-300 flex items-center justify-center text-xl sm:text-2xl shadow-md group-hover:scale-105 transition-transform">
                🌟
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-amber-700 tracking-wider">2026 연성초 진로의 날</span>
                <span className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight flex items-center gap-1.5">
                  꿈마당 안내소
                  <span className="hidden md:inline-block text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                    10.15(목)
                  </span>
                </span>
              </div>
            </Link>

            {/* 데스크톱 메뉴 */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `relative px-3.5 py-2 rounded-xl font-bold text-sm lg:text-base transition-all flex items-center gap-1.5 ${
                        isActive
                          ? item.isSpecial
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-amber-400 text-amber-950 shadow-sm'
                          : item.isSpecial
                          ? 'text-purple-700 hover:bg-purple-50'
                          : 'text-gray-700 hover:bg-amber-50 hover:text-amber-800'
                      }`
                    }
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span>{item.label}</span>
                    {typeof item.badge === 'number' && item.badge > 0 && (
                      <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-black leading-none text-white bg-red-500 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* 모바일 하단 플로팅 탭바 (초등학생이 손쉽게 엄지손가락으로 터치 가능) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-100 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] px-2 py-1.5 print:hidden">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all relative min-w-[52px] ${
                    isActive
                      ? item.isSpecial
                        ? 'text-purple-600 font-extrabold'
                        : 'text-amber-600 font-extrabold scale-105'
                      : 'text-gray-500 font-medium hover:text-gray-700'
                  }`
                }
              >
                <div className="relative">
                  <Icon className="w-5 h-5 mb-0.5" />
                  {typeof item.badge === 'number' && item.badge > 0 && (
                    <span className="absolute -top-1.5 -right-2.5 inline-flex items-center justify-center w-4 h-4 text-[10px] font-black text-white bg-red-500 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-[11px] leading-tight tracking-tighter">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
};
