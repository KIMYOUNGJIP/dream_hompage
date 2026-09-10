import { SchedulePeriod } from '../types';

export const MAIN_PERIODS: SchedulePeriod[] = [
  {
    period: '준비활동',
    timeRange: '09:10 ~ 09:30',
    summary: '안전교육 및 부스 준비',
    details: [
      {
        target: '1·2학년',
        description: '각 학급 교실에서 안전교육 및 오늘의 꿈마당 활동 방법 안내 받기',
        locationBadge: '각 교실'
      },
      {
        target: '3·4·5·6학년',
        description: '안전교육 실시 및 고학년 학생들은 담당 체험 부스 운영 최종 점검·준비',
        locationBadge: '각 교실 / 부스'
      }
    ]
  },
  {
    period: '1부 운영',
    timeRange: '09:30 ~ 10:30',
    summary: '전반전 체험 및 부스 활동',
    details: [
      {
        target: '1·2학년 (약 35명)',
        description: '【4층】 4학년·5학년 학생 부스 체험 순환 (타임테이블에 맞춰 5층 외부부스 특수분장/메이크업 필수 참여)',
        locationBadge: '4층 교실 및 5층'
      },
      {
        target: '3학년 (17명)',
        description: '【5층】 6학년 체험 부스, 꿈JOB마당(특수분장/메이크업), 꿈건강마당(흡연예방) 필수 참여',
        locationBadge: '5층 교실'
      },
      {
        target: '4·5·6학년 A조 (약 50명)',
        description: '【체험 조】 4층·5층 전체 부스 자유 체험 및 5층 꿈건강마당(흡연예방 필수) 참여',
        locationBadge: '전 층 자유 이동'
      },
      {
        target: '4·5·6학년 B조 (약 50명)',
        description: '【운영 조】 본인 학급 부스에서 후배 및 친구들을 맞이하고 부스 활동 진행하기',
        locationBadge: '소속 학급 부스'
      }
    ]
  },
  {
    period: '중간 쉬는 시간',
    timeRange: '10:30 ~ 10:40',
    summary: '안전 점검 및 1/2부 교대 준비',
    details: [
      {
        target: '전교생',
        description: '화장실 다녀오기, 수분 섭취, 4·5·6학년 A조와 B조 운영/체험 역할 교대 준비',
        locationBadge: '각 교실'
      }
    ]
  },
  {
    period: '2부 운영',
    timeRange: '10:40 ~ 11:40',
    summary: '후반전 층 맞교환 체험 활동',
    details: [
      {
        target: '1·2학년 (약 35명)',
        description: '【5층】 6학년 체험 부스 및 꿈JOB마당(특수분장/메이크업 필수 순환 참여)',
        locationBadge: '5층 교실'
      },
      {
        target: '3학년 (17명)',
        description: '【4층】 4학년·5학년 학생 부스 및 학부모회 꿈이음마당 부스 체험',
        locationBadge: '4층 교실'
      },
      {
        target: '4·5·6학년 B조 (약 50명)',
        description: '【체험 조】 4층·5층 전체 부스 자유 체험 및 5층 꿈건강마당(흡연예방 필수) 참여',
        locationBadge: '전 층 자유 이동'
      },
      {
        target: '4·5·6학년 A조 (약 50명)',
        description: '【운영 조】 본인 학급 부스에서 후배 및 친구들을 맞이하고 부스 활동 진행하기',
        locationBadge: '소속 학급 부스'
      }
    ]
  },
  {
    period: '정리활동',
    timeRange: '11:40 ~ 12:20',
    summary: '행사 마무리 및 소감 나누기',
    details: [
      {
        target: '전 학년',
        description: '부스 뒷정리, 교실 청소, 꿈마당 활동 소감문 작성 및 담임선생님 피드백',
        locationBadge: '각 교실'
      }
    ]
  }
];

