export type BoothCategory = 'student' | 'parent' | 'external';

export interface Booth {
  id: string; // 예: 'b4-1-1', 'b-job-1', 'b-health'
  code: string; // 예: '4-1 ①', '꿈이음', '꿈JOB ①'
  name: string;
  category: BoothCategory;
  categoryLabel: string; // '학생 부스', '학부모 부스', '외부 전문기관'
  floor: 4 | 5;
  roomName: string; // '4-1 교실', '5-1 교실 옆 복도', '동아리 1·2실', '이음교실 1실'
  locationDetail: string;
  organizer: string; // '연성초 4학년 1반', '연성초 학부모회', '한국미래진로센터', '가드너스'
  emoji: string;
  shortDesc: string;
  description: string;
  activities: string[];
  materials?: string;
  cautions?: string;
  durationMinutes: number; // 부스 체험 예상 시간 (분)
  targetGrades: string; // 대상 학년 설명 (예: "전학년", "1~3학년 필수 / 4~6학년 희망")
  adjacentBoothIds: string[]; // 인접 부스 추천 2개 ID
  mapSvgId: string; // SVG 맵 상의 요소 ID
  stampNumber?: number; // 스탬프북 1~15번 공식 번호 (가이드북 연계)
}

export interface SchedulePeriod {
  period: string; // '준비활동', '1부', '중간 쉬는 시간', '2부', '정리활동'
  timeRange: string; // '09:10 ~ 09:30'
  summary: string;
  details: {
    target: string;
    description: string;
    locationBadge?: string;
  }[];
}

export interface DetailedTimeSlot {
  time: string; // '09:30 ~ 09:50'
  external1: string; // 특수분장
  external2: string; // 메이크업
  smokingPrevention: string; // 흡연예방
  studentBooth: {
    grade1: string;
    grade2: string;
    grade3: string;
    seniorA?: string;
    seniorB?: string;
  };
}

export interface TeacherCheckItem {
  id: string;
  category: 'guidance' | 'safety' | 'role' | 'supplies';
  title: string;
  description: string;
  checked?: boolean;
}

export interface CourseItem {
  boothId: string;
  addedAt: number;
  completed: boolean;
  notes?: string;
}
