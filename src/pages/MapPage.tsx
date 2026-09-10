import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Heart, 
  ArrowRight, 
  Layers, 
  X
} from 'lucide-react';
import { BOOTHS } from '../data/booths';
import { Booth } from '../types';
import { useCourse } from '../context/CourseContext';

export const MapPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isFavorite } = useCourse();

  // 층 상태 (URL 쿼리 우선 또는 기본 4층)
  const floorParam = searchParams.get('floor');
  const highlightParam = searchParams.get('highlight');
  const [currentFloor, setCurrentFloor] = useState<4 | 5>(floorParam === '5' ? 5 : 4);
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null);

  // URL 파라미터 변경 시 층 동기화
  useEffect(() => {
    if (floorParam === '4' || floorParam === '5') {
      setCurrentFloor(parseInt(floorParam, 10) as 4 | 5);
    }
  }, [floorParam]);

  // 하이라이트 파라미터가 있으면 해당 부스 자동 선택
  useEffect(() => {
    if (highlightParam) {
      const found = BOOTHS.find((b) => b.id === highlightParam);
      if (found) {
        setSelectedBooth(found);
        setCurrentFloor(found.floor);
      }
    }
  }, [highlightParam]);

  const handleFloorChange = (floor: 4 | 5) => {
    setCurrentFloor(floor);
    setSearchParams({ floor: floor.toString() });
    setSelectedBooth(null);
  };

  const handleZoomIn = () => setZoomScale((prev) => Math.min(prev + 0.25, 2.0));
  const handleZoomOut = () => setZoomScale((prev) => Math.max(prev - 0.25, 0.75));
  const handleZoomReset = () => setZoomScale(1);

  // 층별 부스 매핑
  const boothsInFloor = BOOTHS.filter((b) => b.floor === currentFloor);

  return (
    <div className="space-y-6 pb-16">
      {/* 상단 안내 헤더 */}
      <div className="bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300 rounded-3xl p-6 sm:p-8 shadow-md border-2 border-sky-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-sky-900 font-extrabold text-xs mb-2">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>연성초등학교 4·5층 인터랙티브 평면 배치도</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">층별 배치도 🗺️</h1>
            <p className="text-sm sm:text-base text-sky-950 font-medium mt-1">
              부스를 클릭하면 상세 정보가 열립니다. <span className="font-extrabold text-pink-600">💖 내 코스 부스</span>는 노란색 테두리로 환하게 빛납니다!
            </p>
          </div>

          {/* 층 전환 탭 컨트롤 */}
          <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-2xl border border-sky-200 flex items-center shrink-0 shadow-inner">
            <button
              onClick={() => handleFloorChange(4)}
              className={`px-5 py-2.5 rounded-xl font-black text-sm sm:text-base transition-all flex items-center gap-1.5 ${
                currentFloor === 4
                  ? 'bg-amber-400 text-amber-950 shadow-md scale-102'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>4층 배치도</span>
              <span className="text-xs bg-black/10 px-1.5 py-0.5 rounded-full">4·5학년</span>
            </button>
            <button
              onClick={() => handleFloorChange(5)}
              className={`px-5 py-2.5 rounded-xl font-black text-sm sm:text-base transition-all flex items-center gap-1.5 ${
                currentFloor === 5
                  ? 'bg-amber-400 text-amber-950 shadow-md scale-102'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>5층 배치도</span>
              <span className="text-xs bg-black/10 px-1.5 py-0.5 rounded-full">6학년·외부</span>
            </button>
          </div>
        </div>
      </div>

      {/* 지도 제어 툴바 & 범례 */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-4">
        {/* 범례 */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold text-gray-600">
          <span className="text-gray-400">범례:</span>
          <span className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 text-amber-900">
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
            학생 부스
          </span>
          <span className="flex items-center gap-1 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200 text-indigo-900">
            <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block"></span>
            외부 전문기관
          </span>
          <span className="flex items-center gap-1 bg-pink-50 px-2.5 py-1 rounded-lg border border-pink-200 text-pink-900">
            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
            학부모회 부스
          </span>
          <span className="flex items-center gap-1 bg-yellow-100 px-2.5 py-1 rounded-lg border-2 border-yellow-400 text-yellow-900 font-extrabold shadow-xs">
            <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
            내 코스 부스
          </span>
        </div>

        {/* 확대 / 축소 버튼 */}
        <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl">
          <button
            onClick={handleZoomOut}
            disabled={zoomScale <= 0.75}
            className="w-8 h-8 rounded-lg bg-white disabled:opacity-40 flex items-center justify-center text-gray-700 shadow-xs hover:bg-gray-50 active:scale-95 transition-all"
            title="축소"
            aria-label="지도 축소"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="px-2 text-xs font-extrabold text-gray-600 min-w-[48px] text-center">
            {Math.round(zoomScale * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            disabled={zoomScale >= 2.0}
            className="w-8 h-8 rounded-lg bg-white disabled:opacity-40 flex items-center justify-center text-gray-700 shadow-xs hover:bg-gray-50 active:scale-95 transition-all"
            title="확대"
            aria-label="지도 확대"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomReset}
            className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-700 shadow-xs hover:bg-gray-50 active:scale-95 transition-all"
            title="기본 크기"
            aria-label="지도 기본 크기"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SVG 인터랙티브 지도 컨테이너 */}
      <div className="relative bg-white rounded-3xl border-2 border-amber-200/60 shadow-lg overflow-hidden min-h-[460px] p-2 sm:p-6 flex items-center justify-center">
        {/* 부스 선택 모달 팝업이 활성화되었을 때 지도 상단 오버레이 안내 */}
        <div
          className="w-full transition-transform duration-200 origin-center overflow-x-auto pb-4"
          style={{ transform: `scale(${zoomScale})` }}
        >
          {currentFloor === 4 ? (
            /* ==================== 4층 SVG 배치도 ==================== */
            <svg
              viewBox="0 0 1000 480"
              className="w-full h-auto min-w-[720px] select-none"
              style={{ maxHeight: '520px' }}
            >
              <defs>
                <pattern id="grid4" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                {/* 하이라이트 발광 필터 */}
                <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#F59E0B" floodOpacity="0.8" />
                </filter>
              </defs>

              {/* 배경 격자 */}
              <rect width="1000" height="480" fill="url(#grid4)" rx="16" />

              {/* 바깥 건물 외벽 */}
              <rect x="20" y="20" width="960" height="440" rx="16" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />

              {/* 복도 (상단 길목) */}
              <rect x="35" y="35" width="930" height="110" rx="8" fill="#fefce8" stroke="#fef08a" strokeWidth="2" />
              <text x="70" y="70" fill="#a16207" fontSize="16" fontWeight="bold">🚶‍♂️ 4층 중앙 복도 (우측 통행)</text>
              <text x="70" y="92" fill="#ca8a04" fontSize="12">※ 뛰지 말고 안전하게 한 줄로 이동합니다</text>

              {/* 학부모 부스 (복도 위치 - 5-1 교실 옆 중앙) */}
              {(() => {
                const boothParent = BOOTHS.find((b) => b.id === 'b-parent')!;
                const isFav = isFavorite('b-parent');
                const isHl = highlightParam === 'b-parent';
                return (
                  <g
                    onClick={() => setSelectedBooth(boothParent)}
                    className="cursor-pointer transition-all group"
                    transform="translate(360, 45)"
                  >
                    <rect
                      width="210"
                      height="85"
                      rx="12"
                      fill={isFav ? '#fdf2f8' : '#fff1f2'}
                      stroke={isFav ? '#e11d48' : '#fda4af'}
                      strokeWidth={isFav || isHl ? '3' : '2'}
                      filter={isFav || isHl ? 'url(#glow-gold)' : undefined}
                      className="group-hover:fill-rose-100 transition-colors"
                    />
                    <rect x="8" y="8" width="40" height="24" rx="6" fill="#e11d48" />
                    <text x="28" y="24" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">학부모</text>
                    <text x="56" y="24" fill="#9f1239" fontSize="13" fontWeight="bold">꿈이음마당 💝</text>
                    <text x="12" y="48" fill="#881337" fontSize="12" fontWeight="bold">학부모회 재능기부 체험</text>
                    <text x="12" y="68" fill="#be123c" fontSize="11">5-1 교실 앞 복도</text>
                    {isFav && <text x="190" y="24" fontSize="16">💖</text>}
                  </g>
                );
              })()}

              {/* 하단 방들 (교실들 & 계단) */}
              {/* 1. 학생자치실 (꿈네컷 즉석 사진관) */}
              {(() => {
                const bCouncil = BOOTHS.find((b) => b.id === 'b-council');
                const isFav = isFavorite('b-council');
                const isHl = highlightParam === 'b-council';
                return (
                  <g
                    onClick={() => bCouncil && setSelectedBooth(bCouncil)}
                    className="cursor-pointer transition-all group"
                    transform="translate(35, 160)"
                  >
                    <rect
                      width="115"
                      height="280"
                      rx="12"
                      fill={isFav ? '#fef9c3' : '#f0fdf4'}
                      stroke={isFav || isHl ? '#f59e0b' : '#86efac'}
                      strokeWidth={isFav || isHl ? '3' : '2'}
                      filter={isFav || isHl ? 'url(#glow-gold)' : undefined}
                      className="group-hover:fill-emerald-100 transition-colors"
                    />
                    <rect x="0" y="0" width="115" height="32" rx="10" fill="#16a34a" />
                    <text x="57" y="21" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">학생자치실</text>
                    
                    <text x="15" y="70" fontSize="28">📸</text>
                    <text x="12" y="105" fill="#166534" fontSize="11" fontWeight="bold">학생자치회</text>
                    <text x="12" y="128" fill="#14532d" fontSize="13" fontWeight="black">꿈네컷 사진관</text>
                    <text x="12" y="150" fill="#15803d" fontSize="10">즉석사진 촬영</text>
                    <text x="12" y="168" fill="#64748b" fontSize="10">포토카드 꾸미기</text>
                    
                    <rect x="10" y="195" width="95" height="24" rx="6" fill="#dcfce7" />
                    <text x="57" y="211" fill="#166534" fontSize="10" fontWeight="bold" textAnchor="middle">전학년 대상</text>

                    {isFav && <text x="85" y="68" fontSize="16">💖</text>}
                  </g>
                );
              })()}

              {/* 2. 일반교실 B */}
              <g transform="translate(160, 160)">
                <rect width="115" height="280" rx="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                <text x="57" y="140" fill="#64748b" fontSize="14" fontWeight="bold" textAnchor="middle">일반 교실</text>
                <text x="57" y="165" fill="#94a3b8" fontSize="12" textAnchor="middle">(비체험 구역)</text>
              </g>

              {/* 3. 중앙 계단 */}
              <g transform="translate(285, 160)">
                <rect width="90" height="280" rx="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                <text x="45" y="125" fill="#475569" fontSize="14" fontWeight="bold" textAnchor="middle">중앙 계단</text>
                <text x="45" y="150" fill="#64748b" fontSize="22" textAnchor="middle">🪜</text>
                <text x="45" y="180" fill="#64748b" fontSize="11" textAnchor="middle">5층 ↔ 4층</text>
              </g>

              {/* 4. 5-1 교실 (연성 PC방 + 드론/로봇축구) */}
              <g transform="translate(385, 160)">
                <rect width="140" height="280" rx="12" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
                <rect x="0" y="0" width="140" height="30" rx="10" fill="#3b82f6" />
                <text x="70" y="20" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">5학년 1반 교실</text>

                {/* 5-1-1 부스 (상단: 연성 PC방) */}
                {(() => {
                  const b1 = BOOTHS.find((b) => b.id === 'b5-1-1')!;
                  const isFav = isFavorite('b5-1-1');
                  const isHl = highlightParam === 'b5-1-1';
                  return (
                    <g
                      onClick={() => setSelectedBooth(b1)}
                      className="cursor-pointer transition-all group"
                      transform="translate(6, 36)"
                    >
                      <rect
                        width="128"
                        height="112"
                        rx="8"
                        fill={isFav ? '#fef9c3' : '#eff6ff'}
                        stroke={isFav || isHl ? '#f59e0b' : '#bfdbfe'}
                        strokeWidth={isFav || isHl ? '3' : '1.5'}
                        filter={isFav || isHl ? 'url(#glow-gold)' : undefined}
                        className="group-hover:fill-blue-100 transition-colors"
                      />
                      <text x="10" y="22" fontSize="16">💻</text>
                      <text x="34" y="22" fill="#1e3a8a" fontSize="11" fontWeight="bold">5-1 ① PC방</text>
                      <text x="10" y="44" fill="#1e40af" fontSize="12" fontWeight="bold">연성 PC방</text>
                      <text x="10" y="62" fill="#3b82f6" fontSize="10">바이브 코딩 게임</text>
                      <text x="10" y="80" fill="#64748b" fontSize="10">교실 앞쪽</text>
                      {isFav && <text x="108" y="22" fontSize="14">💖</text>}
                    </g>
                  );
                })()}

                {/* 5-1-2 부스 (하단: 드론체험 / 로봇축구) */}
                {(() => {
                  const b2 = BOOTHS.find((b) => b.id === 'b5-1-2')!;
                  const isFav = isFavorite('b5-1-2');
                  const isHl = highlightParam === 'b5-1-2';
                  return (
                    <g
                      onClick={() => setSelectedBooth(b2)}
                      className="cursor-pointer transition-all group"
                      transform="translate(6, 156)"
                    >
                      <rect
                        width="128"
                        height="114"
                        rx="8"
                        fill={isFav ? '#fef9c3' : '#eff6ff'}
                        stroke={isFav || isHl ? '#f59e0b' : '#bfdbfe'}
                        strokeWidth={isFav || isHl ? '3' : '1.5'}
                        filter={isFav || isHl ? 'url(#glow-gold)' : undefined}
                        className="group-hover:fill-blue-100 transition-colors"
                      />
                      <text x="10" y="22" fontSize="16">🛸</text>
                      <text x="34" y="22" fill="#1e3a8a" fontSize="11" fontWeight="bold">5-1 ② 드론/로봇</text>
                      <text x="10" y="44" fill="#1e40af" fontSize="12" fontWeight="bold">드론/로봇축구</text>
                      <text x="10" y="62" fill="#3b82f6" fontSize="10">비행 & 로봇 경기</text>
                      <text x="10" y="80" fill="#64748b" fontSize="10">교실 뒤쪽</text>
                      {isFav && <text x="108" y="22" fontSize="14">💖</text>}
                    </g>
                  );
                })()}
              </g>

              {/* 5. 5-2 교실 (생활용품 만들기 + 실내 스포츠) */}
              <g transform="translate(535, 160)">
                <rect width="140" height="280" rx="12" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
                <rect x="0" y="0" width="140" height="30" rx="10" fill="#10b981" />
                <text x="70" y="20" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">5학년 2반 교실</text>

                {/* 5-2-1 부스 (상단: 생활용품 만들기) */}
                {(() => {
                  const b1 = BOOTHS.find((b) => b.id === 'b5-2-1')!;
                  const isFav = isFavorite('b5-2-1');
                  const isHl = highlightParam === 'b5-2-1';
                  return (
                    <g
                      onClick={() => setSelectedBooth(b1)}
                      className="cursor-pointer transition-all group"
                      transform="translate(6, 36)"
                    >
                      <rect
                        width="128"
                        height="112"
                        rx="8"
                        fill={isFav ? '#fef9c3' : '#ecfdf5'}
                        stroke={isFav || isHl ? '#f59e0b' : '#a7f3d0'}
                        strokeWidth={isFav || isHl ? '3' : '1.5'}
                        filter={isFav || isHl ? 'url(#glow-gold)' : undefined}
                        className="group-hover:fill-emerald-100 transition-colors"
                      />
                      <text x="10" y="22" fontSize="16">🪞</text>
                      <text x="34" y="22" fill="#065f46" fontSize="11" fontWeight="bold">5-2 ① 생활용품</text>
                      <text x="10" y="44" fill="#047857" fontSize="12" fontWeight="bold">생활용품 만들기</text>
                      <text x="10" y="62" fill="#059669" fontSize="10">팔찌/거울/책갈피</text>
                      <text x="10" y="80" fill="#64748b" fontSize="10">교실 앞쪽</text>
                      {isFav && <text x="108" y="22" fontSize="14">💖</text>}
                    </g>
                  );
                })()}

                {/* 5-2-2 부스 (하단: 실내 스포츠 체험) */}
                {(() => {
                  const b2 = BOOTHS.find((b) => b.id === 'b5-2-2')!;
                  const isFav = isFavorite('b5-2-2');
                  const isHl = highlightParam === 'b5-2-2';
                  return (
                    <g
                      onClick={() => setSelectedBooth(b2)}
                      className="cursor-pointer transition-all group"
                      transform="translate(6, 156)"
                    >
                      <rect
                        width="128"
                        height="114"
                        rx="8"
                        fill={isFav ? '#fef9c3' : '#ecfdf5'}
                        stroke={isFav || isHl ? '#f59e0b' : '#a7f3d0'}
                        strokeWidth={isFav || isHl ? '3' : '1.5'}
                        filter={isFav || isHl ? 'url(#glow-gold)' : undefined}
                        className="group-hover:fill-emerald-100 transition-colors"
                      />
                      <text x="10" y="22" fontSize="16">🎯</text>
                      <text x="34" y="22" fill="#065f46" fontSize="11" fontWeight="bold">5-2 ② 스포츠</text>
                      <text x="10" y="44" fill="#047857" fontSize="12" fontWeight="bold">실내 스포츠</text>
                      <text x="10" y="62" fill="#059669" fontSize="10">협동 놀이/미션</text>
                      <text x="10" y="80" fill="#64748b" fontSize="10">교실 뒤쪽</text>
                      {isFav && <text x="108" y="22" fontSize="14">💖</text>}
                    </g>
                  );
                })()}
              </g>

              {/* 6. 4-1 교실 (뷰티 아티스트 + 전통공예) */}
              <g transform="translate(685, 160)">
                <rect width="140" height="280" rx="12" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
                <rect x="0" y="0" width="140" height="30" rx="10" fill="#f59e0b" />
                <text x="70" y="20" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">4학년 1반 교실</text>

                {/* 4-1-1 부스 (상단: 뷰티 아티스트) */}
                {(() => {
                  const b1 = BOOTHS.find((b) => b.id === 'b4-1-1')!;
                  const isFav = isFavorite('b4-1-1');
                  const isHl = highlightParam === 'b4-1-1';
                  return (
                    <g
                      onClick={() => setSelectedBooth(b1)}
                      className="cursor-pointer transition-all group"
                      transform="translate(6, 36)"
                    >
                      <rect
                        width="128"
                        height="112"
                        rx="8"
                        fill={isFav ? '#fef9c3' : '#fffbeb'}
                        stroke={isFav || isHl ? '#f59e0b' : '#fde68a'}
                        strokeWidth={isFav || isHl ? '3' : '1.5'}
                        filter={isFav || isHl ? 'url(#glow-gold)' : undefined}
                        className="group-hover:fill-amber-100 transition-colors"
                      />
                      <text x="10" y="22" fontSize="16">💅</text>
                      <text x="34" y="22" fill="#92400e" fontSize="11" fontWeight="bold">4-1 ① 뷰티</text>
                      <text x="10" y="44" fill="#b45309" fontSize="12" fontWeight="bold">뷰티 아티스트</text>
                      <text x="10" y="62" fill="#d97706" fontSize="10">네일/타투/페이스</text>
                      <text x="10" y="80" fill="#64748b" fontSize="10">교실 앞쪽</text>
                      {isFav && <text x="108" y="22" fontSize="14">💖</text>}
                    </g>
                  );
                })()}

                {/* 4-1-2 부스 (하단: 전통공예 및 놀이) */}
                {(() => {
                  const b2 = BOOTHS.find((b) => b.id === 'b4-1-2')!;
                  const isFav = isFavorite('b4-1-2');
                  const isHl = highlightParam === 'b4-1-2';
                  return (
                    <g
                      onClick={() => setSelectedBooth(b2)}
                      className="cursor-pointer transition-all group"
                      transform="translate(6, 156)"
                    >
                      <rect
                        width="128"
                        height="114"
                        rx="8"
                        fill={isFav ? '#fef9c3' : '#fffbeb'}
                        stroke={isFav || isHl ? '#f59e0b' : '#fde68a'}
                        strokeWidth={isFav || isHl ? '3' : '1.5'}
                        filter={isFav || isHl ? 'url(#glow-gold)' : undefined}
                        className="group-hover:fill-amber-100 transition-colors"
                      />
                      <text x="10" y="22" fontSize="16">🪵</text>
                      <text x="34" y="22" fill="#92400e" fontSize="11" fontWeight="bold">4-1 ② 전통공예</text>
                      <text x="10" y="44" fill="#b45309" fontSize="12" fontWeight="bold">전통공예/놀이</text>
                      <text x="10" y="62" fill="#d97706" fontSize="10">나무팽이 만들기</text>
                      <text x="10" y="80" fill="#64748b" fontSize="10">교실 뒤쪽</text>
                      {isFav && <text x="108" y="22" fontSize="14">💖</text>}
                    </g>
                  );
                })()}
              </g>

              {/* 7. 4-2 교실 (디자이너 + 클레이아트) */}
              <g transform="translate(835, 160)">
                <rect width="140" height="280" rx="12" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
                <rect x="0" y="0" width="140" height="30" rx="10" fill="#ea580c" />
                <text x="70" y="20" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">4학년 2반 교실</text>

                {/* 4-2-1 부스 (상단: 디자이너) */}
                {(() => {
                  const b1 = BOOTHS.find((b) => b.id === 'b4-2-1')!;
                  const isFav = isFavorite('b4-2-1');
                  const isHl = highlightParam === 'b4-2-1';
                  return (
                    <g
                      onClick={() => setSelectedBooth(b1)}
                      className="cursor-pointer transition-all group"
                      transform="translate(6, 36)"
                    >
                      <rect
                        width="128"
                        height="112"
                        rx="8"
                        fill={isFav ? '#fef9c3' : '#fff7ed'}
                        stroke={isFav || isHl ? '#f59e0b' : '#fed7aa'}
                        strokeWidth={isFav || isHl ? '3' : '1.5'}
                        filter={isFav || isHl ? 'url(#glow-gold)' : undefined}
                        className="group-hover:fill-orange-100 transition-colors"
                      />
                      <text x="10" y="22" fontSize="16">✨</text>
                      <text x="34" y="22" fill="#9a3412" fontSize="11" fontWeight="bold">4-2 ① 디자이너</text>
                      <text x="10" y="44" fill="#c2410c" fontSize="12" fontWeight="bold">빛나는 디자이너</text>
                      <text x="10" y="62" fill="#ea580c" fontSize="10">비즈볼펜/키링</text>
                      <text x="10" y="80" fill="#64748b" fontSize="10">교실 앞쪽</text>
                      {isFav && <text x="108" y="22" fontSize="14">💖</text>}
                    </g>
                  );
                })()}

                {/* 4-2-2 부스 (하단: 클레이 아트) */}
                {(() => {
                  const b2 = BOOTHS.find((b) => b.id === 'b4-2-2')!;
                  const isFav = isFavorite('b4-2-2');
                  const isHl = highlightParam === 'b4-2-2';
                  return (
                    <g
                      onClick={() => setSelectedBooth(b2)}
                      className="cursor-pointer transition-all group"
                      transform="translate(6, 156)"
                    >
                      <rect
                        width="128"
                        height="114"
                        rx="8"
                        fill={isFav ? '#fef9c3' : '#fff7ed'}
                        stroke={isFav || isHl ? '#f59e0b' : '#fed7aa'}
                        strokeWidth={isFav || isHl ? '3' : '1.5'}
                        filter={isFav || isHl ? 'url(#glow-gold)' : undefined}
                        className="group-hover:fill-orange-100 transition-colors"
                      />
                      <text x="10" y="22" fontSize="16">🍪</text>
                      <text x="34" y="22" fill="#9a3412" fontSize="11" fontWeight="bold">4-2 ② 클레이</text>
                      <text x="10" y="44" fill="#c2410c" fontSize="12" fontWeight="bold">클레이 아트</text>
                      <text x="10" y="62" fill="#ea580c" fontSize="10">커피/슈가쿠키</text>
                      <text x="10" y="80" fill="#64748b" fontSize="10">교실 뒤쪽</text>
                      {isFav && <text x="108" y="22" fontSize="14">💖</text>}
                    </g>
                  );
                })()}
              </g>
            </svg>
          ) : (
            /* ==================== 5층 SVG 배치도 ==================== */
            <svg
              viewBox="0 0 1000 480"
              className="w-full h-auto min-w-[720px] select-none"
              style={{ maxHeight: '520px' }}
            >
              <defs>
                <pattern id="grid5" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <filter id="glow-gold5" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#F59E0B" floodOpacity="0.8" />
                </filter>
              </defs>

              {/* 배경 격자 */}
              <rect width="1000" height="480" fill="url(#grid5)" rx="16" />

              {/* 바깥 건물 외벽 */}
              <rect x="20" y="20" width="960" height="440" rx="16" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />

              {/* 복도 (상단 길목) */}
              <rect x="35" y="35" width="930" height="110" rx="8" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="2" />
              <text x="70" y="70" fill="#0369a1" fontSize="16" fontWeight="bold">🚶‍♂️ 5층 중앙 복도 (우측 통행)</text>
              <text x="70" y="92" fill="#0284c7" fontSize="12">※ 6학년 부스 및 외부 전문 부스가 운영되는 층입니다</text>

              {/* 하단 방들 (좌 -> 우: 외부1, 외부2, 중앙계단, 6-1, 6-2, 흡연예방) */}
              {/* 1. 외부부스 1: 꿈JOB마당 특수분장 (동아리 1실) */}
              {(() => {
                const bJob = BOOTHS.find((b) => b.id === 'b-job-1')!;
                const isFav = isFavorite('b-job-1');
                const isHl = highlightParam === 'b-job-1';
                return (
                  <g
                    onClick={() => setSelectedBooth(bJob)}
                    className="cursor-pointer transition-all group"
                    transform="translate(35, 160)"
                  >
                    <rect
                      width="155"
                      height="280"
                      rx="12"
                      fill={isFav ? '#fef9c3' : '#ede9fe'}
                      stroke={isFav || isHl ? '#f59e0b' : '#c4b5fd'}
                      strokeWidth={isFav || isHl ? '3' : '2'}
                      filter={isFav || isHl ? 'url(#glow-gold5)' : undefined}
                      className="group-hover:fill-purple-100 transition-colors"
                    />
                    <rect x="0" y="0" width="155" height="32" rx="10" fill="#7c3aed" />
                    <text x="77" y="21" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">동아리 1실 (외부)</text>
                    <text x="15" y="65" fontSize="26">🎭</text>
                    <text x="15" y="95" fill="#5b21b6" fontSize="13" fontWeight="bold">외부부스 1</text>
                    <text x="15" y="120" fill="#4c1d95" fontSize="15" fontWeight="black">특수분장</text>
                    <text x="15" y="142" fill="#6d28d9" fontSize="11">페이스페인팅/상처</text>
                    <text x="15" y="170" fill="#7c3aed" fontSize="11" fontWeight="bold">한국미래진로센터</text>
                    <rect x="15" y="190" width="125" height="24" rx="6" fill="#f5d0fe" />
                    <text x="77" y="206" fill="#86198f" fontSize="10" fontWeight="bold" textAnchor="middle">1·2·3학년 필수</text>
                    {isFav && <text x="120" y="65" fontSize="18">💖</text>}
                  </g>
                );
              })()}

              {/* 2. 외부부스 2: 꿈JOB마당 메이크업 (동아리 2실) */}
              {(() => {
                const bJob = BOOTHS.find((b) => b.id === 'b-job-1')!;
                const isFav = isFavorite('b-job-1');
                const isHl = highlightParam === 'b-job-1';
                return (
                  <g
                    onClick={() => setSelectedBooth(bJob)}
                    className="cursor-pointer transition-all group"
                    transform="translate(200, 160)"
                  >
                    <rect
                      width="155"
                      height="280"
                      rx="12"
                      fill={isFav ? '#fef9c3' : '#ede9fe'}
                      stroke={isFav || isHl ? '#f59e0b' : '#c4b5fd'}
                      strokeWidth={isFav || isHl ? '3' : '2'}
                      filter={isFav || isHl ? 'url(#glow-gold5)' : undefined}
                      className="group-hover:fill-purple-100 transition-colors"
                    />
                    <rect x="0" y="0" width="155" height="32" rx="10" fill="#7c3aed" />
                    <text x="77" y="21" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">동아리 2실 (외부)</text>
                    <text x="15" y="65" fontSize="26">💄</text>
                    <text x="15" y="95" fill="#5b21b6" fontSize="13" fontWeight="bold">외부부스 2</text>
                    <text x="15" y="120" fill="#4c1d95" fontSize="15" fontWeight="black">메이크업 아티스트</text>
                    <text x="15" y="142" fill="#6d28d9" fontSize="11">피부 톤 진단/스타일</text>
                    <text x="15" y="170" fill="#7c3aed" fontSize="11" fontWeight="bold">한국미래진로센터</text>
                    <rect x="15" y="190" width="125" height="24" rx="6" fill="#f5d0fe" />
                    <text x="77" y="206" fill="#86198f" fontSize="10" fontWeight="bold" textAnchor="middle">1·2·3학년 필수</text>
                    {isFav && <text x="120" y="65" fontSize="18">💖</text>}
                  </g>
                );
              })()}

              {/* 3. 중앙 계단 */}
              <g transform="translate(365, 160)">
                <rect width="80" height="280" rx="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                <text x="40" y="125" fill="#475569" fontSize="13" fontWeight="bold" textAnchor="middle">중앙 계단</text>
                <text x="40" y="150" fill="#64748b" fontSize="22" textAnchor="middle">🪜</text>
                <text x="40" y="180" fill="#64748b" fontSize="11" textAnchor="middle">4층 ↔ 5층</text>
              </g>

              {/* 4. 6-1 교실 (햇반놀이터 + 슈링크 아틀리에) */}
              <g transform="translate(455, 160)">
                <rect width="170" height="280" rx="12" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
                <rect x="0" y="0" width="170" height="30" rx="10" fill="#0284c7" />
                <text x="85" y="20" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">6학년 1반 교실</text>

                {/* 6-1-1 부스 (상단: 햇반놀이터) */}
                {(() => {
                  const b1 = BOOTHS.find((b) => b.id === 'b6-1-1')!;
                  const isFav = isFavorite('b6-1-1');
                  const isHl = highlightParam === 'b6-1-1';
                  return (
                    <g
                      onClick={() => setSelectedBooth(b1)}
                      className="cursor-pointer transition-all group"
                      transform="translate(8, 36)"
                    >
                      <rect
                        width="154"
                        height="112"
                        rx="8"
                        fill={isFav ? '#fef9c3' : '#f0f9ff'}
                        stroke={isFav || isHl ? '#f59e0b' : '#bae6fd'}
                        strokeWidth={isFav || isHl ? '3' : '1.5'}
                        filter={isFav || isHl ? 'url(#glow-gold5)' : undefined}
                        className="group-hover:fill-sky-100 transition-colors"
                      />
                      <text x="10" y="22" fontSize="16">🥌</text>
                      <text x="34" y="22" fill="#0369a1" fontSize="11" fontWeight="bold">6-1 ① 햇반놀이터</text>
                      <text x="10" y="44" fill="#0c4a6e" fontSize="12" fontWeight="bold">실내사격/컬링/탁구</text>
                      <text x="10" y="62" fill="#0284c7" fontSize="10">미니 게임 아케이드</text>
                      <text x="10" y="80" fill="#64748b" fontSize="10">교실 앞쪽</text>
                      {isFav && <text x="132" y="22" fontSize="14">💖</text>}
                    </g>
                  );
                })()}

                {/* 6-1-2 부스 (하단: 슈링크 아틀리에) */}
                {(() => {
                  const b2 = BOOTHS.find((b) => b.id === 'b6-1-2')!;
                  const isFav = isFavorite('b6-1-2');
                  const isHl = highlightParam === 'b6-1-2';
                  return (
                    <g
                      onClick={() => setSelectedBooth(b2)}
                      className="cursor-pointer transition-all group"
                      transform="translate(8, 156)"
                    >
                      <rect
                        width="154"
                        height="114"
                        rx="8"
                        fill={isFav ? '#fef9c3' : '#f0f9ff'}
                        stroke={isFav || isHl ? '#f59e0b' : '#bae6fd'}
                        strokeWidth={isFav || isHl ? '3' : '1.5'}
                        filter={isFav || isHl ? 'url(#glow-gold5)' : undefined}
                        className="group-hover:fill-sky-100 transition-colors"
                      />
                      <text x="10" y="22" fontSize="16">🎨</text>
                      <text x="34" y="22" fill="#0369a1" fontSize="11" fontWeight="bold">6-1 ② 슈링크</text>
                      <text x="10" y="44" fill="#0c4a6e" fontSize="12" fontWeight="bold">슈링크 아틀리에</text>
                      <text x="10" y="62" fill="#0284c7" fontSize="10">오븐 구이 마법 키링</text>
                      <text x="10" y="80" fill="#64748b" fontSize="10">교실 뒤쪽</text>
                      {isFav && <text x="132" y="22" fontSize="14">💖</text>}
                    </g>
                  );
                })()}
              </g>

              {/* 5. 6-2 교실 (비추미 오싹 교실 + 비밀 마음 편지) */}
              <g transform="translate(635, 160)">
                <rect width="170" height="280" rx="12" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
                <rect x="0" y="0" width="170" height="30" rx="10" fill="#475569" />
                <text x="85" y="20" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">6학년 2반 교실</text>

                {/* 6-2-1 부스 (상단: 오싹 교실) */}
                {(() => {
                  const b1 = BOOTHS.find((b) => b.id === 'b6-2-1')!;
                  const isFav = isFavorite('b6-2-1');
                  const isHl = highlightParam === 'b6-2-1';
                  return (
                    <g
                      onClick={() => setSelectedBooth(b1)}
                      className="cursor-pointer transition-all group"
                      transform="translate(8, 36)"
                    >
                      <rect
                        width="154"
                        height="112"
                        rx="8"
                        fill={isFav ? '#fef9c3' : '#f8fafc'}
                        stroke={isFav || isHl ? '#f59e0b' : '#cbd5e1'}
                        strokeWidth={isFav || isHl ? '3' : '1.5'}
                        filter={isFav || isHl ? 'url(#glow-gold5)' : undefined}
                        className="group-hover:fill-slate-100 transition-colors"
                      />
                      <text x="10" y="22" fontSize="16">👻</text>
                      <text x="34" y="22" fill="#1e293b" fontSize="11" fontWeight="bold">6-2 ① 오싹교실</text>
                      <text x="10" y="44" fill="#0f172a" fontSize="12" fontWeight="bold">비추미 오싹 교실</text>
                      <text x="10" y="62" fill="#475569" fontSize="10">암막 속 용기 미션</text>
                      <text x="10" y="80" fill="#64748b" fontSize="10">교실 앞쪽</text>
                      {isFav && <text x="132" y="22" fontSize="14">💖</text>}
                    </g>
                  );
                })()}

                {/* 6-2-2 부스 (하단: 비밀 마음 편지) */}
                {(() => {
                  const b2 = BOOTHS.find((b) => b.id === 'b6-2-2')!;
                  const isFav = isFavorite('b6-2-2');
                  const isHl = highlightParam === 'b6-2-2';
                  return (
                    <g
                      onClick={() => setSelectedBooth(b2)}
                      className="cursor-pointer transition-all group"
                      transform="translate(8, 156)"
                    >
                      <rect
                        width="154"
                        height="114"
                        rx="8"
                        fill={isFav ? '#fef9c3' : '#f8fafc'}
                        stroke={isFav || isHl ? '#f59e0b' : '#cbd5e1'}
                        strokeWidth={isFav || isHl ? '3' : '1.5'}
                        filter={isFav || isHl ? 'url(#glow-gold5)' : undefined}
                        className="group-hover:fill-slate-100 transition-colors"
                      />
                      <text x="10" y="22" fontSize="16">💌</text>
                      <text x="34" y="22" fill="#1e293b" fontSize="11" fontWeight="bold">6-2 ② 비밀편지</text>
                      <text x="10" y="44" fill="#0f172a" fontSize="12" fontWeight="bold">쉿, 비밀 마음 편지</text>
                      <text x="10" y="62" fill="#475569" fontSize="10">글·음성 편지 배달</text>
                      <text x="10" y="80" fill="#64748b" fontSize="10">교실 뒤쪽</text>
                      {isFav && <text x="132" y="22" fontSize="14">💖</text>}
                    </g>
                  );
                })()}
              </g>

              {/* 6. 흡연예방 부스 (이음교실 1실 - 가드너스) */}
              {(() => {
                const bHealth = BOOTHS.find((b) => b.id === 'b-health')!;
                const isFav = isFavorite('b-health');
                const isHl = highlightParam === 'b-health';
                return (
                  <g
                    onClick={() => setSelectedBooth(bHealth)}
                    className="cursor-pointer transition-all group"
                    transform="translate(815, 160)"
                  >
                    <rect
                      width="155"
                      height="280"
                      rx="12"
                      fill={isFav ? '#fef9c3' : '#ecfdf5'}
                      stroke={isFav || isHl ? '#f59e0b' : '#a7f3d0'}
                      strokeWidth={isFav || isHl ? '3' : '2'}
                      filter={isFav || isHl ? 'url(#glow-gold5)' : undefined}
                      className="group-hover:fill-emerald-100 transition-colors"
                    />
                    <rect x="0" y="0" width="155" height="32" rx="10" fill="#059669" />
                    <text x="77" y="21" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">이음교실 1실</text>
                    <text x="15" y="65" fontSize="26">🫁</text>
                    <text x="15" y="95" fill="#065f46" fontSize="13" fontWeight="bold">꿈건강마당</text>
                    <text x="15" y="120" fill="#047857" fontSize="15" fontWeight="black">흡연예방 부스</text>
                    <text x="15" y="142" fill="#059669" fontSize="11">폐활량 측정 & 키링</text>
                    <text x="15" y="170" fill="#10b981" fontSize="11" fontWeight="bold">가드너스 전문기관</text>
                    <rect x="15" y="190" width="125" height="24" rx="6" fill="#a7f3d0" />
                    <text x="77" y="206" fill="#064e3b" fontSize="10" fontWeight="bold" textAnchor="middle">3~6학년 고학년 필수</text>
                    {isFav && <text x="120" y="65" fontSize="18">💖</text>}
                  </g>
                );
              })()}
            </svg>
          )}
        </div>
      </div>

      {/* 부스 선택 시 하단 상세 미리보기 카드 / 바텀 시트 */}
      {selectedBooth && (
        <div className="bg-white rounded-3xl p-6 border-2 border-amber-300 shadow-xl animate-gentle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-4xl shrink-0">
              {selectedBooth.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-400 text-amber-950">
                  {selectedBooth.floor}층
                </span>
                <span className="text-xs font-bold text-gray-500">{selectedBooth.roomName}</span>
                {isFavorite(selectedBooth.id) && (
                  <span className="text-xs font-extrabold text-rose-600 flex items-center gap-0.5">
                    💖 내 코스 담김
                  </span>
                )}
              </div>
              <h3 className="text-xl font-black text-gray-900">{selectedBooth.name}</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">{selectedBooth.shortDesc}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
            <button
              onClick={() => setSelectedBooth(null)}
              className="p-2.5 text-gray-400 hover:text-gray-600 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
            <Link
              to={`/booths/${selectedBooth.id}`}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-sm transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>상세 보기 & 코스 담기</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      {/* 하단 층별 부스 요약 리스트 */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
          <span>📋</span>
          <span>{currentFloor}층 부스 바로가기</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {boothsInFloor.map((booth) => {
            const isFav = isFavorite(booth.id);
            return (
              <button
                key={booth.id}
                onClick={() => setSelectedBooth(booth)}
                className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between gap-2 ${
                  isFav
                    ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-400'
                    : 'bg-gray-50 hover:bg-amber-50/40 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-2xl shrink-0">{booth.emoji}</span>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-gray-400 block truncate">{booth.roomName}</span>
                    <span className="text-xs font-black text-gray-800 block truncate">{booth.name}</span>
                  </div>
                </div>
                {isFav && <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