// 20분 단위 상세 타임테이블
export const DETAILED_TIME_SLOTS = [
  {
    time: '09:10 ~ 09:30',
    external1: '운영 준비',
    external2: '운영 준비',
    smoking: '운영 준비',
    grade1: '안전교육 및 활동 안내',
    grade2: '안전교육 및 활동 안내',
    grade3: '안전교육 및 준비',
    seniorA: '부스 준비 및 안내',
    seniorB: '부스 준비 및 안내'
  },
  {
    time: '09:30 ~ 09:50',
    external1: '1학년 필수 체험',
    external2: '2학년 필수 체험',
    smoking: '3학년 및 고학년 A조',
    grade1: '5층 외부1(특수분장) 체험',
    grade2: '5층 외부2(메이크업) 체험',
    grade3: '5층 6학년 부스 / 흡연예방',
    seniorA: '체험 활동 (흡연예방/부스)',
    seniorB: '부스 운영 (담당 부스 지킴이)'
  },
  {
    time: '09:50 ~ 10:10',
    external1: '2학년 필수 체험',
    external2: '1학년 필수 체험',
    smoking: '3학년 및 고학년 A조',
    grade1: '5층 외부2(메이크업) 체험',
    grade2: '5층 외부1(특수분장) 체험',
    grade3: '5층 6학년 부스 / 흡연예방',
    seniorA: '체험 활동 (부스 순환)',
    seniorB: '부스 운영 (담당 부스 지킴이)'
  },
  {
    time: '10:10 ~ 10:30',
    external1: '4·5·6학년 A조 희망자',
    external2: '4·5·6학년 A조 희망자',
    smoking: '3학년 및 고학년 A조',
    grade1: '4층 4·5학년 부스 자유체험',
    grade2: '4층 4·5학년 부스 자유체험',
    grade3: '5층 6학년 부스 체험',
    seniorA: '체험 활동 (외부희망/부스)',
    seniorB: '부스 운영 (담당 부스 지킴이)'
  },
  {
    time: '10:30 ~ 10:40',
    external1: '중간 휴식 및 소독',
    external2: '중간 휴식 및 소독',
    smoking: '중간 휴식',
    grade1: '중간 쉬는 시간 (화장실)',
    grade2: '중간 쉬는 시간 (화장실)',
    grade3: '중간 쉬는 시간 (4층 이동)',
    seniorA: '부스 교대 (운영 준비)',
    seniorB: '부스 교대 (체험 준비)'
  },
  {
    time: '10:40 ~ 11:00',
    external1: '3학년 필수 체험',
    external2: '4·5·6학년 B조 희망자',
    smoking: '4·5·6학년 B조 필수',
    grade1: '5층 6학년 부스 체험',
    grade2: '5층 6학년 부스 체험',
    grade3: '5층 외부1(특수분장) 체험',
    seniorA: '부스 운영 (담당 부스 지킴이)',
    seniorB: '체험 활동 (외부희망/흡연예방)'
  },
  {
    time: '11:00 ~ 11:20',
    external1: '4·5·6학년 B조 희망자',
    external2: '3학년 필수 체험',
    smoking: '4·5·6학년 B조 필수',
    grade1: '5층 6학년 부스 체험',
    grade2: '5층 6학년 부스 체험',
    grade3: '5층 외부2(메이크업) 체험',
    seniorA: '부스 운영 (담당 부스 지킴이)',
    seniorB: '체험 활동 (외부희망/흡연예방)'
  },
  {
    time: '11:20 ~ 11:40',
    external1: '4·5·6학년 B조 희망자',
    external2: '4·5·6학년 B조 희망자',
    smoking: '4·5·6학년 B조 필수',
    grade1: '5층 6학년 부스 체험',
    grade2: '5층 6학년 부스 체험',
    grade3: '4층 4·5학년 부스 체험',
    seniorA: '부스 운영 (담당 부스 지킴이)',
    seniorB: '체험 활동 (부스 순환)'
  },
  {
    time: '11:40 ~ 12:20',
    external1: '종료 및 정리',
    external2: '종료 및 정리',
    smoking: '종료 및 정리',
    grade1: '교실 복귀 및 소감 나누기',
    grade2: '교실 복귀 및 소감 나누기',
    grade3: '교실 복귀 및 소감 나누기',
    seniorA: '부스 마감 및 교실 대청소',
    seniorB: '부스 마감 및 교실 대청소'
  }
];

