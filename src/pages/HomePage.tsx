import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { BOOTHS, FESTIVAL_INFO } from '../data/booths';
import { MAIN_PERIODS } from '../data/schedule';
import { useCourse } from '../context/CourseContext';

export const HomePage: React.FC = () => {
  const { favoriteIds } = useCourse();

  // D-Day 계산
  const [dDayText, setDDayText] = useState<string>('');
  const [timeRemaining, setTimeRemaining] = useState<{ days: number; hours: number; mins: number }>({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-10-15T09:10:00');

    const updateTimer = () => {
      const now = new Date();
      const diffTime = targetDate.getTime() - now.getTime();

      if (diffTime > 0) {
        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diffTime / (1000 * 60)) % 60);

        setTimeRemaining({ days, hours, mins });
        setDDayText(`D-${days === 0 ? 'DAY' : days}`);
      } else {
        const today = new Date();
        if (today.toDateString() === targetDate.toDateString()) {
          setDDayText('🎉 오늘 행사 진행 중!');
        } else {
          setDDayText('꿈마당 행사 성료');
        }
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-10 pb-12">
      {/* 히어로 배너 */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400 via-amber-300 to-orange-300 p-6 sm:p-10 md:p-14 shadow-xl border-4 border-amber-200">
        {/* 장식용 배경 이모지/원 */}
        <div className="absolute top-2 right-4 text-7xl opacity-20 select-none pointer-events-none">🎈</div>
        <div className="absolute bottom-2 left-4 text-6xl opacity-15 select-none pointer-events-none">🎪</div>
        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-white/30 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 text-amber-900 font-extrabold text-xs sm:text-sm shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>2026 연성초 진로체험의 날</span>
            <span className="bg-amber-500 text-white px-2 py-0.5 rounded-full text-xs font-black">
              {dDayText || 'D-35'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight sm:leading-tight mb-3">
            {FESTIVAL_INFO.title}
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-amber-950 mb-6 drop-shadow-sm flex items-center gap-2">
            <span>✨</span>
            <span>“{FESTIVAL_INFO.slogan}”</span>
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base font-semibold text-gray-800 mb-6 bg-white/60 backdrop-blur-sm p-3.5 rounded-2xl border border-white/60">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-700" />
              <span>{FESTIVAL_INFO.date}</span>
            </div>
            <span className="text-amber-400">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>{FESTIVAL_INFO.time}</span>
            </div>
            <span className="text-amber-400">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-700" />
              <span>{FESTIVAL_INFO.place}</span>
            </div>
          </div>

          {/* D-Day 카운트다운 박스 */}
          <div className="inline-flex items-center gap-4 bg-amber-900/90 text-white px-5 py-3 rounded-2xl shadow-lg backdrop-blur-sm">
            <span className="text-xs sm:text-sm font-bold text-amber-200">행사 시작까지</span>
            <div className="flex items-baseline gap-2 font-black text-lg sm:text-xl">
              <span>{timeRemaining.days}</span>
              <span className="text-xs font-normal text-amber-200">일</span>
              <span>{timeRemaining.hours}</span>
              <span className="text-xs font-normal text-amber-200">시간</span>
              <span>{timeRemaining.mins}</span>
              <span className="text-xs font-normal text-amber-200">분 남음</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4대 주요 메뉴 퀵 버튼 */}
      <section>
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-5 flex items-center gap-2">
          <span>🚀</span>
          <span>무엇을 확인해볼까요?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* 부스 둘러보기 */}
          <Link
            to="/booths"
            className="group relative overflow-hidden bg-white p-6 rounded-3xl border-2 border-amber-100 shadow-md hover:shadow-xl hover:border-amber-400 transition-all transform hover:-translate-y-1 flex flex-col justify-between min-h-[190px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🎪
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600">총 {BOOTHS.length}개 체험 부스</span>
              <h3 className="text-xl font-black text-gray-900 mt-1 flex items-center justify-between">
                부스 둘러보기
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-sm text-gray-500 mt-1.5">네일, PC방, 드론, 공예 등 흥미진진한 부스 목록 보기</p>
            </div>
          </Link>

          {/* 층별 배치도 */}
          <Link
            to="/map"
            className="group relative overflow-hidden bg-white p-6 rounded-3xl border-2 border-sky-100 shadow-md hover:shadow-xl hover:border-sky-400 transition-all transform hover:-translate-y-1 flex flex-col justify-between min-h-[190px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🗺️
            </div>
            <div>
              <span className="text-xs font-bold text-sky-600">4층 & 5층 지도</span>
              <h3 className="text-xl font-black text-gray-900 mt-1 flex items-center justify-between">
                층별 배치도
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-sm text-gray-500 mt-1.5">교실과 복도 위치를 한눈에 찾고 내 코스 부스 확인</p>
            </div>
          </Link>

          {/* 맞춤 시간표 */}
          <Link
            to="/schedule"
            className="group relative overflow-hidden bg-white p-6 rounded-3xl border-2 border-emerald-100 shadow-md hover:shadow-xl hover:border-emerald-400 transition-all transform hover:-translate-y-1 flex flex-col justify-between min-h-[190px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              ⏰
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600">1~6학년 맞춤 타임라인</span>
              <h3 className="text-xl font-black text-gray-900 mt-1 flex items-center justify-between">
                맞춤 시간표
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-sm text-gray-500 mt-1.5">내 학년과 A/B조를 선택하고 당일 시간표 확인하기</p>
            </div>
          </Link>

          {/* 나의 코스 */}
          <Link
            to="/my-course"
            className="group relative overflow-hidden bg-white p-6 rounded-3xl border-2 border-pink-100 shadow-md hover:shadow-xl hover:border-pink-400 transition-all transform hover:-translate-y-1 flex flex-col justify-between min-h-[190px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🎒
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-pink-600">체크리스트 & 인쇄</span>
                {favoriteIds.length > 0 && (
                  <span className="bg-pink-500 text-white text-xs font-black px-2 py-0.5 rounded-full">
                    {favoriteIds.length}개 담김
                  </span>
                )}
              </div>
              <h3 className="text-xl font-black text-gray-900 mt-1 flex items-center justify-between">
                나의 코스
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-sm text-gray-500 mt-1.5">가고 싶은 부스 찜하고 당일 체크하며 인쇄까지!</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 오늘 일정 요약 카드 */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-100 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📋</span>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900">당일 일정 한눈에 보기</h2>
            </div>
            <p className="text-sm text-gray-500 mt-1">2026년 10월 15일(목) 오전 09:10부터 12:20까지 진행됩니다.</p>
          </div>
          <Link
            to="/schedule"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 px-4 py-2 rounded-xl transition-colors shrink-0"
          >
            <span>상세 시간표 보러가기</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4">
          {MAIN_PERIODS.map((period, idx) => (
            <div
              key={idx}
              className="bg-amber-50/50 hover:bg-amber-50 rounded-2xl p-4 border border-amber-100 flex flex-col justify-between transition-colors"
            >
              <div>
                <span className="inline-block text-xs font-black bg-amber-200 text-amber-900 px-2.5 py-0.5 rounded-full mb-2">
                  {period.period}
                </span>
                <p className="text-xs font-bold text-amber-800 flex items-center gap-1 mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  {period.timeRange}
                </p>
                <h4 className="font-extrabold text-gray-900 text-base mb-1">{period.summary}</h4>
              </div>
              <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                {period.details[0]?.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 참여 원칙 카드 */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 sm:p-8 border-2 border-blue-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
            💡
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">꿈마당 4대 참여 원칙</h2>
            <p className="text-sm text-gray-600">모두가 즐겁고 안전한 진로 체험을 위해 꼭 지켜주세요!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FESTIVAL_INFO.principles.map((item) => (
            <div key={item.num} className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-blue-100 flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-black flex items-center justify-center shrink-0 text-sm">
                {item.num}
              </span>
              <div>
                <h4 className="font-extrabold text-gray-900 text-sm sm:text-base">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 선생님용 안내 배너 (TV / 전자칠판 띄우기용) */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shrink-0">
            👩‍🏫
          </div>
          <div>
            <span className="text-xs font-bold text-purple-200 bg-white/20 px-2.5 py-0.5 rounded-full">
              TV / 전자칠판 학급 안내 모드 지원
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-1">선생님을 위한 운영 안내 및 점검표</h3>
            <p className="text-sm text-purple-100 mt-1">
              학급 안내 강조사항, 안전 유의사항, 학생 부스 역할 분담표 및 준비물 체크리스트를 확인하세요.
            </p>
          </div>
        </div>
        <Link
          to="/teacher"
          className="shrink-0 px-6 py-3 bg-white text-purple-900 font-extrabold rounded-2xl shadow-md hover:bg-purple-50 transition-transform active:scale-95 text-sm sm:text-base flex items-center gap-2"
        >
          <span>교사용 안내 열기</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
};
