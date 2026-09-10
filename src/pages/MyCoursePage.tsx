import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  CheckCircle2, 
  RotateCcw, 
  Printer, 
  MapPin, 
  Trash2, 
  ArrowRight, 
  Award
} from 'lucide-react';
import { BOOTHS } from '../data/booths';
import { useCourse } from '../context/CourseContext';

export const MyCoursePage: React.FC = () => {
  const { favoriteIds, completedIds, toggleFavorite, toggleCompleted, resetCourse, isCompleted } = useCourse();

  const [studentInfo, setStudentInfo] = useState({
    grade: '',
    classNum: '',
    num: '',
    name: ''
  });

  const [sortBy, setSortBy] = useState<'default' | 'floor'>('default');

  // 내가 담은 부스들 가져오기
  const myBooths = BOOTHS.filter((b) => favoriteIds.includes(b.id));

  // 정렬
  const sortedBooths = [...myBooths].sort((a, b) => {
    if (sortBy === 'floor') {
      return a.floor - b.floor;
    }
    return favoriteIds.indexOf(a.id) - favoriteIds.indexOf(b.id);
  });

  // 진행률 계산
  const totalCount = myBooths.length;
  const completedCount = myBooths.filter((b) => completedIds.includes(b.id)).length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 pb-16">
      {/* ================= 화면 표시 영역 (화면 전용 UI) ================= */}
      <div className="print:hidden space-y-8">
        {/* 상단 배너 */}
        <div className="bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 rounded-3xl p-6 sm:p-8 shadow-md border-2 border-pink-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-pink-900 font-extrabold text-xs mb-2">
                <Heart className="w-3.5 h-3.5 text-pink-600 fill-pink-600" />
                <span>나만의 맞춤 체험 계획서</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">나의 코스 🎒</h1>
              <p className="text-sm sm:text-base text-pink-950 font-medium mt-1">
                담아둔 부스를 당일 하나씩 체험하고 체크해보세요. A4 1쪽으로 예쁘게 인쇄도 가능해요!
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrint}
                disabled={totalCount === 0}
                className="px-4 py-3 rounded-2xl bg-white hover:bg-gray-50 text-gray-900 font-extrabold text-sm transition-all flex items-center gap-2 shadow-sm border border-pink-200 disabled:opacity-40"
              >
                <Printer className="w-4 h-4 text-pink-600" />
                <span>A4 인쇄하기</span>
              </button>

              <button
                onClick={() => {
                  if (window.confirm('나의 코스를 모두 비우고 초기화할까요?')) {
                    resetCourse();
                  }
                }}
                disabled={totalCount === 0}
                className="px-3.5 py-3 rounded-2xl bg-rose-100 hover:bg-rose-200 text-rose-800 font-extrabold text-xs sm:text-sm transition-all flex items-center gap-1.5 disabled:opacity-40"
                title="코스 초기화"
              >
                <RotateCcw className="w-4 h-4" />
                <span>초기화</span>
              </button>
            </div>
          </div>
        </div>

        {/* 진행률 바 카드 */}
        {totalCount > 0 && (
          <div className="bg-white rounded-3xl p-6 border-2 border-pink-100 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="font-extrabold text-gray-900 text-base">체험 달성률</span>
              </div>
              <span className="text-sm font-black text-pink-600">
                {totalCount}개 중 {completedCount}개 완료 ({progressPercent}%)
                {progressPercent === 100 && ' 🎉 올 클리어!'}
              </span>
            </div>

            {/* 프로그레스 바 */}
            <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden p-0.5 border border-gray-200">
              <div
                className="bg-gradient-to-r from-amber-400 to-pink-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* 학생 정보 입력 (인쇄 시 표기용 옵션) */}
        {totalCount > 0 && (
          <div className="bg-amber-50/60 rounded-3xl p-5 border border-amber-200/70 flex flex-wrap items-center gap-4">
            <span className="text-xs font-black text-amber-900 flex items-center gap-1">
              <span>✍️ 활동지 인쇄용 정보 (선택)</span>
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <input
                type="text"
                placeholder="학년 (예: 4)"
                value={studentInfo.grade}
                onChange={(e) => setStudentInfo({ ...studentInfo, grade: e.target.value })}
                className="w-20 px-2.5 py-1.5 rounded-xl border border-amber-200 bg-white font-bold text-center"
              />
              <span className="text-gray-500 font-bold">학년</span>
              <input
                type="text"
                placeholder="반 (예: 1)"
                value={studentInfo.classNum}
                onChange={(e) => setStudentInfo({ ...studentInfo, classNum: e.target.value })}
                className="w-20 px-2.5 py-1.5 rounded-xl border border-amber-200 bg-white font-bold text-center"
              />
              <span className="text-gray-500 font-bold">반</span>
              <input
                type="text"
                placeholder="번호"
                value={studentInfo.num}
                onChange={(e) => setStudentInfo({ ...studentInfo, num: e.target.value })}
                className="w-20 px-2.5 py-1.5 rounded-xl border border-amber-200 bg-white font-bold text-center"
              />
              <span className="text-gray-500 font-bold">번</span>
              <input
                type="text"
                placeholder="학생 이름"
                value={studentInfo.name}
                onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })}
                className="w-28 px-2.5 py-1.5 rounded-xl border border-amber-200 bg-white font-bold"
              />
            </div>
          </div>
        )}

        {/* 정렬 및 부스 체크리스트 */}
        {totalCount > 0 ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-lg font-black text-gray-900">
                내가 찜한 부스 목록 <span className="text-pink-600">({totalCount})</span>
              </h2>
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                <span>정렬:</span>
                <button
                  onClick={() => setSortBy('default')}
                  className={`px-2.5 py-1 rounded-lg ${sortBy === 'default' ? 'bg-amber-400 text-amber-950 font-black' : 'hover:bg-gray-100'}`}
                >
                  담은 순
                </button>
                <button
                  onClick={() => setSortBy('floor')}
                  className={`px-2.5 py-1 rounded-lg ${sortBy === 'floor' ? 'bg-amber-400 text-amber-950 font-black' : 'hover:bg-gray-100'}`}
                >
                  층별 순
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {sortedBooths.map((booth, idx) => {
                const isDone = isCompleted(booth.id);

                return (
                  <div
                    key={booth.id}
                    className={`bg-white rounded-3xl p-5 border-2 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isDone
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-pink-100 shadow-xs hover:border-pink-300'
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      {/* 순번 */}
                      <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-800 font-black text-xs flex items-center justify-center shrink-0 mt-1 sm:mt-0">
                        {idx + 1}
                      </span>

                      {/* 완료 체크박스 */}
                      <button
                        onClick={() => toggleCompleted(booth.id)}
                        className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all shrink-0 mt-1 sm:mt-0 ${
                          isDone
                            ? 'bg-emerald-500 text-white shadow-sm'
                            : 'border-2 border-gray-300 hover:border-emerald-400 text-transparent'
                        }`}
                        aria-label={`${booth.name} 완료 여부 체크`}
                      >
                        <CheckCircle2 className="w-5 h-5 fill-current" />
                      </button>

                      {/* 이모지 & 제목 */}
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 mb-1">
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-amber-100 text-amber-900">
                            {booth.floor}층
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-700">
                            {booth.code}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-amber-600" />
                            {booth.roomName}
                          </span>
                        </div>
                        <Link
                          to={`/booths/${booth.id}`}
                          className={`font-black text-base sm:text-lg hover:text-pink-600 transition-colors ${
                            isDone ? 'line-through text-gray-400' : 'text-gray-900'
                          }`}
                        >
                          <span className="mr-2">{booth.emoji}</span>
                          {booth.name}
                        </Link>
                        <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{booth.shortDesc}</p>
                      </div>
                    </div>

                    {/* 액션 버튼들 */}
                    <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                      <Link
                        to={`/booths/${booth.id}`}
                        className="text-xs font-bold text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-xl border border-gray-200 transition-colors"
                      >
                        상세보기
                      </Link>
                      <button
                        onClick={() => toggleFavorite(booth.id)}
                        className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                        title="코스에서 빼기"
                        aria-label={`${booth.name} 코스에서 빼기`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* 담은 부스가 없을 때 */
          <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-200 space-y-4">
            <span className="text-6xl block">🎒</span>
            <h3 className="text-xl font-black text-gray-800">아직 담긴 부스가 없어요!</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              부스 목록이나 배치도에서 마음에 드는 부스의 하트(💖)를 눌러 나만의 체험 코스를 계획해보세요.
            </p>
            <div className="pt-2">
              <Link
                to="/booths"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-amber-950 font-black rounded-2xl shadow-md hover:bg-amber-500 transition-transform active:scale-95 text-base"
              >
                <span>부스 둘러보고 담으러 가기</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ================= A4 1쪽 전용 인쇄 양식 (print-only) ================= */}
      <div className="print-only">
        {/* 인쇄 상단 헤더 */}
        <div className="border-b-2 border-black pb-3 mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-black">2026 연성초 꿈마당 진로체험 코스 활동지</h1>
            <p className="text-xs text-gray-700 mt-0.5">
              일시: 2026. 10. 15.(목) 09:10~12:20 | 슬로건: “꿈을 만나고, 꿈을 체험하다”
            </p>
          </div>
          <div className="text-right border border-black p-2 rounded text-xs min-w-[200px]">
            <div className="flex justify-between gap-3">
              <span>{studentInfo.grade || '___'} 학년</span>
              <span>{studentInfo.classNum || '___'} 반</span>
              <span>{studentInfo.num || '___'} 번</span>
            </div>
            <div className="mt-1 font-bold">
              성명: {studentInfo.name || '________________'}
            </div>
          </div>
        </div>

        {/* 안내문 */}
        <div className="bg-gray-100 p-2 rounded border border-gray-400 text-xs mb-3">
          <strong>※ 체험 참여 원칙</strong>: 1~3학년은 외부부스(특수분장/메이크업) 필수, 3~6학년은 흡연예방(이음1실) 필수입니다.
          부스 체험 후 운영 학생이나 선생님께 확인 스탬프를 받으세요!
        </div>

        {/* 부스 체크리스트 표 */}
        <table className="w-full text-xs border-collapse border border-black mb-4">
          <thead>
            <tr className="bg-gray-200 text-black border-b border-black">
              <th className="border border-black p-1.5 w-8 text-center">순번</th>
              <th className="border border-black p-1.5 w-12 text-center">층</th>
              <th className="border border-black p-1.5 w-24 text-center">부스코드</th>
              <th className="border border-black p-1.5 text-left">부스명 및 활동 내용</th>
              <th className="border border-black p-1.5 w-32 text-center">위치</th>
              <th className="border border-black p-1.5 w-16 text-center">확인 도장</th>
            </tr>
          </thead>
          <tbody>
            {sortedBooths.map((booth, idx) => (
              <tr key={booth.id} className="border-b border-gray-400">
                <td className="border border-black p-1.5 text-center font-bold">{idx + 1}</td>
                <td className="border border-black p-1.5 text-center font-bold">{booth.floor}층</td>
                <td className="border border-black p-1.5 text-center">{booth.code}</td>
                <td className="border border-black p-1.5">
                  <div className="font-black text-[11pt]">{booth.name}</div>
                  <div className="text-[9pt] text-gray-700">{booth.shortDesc}</div>
                </td>
                <td className="border border-black p-1.5 text-center text-[9pt]">{booth.roomName}</td>
                <td className="border border-black p-1.5 text-center h-12 w-16">
                  {isCompleted(booth.id) ? (
                    <span className="font-bold text-xs">【완료】</span>
                  ) : (
                    <span className="text-gray-400 text-[9pt]">(도장)</span>
                  )}
                </td>
              </tr>
            ))}
            {/* 만약 담은 부스가 6개 미만이면 공란 행 추가해서 A4 비율 맞춤 */}
            {Array.from({ length: Math.max(0, 6 - sortedBooths.length) }).map((_, i) => (
              <tr key={`blank-${i}`} className="border-b border-gray-400 h-12">
                <td className="border border-black p-1.5 text-center text-gray-400">{sortedBooths.length + i + 1}</td>
                <td className="border border-black p-1.5 text-center text-gray-300">-</td>
                <td className="border border-black p-1.5 text-center text-gray-300">-</td>
                <td className="border border-black p-1.5 text-gray-300">자유 추가 체험 부스 기록</td>
                <td className="border border-black p-1.5 text-center text-gray-300">-</td>
                <td className="border border-black p-1.5 text-center text-gray-300">(도장)</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 당일 활동 소감 간단 메모란 */}
        <div className="border border-black p-2 rounded text-xs">
          <strong className="block mb-1">📝 오늘 꿈마당에서 가장 기억에 남는 체험과 나의 꿈 한 줄 적기:</strong>
          <div className="border-b border-dotted border-gray-400 h-6"></div>
          <div className="border-b border-dotted border-gray-400 h-6"></div>
        </div>

        {/* 인쇄 하단 */}
        <div className="mt-3 text-[9pt] text-gray-600 text-center">
          연성초등학교 교육과정운영부 진로체험주간 | 본 활동지는 당일 목걸이 네임택 또는 보조가방에 넣어 지참하세요.
        </div>
      </div>
    </div>
  );
};
