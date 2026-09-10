import React from 'react';
import { Heart, Sparkles, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-amber-100 mt-16 pt-12 pb-24 md:pb-12 text-gray-600 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🎪</span>
              <h3 className="font-black text-gray-900 text-lg">2026 연성초 꿈마당</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              “꿈을 만나고, 꿈을 체험하다”<br />
              연성초등학교 학생들이 스스로 부스를 기획·운영하고, 전교생과 학부모가 함께하는 신나는 진로 탐색 축제입니다.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200/60 font-semibold">
              <Sparkles className="w-4 h-4 shrink-0 text-amber-500" />
              <span>연성초등학교 학생들의 반짝이는 미래를 응원합니다!</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-3">행사 기본 정보</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>2026년 10월 15일(목) 09:10 ~ 12:20</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>연성초등학교 4·5층 교실 및 복도</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500 shrink-0" />
                <span>대상: 1학년부터 6학년 전교생</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-3">빠른 바로가기</h4>
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              <Link to="/booths" className="hover:text-amber-600 transition-colors">🎪 부스 둘러보기</Link>
              <Link to="/map" className="hover:text-amber-600 transition-colors">🗺️ 층별 배치도</Link>
              <Link to="/schedule" className="hover:text-amber-600 transition-colors">⏰ 맞춤 시간표</Link>
              <Link to="/my-course" className="hover:text-amber-600 transition-colors">🎒 나의 코스</Link>
              <Link to="/teacher" className="hover:text-purple-600 text-purple-700 font-bold transition-colors">📋 교사용 안내</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          <p>© 2026 연성초등학교 교육과정운영부 진로체험주간. 본 웹사이트는 정적 웹앱으로 안전하게 동작합니다.</p>
        </div>
      </div>
    </footer>
  );
};
