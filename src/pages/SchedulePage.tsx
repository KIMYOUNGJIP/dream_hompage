import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Shield
} from 'lucide-react';
import { DETAILED_TIME_SLOTS, getCustomTimeline } from '../data/schedule';

export const SchedulePage: React.FC = () => {
  // 학년 및 조 상태
  const [selectedGrade, setSelectedGrade] = useState<number>(1);
  const [selectedGroup, setSelectedGroup] = useState<'A' | 'B'>('A');
  const [viewMode, setViewMode] = useState<'personal' | 'overall'>('personal');

  const customTimeline = getCustomTimeline(selectedGrade, selectedGroup);

  return (
    <div className="space-y-8 pb-16">
      {/* 상단 헤더 배너 */}
      <div className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 rounded-3xl p-6 sm:p-8 shadow-md border-2 border-emerald-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-emerald-950 font-extrabold text-xs mb-2">
              <Calendar className="w-3.5 h-3.5 text-emerald-700" />
              <span>2026년 10월 15일(목) 09:10 ~ 12:20</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">맞춤 시간표 ⏰</h1>
            <p className="text-sm sm:text-base text-emerald-950 font-medium mt-1">
              내 학년과 조를 선택하면 <span className="font-extrabold underline decoration-emerald-600">오늘의 나만의 일정</span>을 한눈에 볼 수 있어요!
            </p>
          </div>

          {/* 뷰 모드 전환 (개인 맞춤 vs 전체 타임테이블) */}
          <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-2xl border border-emerald-200 flex items-center shrink-0 shadow-inner">
            <button
              onClick={() => setViewMode('personal')}
              className={`px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all ${
                viewMode === 'personal'
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              내 맞춤 타임라인
            </button>
            <button
              onClick={() => setViewMode('overall')}
              className={`px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all ${
                viewMode === 'overall'
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              전체 타임테이블 표
            </button>
          </div>
        </div>
      </div>

      {/* 개인 맞춤 모드일 때의 학년 / 조 선택 컨트롤 바 */}
      {viewMode === 'personal' && (
        <div className="bg-white rounded-3xl p-6 border-2 border-emerald-100 shadow-sm space-y-5">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-gray-400">1단계 : 나의 학년 선택</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                현재 선택: {selectedGrade}학년
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
              {[1, 2, 3, 4, 5, 6].map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`py-3 px-4 rounded-2xl font-black text-base transition-all flex flex-col items-center justify-center gap-0.5 ${
                    selectedGrade === grade
                      ? 'bg-emerald-500 text-white shadow-md scale-105 ring-2 ring-emerald-300'
                      : 'bg-gray-50 hover:bg-emerald-50/60 text-gray-700 border border-gray-200'
                  }`}
                >
                  <span className="text-sm sm:text-base">{grade}학년</span>
                  <span className="text-[10px] font-normal opacity-80">
                    {grade <= 2 ? '저학년' : grade === 3 ? '중학년' : '고학년'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 4, 5, 6학년일 경우 A조 / B조 선택 활성화 */}
          {selectedGrade >= 4 && (
            <div className="pt-4 border-t border-gray-100 animate-gentle">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-black text-gray-400">2단계 : 운영/체험 조 선택</span>
                <span className="text-xs text-amber-700 font-extrabold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  고학년은 A/B조 교대로 부스를 운영합니다
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedGroup('A')}
                  className={`p-4 rounded-2xl font-black text-left transition-all border-2 ${
                    selectedGroup === 'A'
                      ? 'bg-amber-50 border-amber-400 text-amber-950 shadow-md ring-2 ring-amber-300/50'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg">🅰️ A조 학생</span>
                    {selectedGroup === 'A' && (
                      <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">선택됨</span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-gray-500">
                    1부(09:30) <span className="font-bold text-amber-700">체험 활동</span> → 2부(10:40) <span className="font-bold text-blue-700">부스 운영</span>
                  </p>
                </button>

                <button
                  onClick={() => setSelectedGroup('B')}
                  className={`p-4 rounded-2xl font-black text-left transition-all border-2 ${
                    selectedGroup === 'B'
                      ? 'bg-amber-50 border-amber-400 text-amber-950 shadow-md ring-2 ring-amber-300/50'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg">🅱️ B조 학생</span>
                    {selectedGroup === 'B' && (
                      <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">선택됨</span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-gray-500">
                    1부(09:30) <span className="font-bold text-blue-700">부스 운영</span> → 2부(10:40) <span className="font-bold text-amber-700">체험 활동</span>
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 뷰 1: 개인 맞춤 타임라인 */}
      {viewMode === 'personal' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-lg sm:text-xl font-black text-gray-900 flex items-center gap-2">
              <span>📌</span>
              <span>
                {selectedGrade}학년 {selectedGrade >= 4 ? `${selectedGroup}조 ` : ''}맞춤 일정표
              </span>
            </h2>
            <span className="text-xs font-bold text-gray-500">총 {customTimeline.length}개 세션</span>
          </div>

          <div className="space-y-4">
            {customTimeline.map((item, idx) => {
              const isHighlight = item.highlight;
              const isDuty = item.type === 'booth_duty';
              const isBreak = item.type === 'break';

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-5 sm:p-6 border-2 transition-all relative overflow-hidden ${
                    isHighlight
                      ? 'border-emerald-300 shadow-md ring-1 ring-emerald-200'
                      : isDuty
                      ? 'border-blue-200 bg-blue-50/20'
                      : isBreak
                      ? 'border-gray-200 bg-gray-50/60'
                      : 'border-gray-100 shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-black bg-emerald-100 text-emerald-900 px-3 py-1 rounded-xl">
                        <Clock className="w-3.5 h-3.5" />
                        {item.time}
                      </span>
                      <span className="text-xs font-bold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-xl">
                        📍 {item.floorBadge}
                      </span>
                    </div>

                    {isDuty && (
                      <span className="inline-block text-xs font-black bg-blue-500 text-white px-2.5 py-0.5 rounded-full shrink-0">
                        우리 반 부스 지킴이
                      </span>
                    )}
                    {isHighlight && (
                      <span className="inline-block text-xs font-black bg-amber-400 text-amber-950 px-2.5 py-0.5 rounded-full shrink-0">
                        ★ 핵심 활동
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-gray-900 mt-2">{item.title}</h3>
                  <p className="text-sm font-medium text-gray-600 mt-1 whitespace-pre-line leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 뷰 2: 전체 타임테이블 표 (계획서 참고2 타임테이블 100% 반영) */}
      {viewMode === 'overall' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm overflow-x-auto">
            <div className="mb-4">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                <span>📊</span>
                <span>전교생 종합 타임테이블 (20분 단위)</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                학교 운영 계획서의 참고2 타임테이블을 표준 표 형식으로 제공합니다.
              </p>
            </div>

            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-emerald-50 text-emerald-950 border-b-2 border-emerald-200">
                  <th className="p-3 font-extrabold text-center w-28">구분 / 부스</th>
                  <th className="p-3 font-extrabold text-center">외부1 (특수분장)</th>
                  <th className="p-3 font-extrabold text-center">외부2 (메이크업)</th>
                  <th className="p-3 font-extrabold text-center">흡연예방 (가드너스)</th>
                  <th className="p-3 font-extrabold text-center">학부모 및 학생 부스 (4·5층)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {DETAILED_TIME_SLOTS.map((slot, idx) => {
                  const isBreak = slot.time.includes('10:30 ~ 10:40');
                  return (
                    <tr
                      key={idx}
                      className={isBreak ? 'bg-amber-50/80 font-bold' : idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                    >
                      <td className="p-3 font-black text-center text-gray-800 bg-gray-50/90 whitespace-nowrap">
                        {slot.time}
                      </td>
                      <td className="p-3 text-center text-gray-700">{slot.external1}</td>
                      <td className="p-3 text-center text-gray-700">{slot.external2}</td>
                      <td className="p-3 text-center text-gray-700">{slot.smoking}</td>
                      <td className="p-3 text-center text-gray-700 font-medium">
                        <div className="space-y-0.5 text-xs">
                          <div>1학년: {slot.grade1}</div>
                          <div>2학년: {slot.grade2}</div>
                          <div>3학년: {slot.grade3}</div>
                          <div className="text-indigo-700 font-bold">4~6학년 A조: {slot.seniorA}</div>
                          <div className="text-amber-800 font-bold">4~6학년 B조: {slot.seniorB}</div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 참여 원칙 카드 */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-6 sm:p-8 border border-blue-200/80 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-blue-900">
          <Shield className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-black">진로의 날 참여 원칙 안내</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
          <div className="bg-white/80 p-3.5 rounded-2xl border border-blue-100">
            <span className="font-extrabold text-blue-900 block mb-1">① 1, 2, 3학년 필수 부스</span>
            꿈JOB마당(특수분장, 메이크업) 외부 부스는 1~3학년 학생 모두 필수 체험합니다.
          </div>
          <div className="bg-white/80 p-3.5 rounded-2xl border border-blue-100">
            <span className="font-extrabold text-blue-900 block mb-1">② 4, 5, 6학년 외부 부스 선택</span>
            고학년 학생들은 외부 전문 부스 중 희망하는 부스를 선택하여 체험합니다.
          </div>
          <div className="bg-white/80 p-3.5 rounded-2xl border border-blue-100">
            <span className="font-extrabold text-blue-900 block mb-1">③ 흡연예방 부스 안내</span>
            꿈건강마당(흡연예방)은 3, 4, 5, 6학년 필수 체험 부스이며 1, 2학년도 희망 시 체험 가능합니다.
          </div>
          <div className="bg-white/80 p-3.5 rounded-2xl border border-blue-100">
            <span className="font-extrabold text-blue-900 block mb-1">④ 고학년 A조/B조 교대 원칙</span>
            4, 5, 6학년은 1부와 2부로 나뉘어 체험 활동과 본인 학급 부스 운영을 교대로 수행합니다.
          </div>
        </div>
      </div>
    </div>
  );
};
