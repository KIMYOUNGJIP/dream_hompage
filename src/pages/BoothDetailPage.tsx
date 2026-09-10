import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Heart, 
  AlertTriangle, 
  Package, 
  Sparkles, 
  CheckCircle2, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { BOOTHS } from '../data/booths';
import { useCourse } from '../context/CourseContext';

export const BoothDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite, isCompleted, toggleCompleted } = useCourse();

  // 페이지 진입 시 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const booth = BOOTHS.find((b) => b.id === id);

  if (!booth) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-200 my-10">
        <span className="text-5xl block mb-4">😿</span>
        <h2 className="text-2xl font-black text-gray-800 mb-2">찾으시는 부스가 없습니다.</h2>
        <p className="text-gray-500 mb-6 text-sm">부스 번호를 다시 확인해주세요.</p>
        <Link
          to="/booths"
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-amber-950 font-extrabold rounded-2xl shadow-md hover:bg-amber-500 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>부스 목록으로 돌아가기</span>
        </Link>
      </div>
    );
  }

  const isFav = isFavorite(booth.id);
  const isDone = isCompleted(booth.id);

  // 인접 부스 2개 찾기
  const adjacentBooths = BOOTHS.filter((b) => booth.adjacentBoothIds.includes(b.id));

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* 상단 뒤로가기 & 바로가기 바 */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-amber-800 bg-white hover:bg-amber-50 px-4 py-2.5 rounded-2xl border border-gray-200 transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>뒤로 가기</span>
        </button>

        <div className="flex items-center gap-2">
          <Link
            to={`/map?floor=${booth.floor}&highlight=${booth.id}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-sky-700 bg-sky-50 hover:bg-sky-100 px-3.5 py-2.5 rounded-2xl border border-sky-200 transition-colors"
          >
            <Compass className="w-4 h-4 text-sky-600" />
            <span>배치도에서 위치 보기</span>
          </Link>
        </div>
      </div>

      {/* 부스 메인 헤더 카드 */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-200/80 shadow-lg relative overflow-hidden">
        {/* 장식 배경 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-100/60 to-transparent rounded-bl-full pointer-events-none -z-0"></div>

        <div className="relative z-10">
          {/* 배지 그룹 */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-black bg-amber-400 text-amber-950 shadow-sm">
              {booth.floor}층
            </span>
            <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-gray-100 text-gray-800">
              {booth.categoryLabel} ({booth.code})
            </span>
            <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              {booth.organizer}
            </span>
            {isDone && (
              <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-extrabold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> 체험 완료
              </span>
            )}
          </div>

          {/* 제목 & 이모지 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-3xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-5xl shadow-sm shrink-0">
              {booth.emoji}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                {booth.name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-amber-800 mt-1">
                {booth.shortDesc}
              </p>
            </div>
          </div>

          {/* 핵심 메타 카드 (위치, 소요시간, 대상) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
            <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-800 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 block">부스 위치</span>
                <span className="text-sm font-black text-gray-800">{booth.roomName}</span>
              </div>
            </div>

            <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-200 text-sky-800 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 block">예상 소요시간</span>
                <span className="text-sm font-black text-gray-800">약 {booth.durationMinutes}분</span>
              </div>
            </div>

            <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 block">참여 대상</span>
                <span className="text-sm font-black text-gray-800 truncate" title={booth.targetGrades}>
                  {booth.targetGrades}
                </span>
              </div>
            </div>
          </div>

          {/* 버튼 액션 바 */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
            {/* 내 코스 담기 버튼 */}
            <button
              onClick={() => toggleFavorite(booth.id)}
              className={`flex-1 min-w-[200px] py-3.5 px-6 rounded-2xl font-black text-base transition-all flex items-center justify-center gap-2 shadow-md ${
                isFav
                  ? 'bg-rose-500 hover:bg-rose-600 text-white'
                  : 'bg-amber-400 hover:bg-amber-500 text-amber-950'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFav ? 'fill-white' : ''}`} />
              <span>{isFav ? '내 코스에서 빼기' : '🎒 내 코스에 담기'}</span>
            </button>

            {/* 완료 체크 버튼 */}
            <button
              onClick={() => toggleCompleted(booth.id)}
              className={`py-3.5 px-5 rounded-2xl font-black text-sm sm:text-base transition-all flex items-center justify-center gap-2 border-2 ${
                isDone
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                  : 'bg-white border-gray-200 hover:border-emerald-400 text-gray-700 hover:text-emerald-700'
              }`}
            >
              <CheckCircle2 className={`w-5 h-5 ${isDone ? 'text-emerald-600 fill-emerald-100' : ''}`} />
              <span>{isDone ? '체험 완료 취소' : '체험 완료 체크'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 부스 활동 상세 내용 */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl font-black text-gray-900 flex items-center gap-2 mb-3">
            <span>✨</span>
            <span>어떤 활동을 하나요?</span>
          </h2>
          <p className="text-base text-gray-700 leading-relaxed font-medium bg-amber-50/40 p-4 rounded-2xl border border-amber-100/80">
            {booth.description}
          </p>
        </div>

        {/* 세부 활동 리스트 */}
        <div>
          <h3 className="text-base font-extrabold text-gray-900 mb-3 flex items-center gap-2">
            <span>🎯</span>
            <span>체험 프로그램 순서</span>
          </h3>
          <div className="space-y-2.5">
            {booth.activities.map((act, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-2xl">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-amber-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <p className="text-sm sm:text-base font-semibold text-gray-800">{act}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 준비물 및 유의사항 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {booth.materials && (
            <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 flex items-start gap-3">
              <Package className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-sm text-gray-900 mb-1">준비물 및 제공 재료</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{booth.materials}</p>
              </div>
            </div>
          )}

          {booth.cautions && (
            <div className="bg-rose-50/60 p-4 rounded-2xl border border-rose-100 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-sm text-rose-900 mb-1">안전 및 유의사항</h4>
                <p className="text-xs sm:text-sm text-rose-700 leading-relaxed">{booth.cautions}</p>
              </div>
            </div>
          )}
        </div>

        {/* 세부 위치 안내 박스 */}
        <div className="bg-sky-50/50 p-4 rounded-2xl border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-sky-600 shrink-0" />
            <div>
              <span className="text-xs font-bold text-gray-400 block">교실 내 세부 위치</span>
              <span className="text-sm font-black text-gray-800">{booth.locationDetail}</span>
            </div>
          </div>
          <Link
            to={`/map?floor=${booth.floor}&highlight=${booth.id}`}
            className="text-xs font-extrabold text-sky-700 hover:text-sky-800 bg-sky-100 hover:bg-sky-200 px-3.5 py-2 rounded-xl transition-colors shrink-0 text-center"
          >
            배치도에서 확인 →
          </Link>
        </div>
      </div>

      {/* 인접 부스 추천 (요구사항: 인접 부스 추천 2개) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">👀</span>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-gray-900">바로 옆 인접 부스도 함께 체험해보세요!</h3>
            <p className="text-xs sm:text-sm text-gray-500">동선이 가까워 이동하기 편리한 추천 부스입니다.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {adjacentBooths.map((adj) => (
            <Link
              key={adj.id}
              to={`/booths/${adj.id}`}
              className="group bg-amber-50/40 hover:bg-amber-50 p-4 rounded-2xl border border-amber-200/80 transition-all flex items-center justify-between gap-3 hover:shadow-md"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-3xl p-2 bg-white rounded-xl shadow-xs group-hover:scale-110 transition-transform shrink-0">
                  {adj.emoji}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-black bg-amber-200 text-amber-900 px-2 py-0.2 rounded-md">
                      {adj.floor}층
                    </span>
                    <span className="text-xs font-semibold text-gray-500 truncate">{adj.roomName}</span>
                  </div>
                  <h4 className="font-black text-gray-900 text-base group-hover:text-amber-700 transition-colors truncate">
                    {adj.name}
                  </h4>
                  <p className="text-xs text-gray-500 truncate">{adj.shortDesc}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
