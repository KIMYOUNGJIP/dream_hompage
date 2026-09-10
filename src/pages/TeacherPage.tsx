import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Tv, 
  CheckSquare, 
  Square, 
  AlertTriangle 
} from 'lucide-react';
import { TEACHER_GUIDE } from '../data/teacherGuide';

export const TeacherPage: React.FC = () => {
  // TV / 전자칠판 대형 화면 모드 (글자 크기 및 대비 확대)
  const [tvMode, setTvMode] = useState<boolean>(false);

  // 역할 분담 체크 상태 (localStorage)
  const [checkedRoles, setCheckedRoles] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('teacher_roles_checked');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 준비물 체크 상태 (localStorage)
  const [checkedSupplies, setCheckedSupplies] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('teacher_supplies_checked');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('teacher_roles_checked', JSON.stringify(checkedRoles));
    } catch {}
  }, [checkedRoles]);

  useEffect(() => {
    try {
      localStorage.setItem('teacher_supplies_checked', JSON.stringify(checkedSupplies));
    } catch {}
  }, [checkedSupplies]);

  const toggleRoleCheck = (id: string) => {
    setCheckedRoles((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSupplyCheck = (id: string) => {
    setCheckedSupplies((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={`space-y-8 pb-16 transition-all ${tvMode ? 'text-lg max-w-7xl mx-auto' : ''}`}>
      {/* 상단 교사용 헤더 */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-2 right-4 text-7xl opacity-10 pointer-events-none select-none">👩‍🏫</div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-purple-100 font-extrabold text-xs mb-2 backdrop-blur-sm">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-300" />
              <span>교원 전용 운영 대시보드</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              {TEACHER_GUIDE.title}
            </h1>
            <p className="text-sm sm:text-base text-purple-200 mt-1 font-medium">
              TV 및 전자칠판에 띄워 학생들에게 안전 수칙과 진행 절차를 안내할 수 있습니다.
            </p>
          </div>

          {/* 전자칠판 TV 모드 토글 */}
          <button
            onClick={() => setTvMode(!tvMode)}
            className={`px-5 py-3 rounded-2xl font-black text-sm sm:text-base transition-all flex items-center gap-2 shadow-md shrink-0 ${
              tvMode
                ? 'bg-amber-400 text-amber-950 scale-105 ring-4 ring-amber-300/40'
                : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
            }`}
          >
            <Tv className="w-5 h-5" />
            <span>{tvMode ? '📺 전자칠판 대형 모드 ON' : '📺 전자칠판 대형 모드 켜기'}</span>
          </button>
        </div>
      </div>

      {/* 1. 학급 안내 시 강조 포인트 (아침 09:10~09:30 안내용) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-black">
            📢
          </div>
          <div>
            <h2 className={`font-black text-gray-900 ${tvMode ? 'text-2xl' : 'text-xl'}`}>
              학급 사전 안전교육 핵심 안내 사항 (09:10 ~ 09:30)
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">교실에서 학생들에게 꼭 강조해야 할 4대 핵심 지침입니다.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TEACHER_GUIDE.keyAnnouncements.map((item, idx) => (
            <div
              key={item.id}
              className={`p-5 rounded-2xl border-2 transition-all ${
                tvMode
                  ? 'bg-purple-50/40 border-purple-200 p-6'
                  : 'bg-gray-50/70 hover:bg-purple-50/30 border-gray-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-xl bg-purple-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <h3 className={`font-black text-gray-900 ${tvMode ? 'text-lg text-purple-950' : 'text-base'}`}>
                  {item.title}
                </h3>
              </div>
              <p className={`text-gray-700 leading-relaxed font-medium ${tvMode ? 'text-base' : 'text-sm'}`}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 안전 유의사항 수칙 */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-100 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-black">
            ⚠️
          </div>
          <div>
            <h2 className={`font-black text-gray-900 ${tvMode ? 'text-2xl' : 'text-xl'}`}>
              행사 안전 관리 및 사고 예방 수칙
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">밀집 구역 질서 유지 및 응급 상황 대응 요령입니다.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TEACHER_GUIDE.safetyGuidelines.map((item, idx) => (
            <div key={idx} className="bg-rose-50/50 p-5 rounded-2xl border border-rose-200/80">
              <div className="flex items-center gap-2 mb-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <h4 className="font-black text-rose-900 text-sm sm:text-base">{item.area}</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">{item.rule}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 고학년 부스 운영 역할 분담표 (체크 가능) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-100 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
              👥
            </div>
            <div>
              <h2 className={`font-black text-gray-900 ${tvMode ? 'text-2xl' : 'text-xl'}`}>
                고학년(4·5·6학년) 부스 운영 역할 분담 체크리스트
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                학급당 필수 배정 5대 역할 점검표입니다. 완료된 역할을 클릭하여 체크하세요.
              </p>
            </div>
          </div>

          <div className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200 shrink-0">
            완료: {checkedRoles.length} / {TEACHER_GUIDE.roles.length}개
          </div>
        </div>

        <div className="space-y-3">
          {TEACHER_GUIDE.roles.map((role) => {
            const isDone = checkedRoles.includes(role.id);

            return (
              <div
                key={role.id}
                onClick={() => toggleRoleCheck(role.id)}
                className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                  isDone
                    ? 'bg-blue-50/40 border-blue-300 ring-1 ring-blue-200'
                    : 'bg-gray-50/60 hover:bg-blue-50/20 border-gray-200'
                }`}
              >
                <div className="mt-0.5">
                  {isDone ? (
                    <CheckSquare className="w-6 h-6 text-blue-600 fill-blue-100" />
                  ) : (
                    <Square className="w-6 h-6 text-gray-400" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className={`font-black ${isDone ? 'text-blue-950 line-through' : 'text-gray-900'} text-base`}>
                      {role.role}
                    </h3>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-md font-bold">
                      권장 인원: {role.count}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">{role.duty}</p>
                  <p className="text-xs text-amber-700 mt-1.5 bg-amber-50/80 p-2 rounded-xl border border-amber-200/50">
                    💡 지도 팁: {role.tips}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. 부스 준비물 점검표 (체크 가능) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-100 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
              📦
            </div>
            <div>
              <h2 className={`font-black text-gray-900 ${tvMode ? 'text-2xl' : 'text-xl'}`}>
                행사 필수 준비물 점검표
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">부스 운영 전 각 학급 비치 여부를 확인하세요.</p>
            </div>
          </div>

          <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 shrink-0">
            점검 완료: {checkedSupplies.length} / {TEACHER_GUIDE.supplies.length}개
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TEACHER_GUIDE.supplies.map((sup) => {
            const isDone = checkedSupplies.includes(sup.id);

            return (
              <div
                key={sup.id}
                onClick={() => toggleSupplyCheck(sup.id)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                  isDone
                    ? 'bg-emerald-50/40 border-emerald-300'
                    : 'bg-gray-50/60 hover:bg-emerald-50/20 border-gray-200'
                }`}
              >
                <div className="mt-0.5">
                  {isDone ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                  ) : (
                    <Square className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 block">{sup.category}</span>
                  <h4 className={`font-extrabold text-sm ${isDone ? 'text-emerald-950 line-through' : 'text-gray-900'}`}>
                    {sup.item}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">{sup.checkNote}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. 행사 예산 집행 내역 요약 (계획서 제5항 반영) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
            💰
          </div>
          <div>
            <h2 className="text-xl font-black text-gray-900">꿈마당 행사 예산 집행 계획표</h2>
            <p className="text-xs sm:text-sm text-gray-500">부스 운영비 및 외부 강사비 지출 기준 안내입니다.</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-amber-50/70 border-b border-amber-200 text-amber-950">
                <th className="p-3 font-extrabold">지출 품목 내역</th>
                <th className="p-3 font-extrabold">산출 내역</th>
                <th className="p-3 font-extrabold">금액</th>
                <th className="p-3 font-extrabold">비고 (예산 과목)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {TEACHER_GUIDE.budgetSummary.map((b, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-3 font-black text-gray-800">{b.item}</td>
                  <td className="p-3 text-gray-600">{b.calculation}</td>
                  <td className="p-3 font-black text-amber-700">{b.total}</td>
                  <td className="p-3 text-gray-500 text-xs">{b.note}</td>
                </tr>
              ))}
              <tr className="bg-gray-100/70 font-black text-gray-900">
                <td className="p-3" colSpan={2}>총 합계 예산</td>
                <td className="p-3 text-base text-amber-800">5,600,000원</td>
                <td className="p-3 text-xs text-gray-500">전액 지원 완료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