export interface StudentTimelineItem {
  time: string;
  floorBadge: string;
  type: 'prep' | 'experience' | 'booth_duty' | 'break' | 'clean';
  title: string;
  description: string;
  highlight?: boolean;
}

export function getCustomTimeline(grade: number, group?: 'A' | 'B'): StudentTimelineItem[] {
  if (grade === 1) {
    return [
      {
        time: '09:10 ~ 09:30',
        floorBadge: '교실',
        type: 'prep',
        title: '안전 교육 및 꿈마당 안내',
        description: '선생님과 함께 오늘의 신나는 꿈마당 활동 방법과 복도 보행 안전 수칙을 배웁니다.'
      },
      {
        time: '09:30 ~ 09:50',
        floorBadge: '5층 동아리 1실',
        type: 'experience',
        title: '【필수 체험】 꿈JOB마당 - 특수분장',
        description: '영화 속 신기한 특수분장과 귀여운 페이스페인팅을 직접 체험합니다!',
        highlight: true
      },
      {
        time: '09:50 ~ 10:10',
        floorBadge: '5층 동아리 2실',
        type: 'experience',
        title: '【필수 체험】 꿈JOB마당 - 메이크업 아티스트',
        description: '반짝반짝 메이크업 아티스트 직업을 체험하고 예쁜 분장을 받아보세요.',
        highlight: true
      },
      {
        time: '10:10 ~ 10:30',
        floorBadge: '4층 교실',
        type: 'experience',
        title: '4층 체험 부스 자유 관람 (4·5학년 부스)',
        description: '네일아트, 전통 팽이, 비즈 볼펜, 클레이, PC방, 드론, 스포츠 등 원하는 곳을 골라 체험하세요.'
      },
      {
        time: '10:30 ~ 10:40',
        floorBadge: '교실/복도',
        type: 'break',
        title: '중간 쉬는 시간',
        description: '화장실을 다녀오고 물을 마신 후, 5층으로 이동할 준비를 합니다.'
      },
      {
        time: '10:40 ~ 11:40',
        floorBadge: '5층 교실',
        type: 'experience',
        title: '5층 체험 부스 순환 (6학년 선배 부스)',
        description: '햇반놀이터(실내사격/컬링), 슈링클스 키링, 비추미 오싹 교실, 비밀마음편지 부스를 신나게 즐겨보세요!'
      },
      {
        time: '11:40 ~ 12:20',
        floorBadge: '교실',
        type: 'clean',
        title: '교실 복귀 및 꿈마당 소감 나누기',
        description: '체험 소감지를 작성하고 오늘 만든 멋진 기념품들을 친구들과 함께 자랑해봐요.'
      }
    ];
  }

  if (grade === 2) {
    return [
      {
        time: '09:10 ~ 09:30',
        floorBadge: '교실',
        type: 'prep',
        title: '안전 교육 및 꿈마당 안내',
        description: '선생님과 함께 오늘의 신나는 꿈마당 활동 방법과 복도 보행 안전 수칙을 배웁니다.'
      },
      {
        time: '09:30 ~ 09:50',
        floorBadge: '5층 동아리 2실',
        type: 'experience',
        title: '【필수 체험】 꿈JOB마당 - 메이크업 아티스트',
        description: '반짝반짝 메이크업 아티스트 직업을 먼저 체험합니다!',
        highlight: true
      },
      {
        time: '09:50 ~ 10:10',
        floorBadge: '5층 동아리 1실',
        type: 'experience',
        title: '【필수 체험】 꿈JOB마당 - 특수분장',
        description: '영화 속 신기한 특수분장과 귀여운 페이스페인팅을 체험합니다!',
        highlight: true
      },
      {
        time: '10:10 ~ 10:30',
        floorBadge: '4층 교실',
        type: 'experience',
        title: '4층 체험 부스 자유 관람 (4·5학년 부스)',
        description: '네일아트, 전통 팽이, 비즈 볼펜, 클레이, PC방, 드론, 스포츠 등 원하는 곳을 골라 체험하세요.'
      },
      {
        time: '10:30 ~ 10:40',
        floorBadge: '교실/복도',
        type: 'break',
        title: '중간 쉬는 시간',
        description: '화장실을 다녀오고 물을 마신 후, 5층으로 이동할 준비를 합니다.'
      },
      {
        time: '10:40 ~ 11:40',
        floorBadge: '5층 교실',
        type: 'experience',
        title: '5층 체험 부스 순환 (6학년 선배 부스)',
        description: '햇반놀이터(실내사격/컬링), 슈링클스 키링, 비추미 오싹 교실, 비밀마음편지 부스를 신나게 즐겨보세요!'
      },
      {
        time: '11:40 ~ 12:20',
        floorBadge: '교실',
        type: 'clean',
        title: '교실 복귀 및 꿈마당 소감 나누기',
        description: '체험 소감지를 작성하고 오늘 만든 멋진 기념품들을 친구들과 함께 자랑해봐요.'
      }
    ];
  }

  if (grade === 3) {
    return [
      {
        time: '09:10 ~ 09:30',
        floorBadge: '교실',
        type: 'prep',
        title: '안전 교육 및 꿈마당 활동 준비',
        description: '안전 수칙을 숙지하고 1부에는 5층으로 먼저 이동할 준비를 합니다.'
      },
      {
        time: '09:30 ~ 10:30',
        floorBadge: '5층 교실',
        type: 'experience',
        title: '【1부】 5층 6학년 부스 & 꿈건강마당(흡연예방 필수)',
        description: '6학년 부스(햇반놀이터, 슈링클스, 오싹교실, 비밀편지) 및 5층 이음교실 1실【흡연예방 폐활량 측정/키링】을 필수로 체험합니다!',
        highlight: true
      },
      {
        time: '10:30 ~ 10:40',
        floorBadge: '교실/복도',
        type: 'break',
        title: '중간 쉬는 시간',
        description: '화장실을 다녀오고 물을 마신 후, 외부부스 및 4층 이동을 준비합니다.'
      },
      {
        time: '10:40 ~ 11:00',
        floorBadge: '5층 동아리 1실',
        type: 'experience',
        title: '【필수 체험】 꿈JOB마당 - 특수분장',
        description: '영화 속 신기한 특수분장과 페이스페인팅을 체험합니다.',
        highlight: true
      },
      {
        time: '11:00 ~ 11:20',
        floorBadge: '5층 동아리 2실',
        type: 'experience',
        title: '【필수 체험】 꿈JOB마당 - 메이크업 아티스트',
        description: '프로 메이크업 아티스트의 기법을 배우고 직업 체험을 완료합니다.',
        highlight: true
      },
      {
        time: '11:20 ~ 11:40',
        floorBadge: '4층 교실',
        type: 'experience',
        title: '4층 체험 부스 (4·5학년 학생 부스 & 학부모 부스)',
        description: '4층으로 이동하여 4,5학년 부스와 학부모회 꿈이음마당 부스를 자유롭게 둘러봅니다.'
      },
      {
        time: '11:40 ~ 12:20',
        floorBadge: '교실',
        type: 'clean',
        title: '교실 복귀 및 정리·소감문 작성',
        description: '3학년 교실로 돌아와 꿈마당 활동 소감문을 작성하고 마무리합니다.'
      }
    ];
  }

  // 4, 5, 6학년 고학년 (A조 / B조)
  const isA = group === 'A';

  if (isA) {
    return [
      {
        time: '09:10 ~ 09:30',
        floorBadge: '소속 교실',
        type: 'prep',
        title: '안전 교육 및 부스 최종 준비',
        description: '학급 부스 운영 물품과 동선을 점검하고, A조는 1부 체험 준비를 합니다.'
      },
      {
        time: '09:30 ~ 10:30',
        floorBadge: '4층·5층 전체',
        type: 'experience',
        title: '【1부: A조 체험 활동】 4·5층 전 부스 자유 순환',
        description: '★필수: 5층 이음교실 1실【꿈건강마당(흡연예방)】필수 체험!\n★선택: 10:10~10:30에 5층 꿈JOB마당(특수분장/메이크업) 희망자 체험 가능.\n★그 외 4·5층 모든 학생 부스를 자유롭게 탐방하세요.',
        highlight: true
      },
      {
        time: '10:30 ~ 10:40',
        floorBadge: '소속 부스',
        type: 'break',
        title: '역할 교대 및 인수인계',
        description: '체험을 마치고 자기 교실 부스로 복귀하여 B조 친구들과 교대(부스 운영 인수인계)합니다.'
      },
      {
        time: '10:40 ~ 11:40',
        floorBadge: '소속 부스',
        type: 'booth_duty',
        title: '【2부: A조 부스 운영】 우리 반 부스 지킴이',
        description: '우리 반 부스에 찾아오는 후배와 친구들에게 친절하게 안내하고 멋지게 부스를 운영합니다!',
        highlight: true
      },
      {
        time: '11:40 ~ 12:20',
        floorBadge: '소속 교실',
        type: 'clean',
        title: '부스 뒷정리 및 교실 대청소',
        description: '운영 물품을 제자리에 정리하고, 쓰레기 분리수거 및 교실 환경을 깨끗이 정돈합니다.'
      }
    ];
  } else {
    // B조
    return [
      {
        time: '09:10 ~ 09:30',
        floorBadge: '소속 부스',
        type: 'prep',
        title: '안전 교육 및 1부 운영 준비 완료',
        description: '1부 부스 운영을 위해 체험 재료, 도구, 안내판을 세팅하고 손님 맞이 준비를 마칩니다.'
      },
      {
        time: '09:30 ~ 10:30',
        floorBadge: '소속 부스',
        type: 'booth_duty',
        title: '【1부: B조 부스 운영】 우리 반 부스 지킴이',
        description: '1부에 찾아오는 1·2·3학년 후배들과 A조 친구들을 위해 친절하고 재미있게 부스를 운영합니다!',
        highlight: true
      },
      {
        time: '10:30 ~ 10:40',
        floorBadge: '소속 부스',
        type: 'break',
        title: '역할 교대 및 인수인계',
        description: '1부 운영을 마무리하고 교실로 돌아온 A조 친구들에게 부스를 인수인계한 뒤 체험 준비를 합니다.'
      },
      {
        time: '10:40 ~ 11:40',
        floorBadge: '4층·5층 전체',
        type: 'experience',
        title: '【2부: B조 체험 활동】 4·5층 전 부스 자유 순환',
        description: '★필수: 5층 이음교실 1실【꿈건강마당(흡연예방)】필수 체험!\n★선택: 10:40~11:40 중 5층 꿈JOB마당(특수분장/메이크업) 희망자 체험 가능.\n★그 외 4·5층 모든 학생 부스를 자유롭게 탐방하세요.',
        highlight: true
      },
      {
        time: '11:40 ~ 12:20',
        floorBadge: '소속 교실',
        type: 'clean',
        title: '부스 뒷정리 및 교실 대청소',
        description: 'A조와 함께 부스 물품을 정리하고 교실 청소 및 활동 소감을 작성합니다.'
      }
    ];
  }
}
