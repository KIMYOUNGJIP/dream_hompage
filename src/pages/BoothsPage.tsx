import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, MapPin, Clock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BOOTHS } from '../data/booths';
import { BoothCategory } from '../types';
import { useCourse } from '../context/CourseContext';

export const BoothsPage: React.FC = () => {
  const { favoriteIds, toggleFavorite, isFavorite, completedIds } = useCourse();

  // 필터 상태
  const [selectedFloor, setSelectedFloor] = useState<'all' | '4' | '5'>('all');
  const [selectedCategory, setSelectedCategory] = useState<'all' | BoothCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 필터링된 부스 목록
  const filteredBooths = useMemo(() => {
    return BOOTHS.filter((booth) => {
      // 층 필터
      if (selectedFloor !== 'all' && booth.floor.toString() !== selectedFloor) {
        return false;
      }
      // 주체 필터
      if (selectedCategory !== 'all' && booth.category !== selectedCategory) {
        return false;
      }
      // 검색어 필터
      if (searchQuery.trim() !== '') {
        const query = searchQuery.trim().toLowerCase();
        const matchName = booth.name.toLowerCase().includes(query);
        const matchDesc = booth.description.toLowerCase().includes(query);
        const matchShortDesc = booth.shortDesc.toLowerCase().includes(query);
        const matchOrganizer = booth.organizer.toLowerCase().includes(query);
        const matchCode = booth.code.toLowerCase().includes(query);
        const matchActivity = booth.activities.some((act) => act.toLowerCase().includes(query));
        return matchName || matchDesc || matchShortDesc || matchOrganizer || matchCode || matchActivity;
      }
      return true;
    });
  }, [selectedFloor, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8 pb-12">
      {/* 상단 타이틀 */}
      <div className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-300 rounded-3xl p-6 sm:p-8 shadow-md border-2 border-amber-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-amber-900 font-extrabold text-xs mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>총 {BOOTHS.length}개 체험 부스 한눈에 보기</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">부스 둘러보기 🎪</h1>
            <p className="text-sm sm:text-base text-amber-950 font-medium mt-1">
              관심 있는 부스의 하트를 눌러 <span className="font-extrabold underline decoration-amber-600">나만의 코스</span>에 담아보세요!
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl border border-amber-200 shrink-0 text-center sm:text-right">
            <span className="text-xs font-bold text-gray-500 block">내 코스에 담긴 부스</span>
            <span className="text-xl sm:text-2xl font-black text-amber-700">{favoriteIds.length}개</span>
          </div>
        </div>
      </div>

      {/* 검색 & 필터 바 */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-amber-100 shadow-sm space-y-4">
        {/* 키워드 검색 */}
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="부스 이름, 활동 내용(네일, 게임, 드론, 비즈...), 학급 검색"
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-amber-50/40 border-2 border-amber-200/70 focus:border-amber-400 focus:bg-white focus:outline-none text-base font-semibold placeholder:text-gray-400 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full"
            >
              지우기
            </button>
          )}
        </div>

        {/* 층 및 운영 주체 탭 */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-gray-100">
          {/* 층 선택 */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-black text-gray-400 mr-1">위치</span>
            <button
              onClick={() => setSelectedFloor('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                selectedFloor === 'all'
                  ? 'bg-amber-400 text-amber-950 shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              전체 층
            </button>
            <button
              onClick={() => setSelectedFloor('4')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                selectedFloor === '4'
                  ? 'bg-amber-400 text-amber-950 shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              4층 ({BOOTHS.filter(b => b.floor === 4).length}개)
            </button>
            <button
              onClick={() => setSelectedFloor('5')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                selectedFloor === '5'
                  ? 'bg-amber-400 text-amber-950 shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              5층 ({BOOTHS.filter(b => b.floor === 5).length}개)
            </button>
          </div>

          {/* 주체 선택 */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-black text-gray-400 mr-1">주체</span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setSelectedCategory('student')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                selectedCategory === 'student'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              학생 부스 ({BOOTHS.filter(b => b.category === 'student').length})
            </button>
            <button
              onClick={() => setSelectedCategory('external')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                selectedCategory === 'external'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              외부기관 (2)
            </button>
            <button
              onClick={() => setSelectedCategory('parent')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                selectedCategory === 'parent'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              학부모회 (1)
            </button>
          </div>
        </div>
      </div>

      {/* 부스 결과 카운트 */}
      <div className="flex items-center justify-between px-2">
        <span className="text-sm font-bold text-gray-600">
          검색 결과 <span className="text-amber-700 font-extrabold">{filteredBooths.length}</span>개 부스
        </span>
        {(selectedFloor !== 'all' || selectedCategory !== 'all' || searchQuery !== '') && (
          <button
            onClick={() => {
              setSelectedFloor('all');
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-xs text-amber-700 font-extrabold hover:underline"
          >
            필터 전체 초기화
          </button>
        )}
      </div>

      {/* 부스 카드 그리드 (모바일 1열, 태블릿 2열, PC 3~4열) */}
      {filteredBooths.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredBooths.map((booth) => {
            const isFav = isFavorite(booth.id);
            const isDone = completedIds.includes(booth.id);

            return (
              <div
                key={booth.id}
                className={`group relative bg-white rounded-3xl border-2 transition-all flex flex-col justify-between overflow-hidden ${
                  isFav
                    ? 'border-amber-400 ring-2 ring-amber-300/40 shadow-lg'
                    : 'border-amber-100/80 shadow-sm hover:border-amber-300 hover:shadow-md'
                }`}
              >
                {/* 상단 뱃지 & 하트 버튼 바 */}
                <div className="p-5 pb-3">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-100 text-amber-900">
                        {booth.floor}층
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                        {booth.code}
                      </span>
                      {isDone && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> 완료
                        </span>
                      )}
                    </div>

                    {/* 내 코스 담기 하트 버튼 */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(booth.id);
                      }}
                      aria-label={`${booth.name} 내 코스에 ${isFav ? '제외' : '담기'}`}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isFav
                          ? 'bg-rose-500 text-white shadow-md scale-105'
                          : 'bg-gray-100 text-gray-400 hover:bg-rose-50 hover:text-rose-500'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isFav ? 'fill-white' : ''}`} />
                    </button>
                  </div>

                  {/* 이모지 & 부스명 */}
                  <Link to={`/booths/${booth.id}`} className="block group-hover:opacity-90">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl sm:text-4xl p-2 bg-amber-50 rounded-2xl group-hover:scale-110 transition-transform">
                        {booth.emoji}
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-gray-400 block">{booth.organizer}</span>
                        <h3 className="text-lg font-black text-gray-900 group-hover:text-amber-700 transition-colors leading-snug">
                          {booth.name}
                        </h3>
                      </div>
                    </div>

                    {/* 한 줄 요약 */}
                    <p className="text-sm font-medium text-gray-600 line-clamp-2 mt-2 min-h-[40px] leading-relaxed">
                      {booth.shortDesc}
                    </p>
                  </Link>
                </div>

                {/* 하단 메타 정보 & 상세 링크 */}
                <div className="p-5 pt-3 border-t border-gray-100 bg-gray-50/50 mt-auto">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      {booth.roomName}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      약 {booth.durationMinutes}분
                    </span>
                  </div>

                  <Link
                    to={`/booths/${booth.id}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-amber-400 border border-amber-200 hover:border-amber-400 text-gray-800 hover:text-amber-950 font-extrabold text-sm transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>자세히 보기</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* 검색 결과 없음 */
        <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-200">
          <span className="text-5xl block mb-3">🔍</span>
          <h3 className="text-lg font-black text-gray-800 mb-1">일치하는 부스가 없어요!</h3>
          <p className="text-sm text-gray-500 mb-4">검색어를 바꾸거나 필터를 재설정해보세요.</p>
          <button
            onClick={() => {
              setSelectedFloor('all');
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 bg-amber-400 text-amber-950 font-extrabold text-sm rounded-2xl shadow-sm hover:bg-amber-500 transition-colors"
          >
            모든 부스 다시 보기
          </button>
        </div>
      )}
    </div>
  );
};
