import { Booth } from '../types';

/**
 * 2026 연성초 꿈마당(진로의 날) 부스 데이터
 * 교사 및 관리자가 이 파일의 내용만 수정해도 웹사이트 전체의 부스 정보가 자동으로 업데이트됩니다.
 */
export const BOOTHS: Booth[] = [
  // ================= 4층 부스 =================
  {
    id: 'b-council',
    code: '자치',
    name: '꿈네컷 즉석 사진관',
    category: 'student',
    categoryLabel: '학생자치회 부스',
    floor: 4,
    roomName: '4층 학생자치실',
    locationDetail: '4층 맨 왼쪽 학생자치실',
    organizer: '연성초 학생자치회',
    emoji: '📸',
    shortDesc: '즉석사진기로 친구들과 소중한 오늘의 꿈마당 추억 찰칵!',
    description: '연성초 학생자치회에서 준비한 특별한 포토 스튜디오! 즉석사진기로 친구, 선생님과 함께 예쁜 사진을 찍고, 마스킹 테이프와 스티커로 나만의 즉석 사진 포토카드를 예쁘게 꾸며 간직해보세요.',
    activities: [
      '촬영 소품(재미있는 머리띠, 안경, 꿈 팻말) 고르기',
      '학생자치회 도우미가 즉석카메라로 사진 촬영 (1인 1매 출력)',
      '다양한 스티커와 네임펜으로 사진 프레임 꾸미기'
    ],
    materials: '즉석카메라 및 인스탁스 필름, 다양한 촬영 소품(머리띠, 안경 등), 데코 스티커',
    cautions: '사진 필름 수량이 한정되어 있으니 질서를 지켜 1인 1회 촬영에 협조해주세요.',
    durationMinutes: 10,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b-parent', 'b5-1-1'],
    mapSvgId: 'room-council'
  },
  {
    id: 'b4-1-1',
    code: '4-1 ①',
    name: '반짝반짝 뷰티 아티스트',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 4,
    roomName: '4학년 1반 교실 앞쪽',
    locationDetail: '4층 4-1 교실 (출입문 기준 좌측 창가)',
    organizer: '연성초 4학년 1반',
    emoji: '💅',
    shortDesc: '네일아트, 타투 스티커, 페이스페인팅으로 개성 표현!',
    description: '자신만의 개성과 아름다움을 표현해보는 뷰티 아티스트 체험 부스입니다. 반짝이는 네일아트, 귀여운 판박이 타투 스티커, 깜찍한 페이스페인팅을 직접 골라 체험할 수 있습니다.',
    activities: [
      '손톱에 귀여운 스티커와 매니큐어로 꾸미는 네일아트',
      '물로 손쉽게 붙이는 캐릭터 타투 스티커',
      '얼굴이나 손등에 그리는 포인트 페이스페인팅'
    ],
    materials: '수성 네일 스티커, 물티슈, 어린이용 저자극 페이스페인팅 물감',
    cautions: '피부가 예민하거나 물감 알레르기가 있는 학생은 타투 스티커나 네일아트를 선택해주세요.',
    durationMinutes: 15,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b4-1-2', 'b4-2-1'],
    mapSvgId: 'room-4-1'
  },
  {
    id: 'b4-1-2',
    code: '4-1 ②',
    name: '전통공예 및 놀이',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 4,
    roomName: '4학년 1반 교실 뒤쪽',
    locationDetail: '4층 4-1 교실 (출입문 기준 우측 복도쪽)',
    organizer: '연성초 4학년 1반',
    emoji: '🪵',
    shortDesc: '전통문양 나무팽이 만들기와 신나는 전통놀이 한마당!',
    description: '우리의 전통 문양을 색칠하여 나만의 나무팽이를 만들고, 팽이 돌리기 대결과 전통놀이를 함께 즐겨보는 전통문화 공예 체험입니다.',
    activities: [
      '전통 문양(태극, 도깨비, 꽃무늬) 나무팽이에 네임펜과 마카로 채색하기',
      '완성된 나무팽이 돌리기 시합 및 기록 도전',
      '친구와 함께하는 재미있는 전통놀이 미션'
    ],
    materials: '원목 나무팽이 DIY 키트, 유성매직, 색연필',
    cautions: '팽이를 사람이나 바닥에 너무 세게 던지지 않도록 안내판을 확인해주세요.',
    durationMinutes: 15,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b4-1-1', 'b4-2-2'],
    mapSvgId: 'room-4-1'
  },
  {
    id: 'b4-2-1',
    code: '4-2 ①',
    name: '오늘의 빛나는 디자이너',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 4,
    roomName: '4학년 2반 교실 앞쪽',
    locationDetail: '4층 4-2 교실 (출입문 기준 좌측)',
    organizer: '연성초 4학년 2반',
    emoji: '✨',
    shortDesc: '나만의 영롱한 비즈 볼펜 꾸미기와 입체 스티커 키링 제작!',
    description: '다양한 색상의 예쁜 비즈를 골라 세상에 하나뿐인 나만의 볼펜을 만들고, 볼록한 입체 스티커로 가방에 걸 수 있는 키링을 직접 디자인합니다.',
    activities: [
      '알록달록 파스텔 비즈와 알파벳 비즈로 볼펜 조립하기',
      '투명 아크릴 판에 입체 스티커(폭신이)와 파츠 붙여 키링 완성',
      '내가 만든 작품 이름 짓고 인증 포토존에서 사진 촬영'
    ],
    materials: 'DIY 비즈 볼펜 막대, 형형색색 비즈 파츠, 아크릴 키링 베이스',
    cautions: '작은 비즈 알갱이를 입에 넣지 않도록 저학년 학생은 친구나 도우미의 도움을 받으세요.',
    durationMinutes: 20,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b4-2-2', 'b4-1-1'],
    mapSvgId: 'room-4-2'
  },
  {
    id: 'b4-2-2',
    code: '4-2 ②',
    name: '클레이 아트',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 4,
    roomName: '4학년 2반 교실 뒤쪽',
    locationDetail: '4층 4-2 교실 (출입문 기준 우측)',
    organizer: '연성초 4학년 2반',
    emoji: '🍪',
    shortDesc: '향기로운 커피클레이 방향제 & 달콤한 슈가클레이 미니 쿠키!',
    description: '친환경 커피박(커피찌꺼기)을 재활용한 천연 방향제와 달콤하고 만지기 쉬운 슈가클레이로 아기자기한 미니 쿠키 모형을 조형해보는 예술 체험 부스입니다.',
    activities: [
      '커피박 반죽을 틀에 찍어 천연 커피 방향제 인형 만들기',
      '슈가클레이를 반죽하여 동물, 캐릭터 모양의 달콤 미니 쿠키 빚기',
      '선물용 예쁜 미니 포장 상자에 포장하기'
    ],
    materials: '커피클레이 반죽, 쿠키 커터 모형틀, 슈가클레이 반죽 키트, 투명 포장팩',
    cautions: '슈가클레이는 모형 제작용이므로 체험 중 먹지 않도록 주의합니다.',
    durationMinutes: 20,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b4-2-1', 'b4-1-2'],
    mapSvgId: 'room-4-2'
  },
  {
    id: 'b5-1-1',
    code: '5-1 ①',
    name: '연성 PC방 (바이브코딩)',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 4,
    roomName: '5학년 1반 교실 앞쪽',
    locationDetail: '4층 5-1 교실 (모니터 체험 존)',
    organizer: '연성초 5학년 1반',
    emoji: '💻',
    shortDesc: '학생들이 직접 코딩으로 제작한 꿀잼 미니게임 오락실!',
    description: '5학년 1반 학생들이 바이브코딩(AI & 블록코딩)으로 손수 개발한 인터랙티브 아케이드 게임을 직접 플레이해보고, 미래 프로그래머 직업을 탐구해보는 인기 만점 부스입니다.',
    activities: [
      '장애물 피하기, 퀴즈 배틀, 스피드 달리기 등 학생 제작 게임 플레이',
      '게임 클리어 시 스탬프 획득 및 최고 랭킹 점수 등록',
      '게임 개발 코드를 둘러보고 간단한 게임 규칙 개조해보기'
    ],
    materials: '노트북 및 태블릿, 조이스틱/키보드, 스코어보드',
    cautions: '다음 친구를 위해 한 게임당 플레이 시간(약 5분)을 지켜주세요.',
    durationMinutes: 15,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b5-1-2', 'b-parent'],
    mapSvgId: 'room-5-1'
  },
  {
    id: 'b5-1-2',
    code: '5-1 ②',
    name: '로봇축구 체험',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 4,
    roomName: '5학년 1반 교실 뒤쪽',
    locationDetail: '4층 5-1 교실 (전용 축구 경기장 트랙)',
    organizer: '연성초 5학년 1반',
    emoji: '🤖',
    shortDesc: '무선 조종 로봇을 조종해 상대 골대에 골을 넣는 로봇 축구!',
    description: '드론과 분리되어 더욱 넓고 쾌적해진 전용 로봇 경기장! 무선 컨트롤러로 RC 축구 로봇을 정밀하게 조종하여 드리블과 강력한 슈팅으로 골을 넣는 흥미진진한 로봇 스포츠 대결 부스입니다.',
    activities: [
      '2인 1조 무선 축구 로봇 기본 조종법(전진, 후진, 회전) 익히기',
      '장애물을 피해 공을 몰고 가는 드리블 챌린지',
      '친구와 함께하는 3분 미니 로봇 축구 매치 (골 넣기 시합)'
    ],
    materials: '무선 RC 축구 로봇 4대, 전용 미니 축구 경기장, 무선 컨트롤러, 충전기',
    cautions: '로봇끼리 너무 강하게 충돌하지 않도록 조심해서 조종해 주세요.',
    durationMinutes: 15,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b5-1-1', 'b5-2-1'],
    mapSvgId: 'room-5-1'
  },
  {
    id: 'b5-1-drone',
    code: '5-1 ③',
    name: '드론 비행 체험장',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 4,
    roomName: '4층 드론체험실 (학생자치실 옆)',
    locationDetail: '4층 학생자치실 바로 옆 교실 (드론 전용 안전 비행장)',
    organizer: '연성초 5학년 1반',
    emoji: '🛸',
    shortDesc: '넓고 안전한 전용 교실에서 즐기는 미니 드론 링 통과 비행!',
    description: '안전하고 자유로운 비행을 위해 4층 학생자치실 옆 넓은 교실로 이전하여 단독 운영되는 드론 전용 체험 부스입니다! 안전망이 완비된 공간에서 교육용 미니 드론을 직접 이륙·착륙시키고 훌라후프 링 통과 미션에 도전해 보세요.',
    activities: [
      '미니 드론 조종기 조작법 및 안전 수칙 안내',
      '호버링(공중 정지 비행) 및 이착륙 연습',
      '훌라후프와 장애물 링 통과 미션 비행 도전'
    ],
    materials: '안전 보호가드 미니 드론, 무선 조종기, 대형 훌라후프 링 거치대, 안전 네트',
    cautions: '드론 프로펠러가 회전 중일 때는 절대 손을 대지 말고, 안전선 밖에서 차례를 기다립니다.',
    durationMinutes: 15,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b-council', 'b-parent'],
    mapSvgId: 'room-drone'
  },
  {
    id: 'b5-2-1',
    code: '5-2 ①',
    name: '생활용품 만들기',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 4,
    roomName: '5학년 2반 교실 앞쪽',
    locationDetail: '4층 5-2 교실 (수공예 창작 존)',
    organizer: '연성초 5학년 2반',
    emoji: '🪞',
    shortDesc: '예쁜 비즈 팔찌, 손거울 키링, 나만의 독서 책갈피 만들기!',
    description: '실생활에서 매일매일 유용하게 쓸 수 있는 소품들을 내 손으로 직접 디자인하고 만듭니다. 나만의 감성이 듬뿍 담긴 예쁜 생활용품을 완성해 친구나 가족에게 선물해보세요.',
    activities: [
      '우레탄 줄에 감성 비즈를 꿰어 만드는 패션 팔찌',
      '압화(말린 꽃)와 레진 스티커로 꾸미는 휴대용 원형 손거울 키링',
      '좋아하는 글귀를 적어 코팅하는 투명 캘리그라피 책갈피'
    ],
    materials: '비즈 원사, 손거울 반제품, 투명 책갈피 필름, 리본 끈',
    cautions: '접착 재료가 옷에 묻지 않도록 조심해서 다뤄주세요.',
    durationMinutes: 15,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b5-2-2', 'b5-1-2'],
    mapSvgId: 'room-5-2'
  },
  {
    id: 'b5-2-2',
    code: '5-2 ②',
    name: '실내 스포츠 체험',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 4,
    roomName: '5학년 2반 교실 뒤쪽',
    locationDetail: '4층 5-2 교실 (매트 경기 구역)',
    organizer: '연성초 5학년 2반',
    emoji: '🎯',
    shortDesc: '협동 놀이와 스피드 스포츠 미션으로 활력과 협동심 UP!',
    description: '친구들과 함께 몸을 움직이며 스트레스를 날려버리는 스포츠 체험 부스입니다. 협동 공 굴리기, 컵 쌓기 챌린지, 실내 볼링 등 다양한 미니 스포츠가 준비되어 있습니다.',
    activities: [
      '팀원과 힘을 모아 공을 떨어뜨리지 않고 통과시키는 협동 레일 게임',
      '스피드 스포츠 스태킹(컵 쌓기) 기록 대항전',
      '미니 실내 타겟 볼링 스트라이크 도전'
    ],
    materials: '스태킹 컵, 볼링 핀 및 소프트 볼, 팀 미션 도구, 안전 충격방지 매트',
    cautions: '양말을 신고 안전 매트 위에서 차례를 지켜 활동하며 뛰지 않습니다.',
    durationMinutes: 15,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b5-2-1', 'b4-1-1'],
    mapSvgId: 'room-5-2'
  },
  {
    id: 'b-parent',
    code: '꿈이음',
    name: '꿈이음마당 (학부모회 야시장 놀이터)',
    category: 'parent',
    categoryLabel: '학부모회 부스',
    floor: 4,
    roomName: '4층 복도 (5-1 교실 옆)',
    locationDetail: '4층 복도 중앙 로비 (5학년 1반 출입문 바로 앞 복도)',
    organizer: '연성초등학교 학부모회',
    emoji: '🎪',
    shortDesc: '야시장 컨셉의 신나는 링 던지기, 인형 맞추기, 행운의 랜덤 뽑기!',
    description: '연성초 학부모회에서 사랑을 듬뿍 담아 준비한 신나는 야시장 테마 놀이터입니다! 4층 복도를 오가며 누구나 즐겁게 참여할 수 있는 추억의 야시장 게임(링 던지기, 인형 타겟 맞추기, 두근두근 랜덤 뽑기)을 즐기고, 프로그램 참여 후 달콤하고 맛있는 참가 선물 간식을 받아보세요.',
    activities: [
      '【링 던지기】 표적 기둥에 링을 쏙! 집중력 링 던지기 챌린지',
      '【인형 맞추기】 조준하고 팡팡! 타겟 인형 맞추기 미션',
      '【랜덤 뽑기】 어떤 행운의 선물이 나올까? 두근두근 랜덤 추첨',
      '【참가 상품 수령】 활동 참여를 완료한 모든 학생에게 맛있는 간식 선물 증정!'
    ],
    materials: '링 던지기 세트, 타겟 인형 및 전용 거치대, 랜덤 뽑기판/추첨함, 참가 상품용 개별 포장 간식',
    cautions: '복도 이동 통로이므로 차례를 지켜 한 줄로 대기해 주세요. 제공되는 간식은 위생과 안전을 위해 교실 또는 귀가 후 섭취합니다.',
    durationMinutes: 10,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b5-1-1', 'b-council'],
    mapSvgId: 'room-parent'
  },

  // ================= 5층 부스 =================
  {
    id: 'b6-1-1',
    code: '6-1 ①',
    name: '햇반놀이터',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 5,
    roomName: '6학년 1반 교실 앞쪽',
    locationDetail: '5층 6-1 교실 (미니 아케이드 존)',
    organizer: '연성초 6학년 1반',
    emoji: '🥌',
    shortDesc: '긴장감 넘치는 실내사격, 플로어 컬링, 통통 튀는 탁구공게임!',
    description: '최고 학년 6학년 형, 누나들이 준비한 박진감 넘치는 스포츠 게임 테마파크! 안전 과녁 실내사격, 손끝으로 밀어 넣는 실내 컬링, 튕겨서 컵에 넣는 탁구공 바운스 게임을 모두 즐길 수 있습니다.',
    activities: [
      '안전 흡착식 다트 및 너프건 타겟 정밀 사격',
      '표적 원 안에 스톤을 가장 가깝게 붙이는 테이블 컬링 대결',
      '바닥에 한 번 튕겨 목표 계란판 구멍에 넣는 탁구공 챌린지'
    ],
    materials: '안전 다트/사격 세트, 미니 컬링 스톤, 탁구공 및 바운스 타겟',
    cautions: '사격 도구는 절대로 사람을 향해 겨누지 않으며 표적판을 향해서만 쏩니다.',
    durationMinutes: 15,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b6-1-2', 'b6-2-1'],
    mapSvgId: 'room-6-1'
  },
  {
    id: 'b6-1-2',
    code: '6-1 ②',
    name: '슈링크 아틀리에',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 5,
    roomName: '6학년 1반 교실 뒤쪽',
    locationDetail: '5층 6-1 교실 (공예 오븐 존)',
    organizer: '연성초 6학년 1반',
    emoji: '🎨',
    shortDesc: '오븐에 구우면 마법처럼 작고 단단해지는 슈링클스 키링!',
    description: '특수 슈링크 종이에 내가 좋아하는 캐릭터나 도안을 그리고 색칠한 뒤, 미니 오븐기에 구워내는 마법 같은 공예 체험! 1/7 크기로 줄어들며 플라스틱처럼 단단한 예쁜 키링이 완성됩니다.',
    activities: [
      '슈링크 투명 필름에 네임펜과 파스텔로 나만의 그림 그리기',
      '열풍 오븐 속에서 춤추듯 줄어드는 슈링크 플라스틱 관찰하기',
      'D자 고리와 체인을 달아 완성도 높은 가방 키링 만들기'
    ],
    materials: '슈링크 종이, 도안집, 유성 필기구, 힛툴/미니오븐, 키링 고리',
    cautions: '구워진 직후의 플라스틱은 뜨거우니 반드시 6학년 도우미가 집게로 꺼냅니다.',
    durationMinutes: 20,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b6-1-1', 'b-job-1'],
    mapSvgId: 'room-6-1'
  },
  {
    id: 'b6-2-1',
    code: '6-2 ①',
    name: '비추미 오싹 교실',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 5,
    roomName: '6학년 2반 교실 앞쪽',
    locationDetail: '5층 6-2 교실 (암막 체험 존)',
    organizer: '연성초 6학년 2반',
    emoji: '👻',
    shortDesc: '공포 상황 속 미션 수행! 나의 용기와 회복탄력성 테스트!',
    description: '어두컴컴한 암막 교실 안에서 펼쳐지는 스릴 만점의 미션 체험! 두려움을 이겨내고 친구와 손을 맞잡고 단서를 찾아 탈출하며 마음의 용기와 회복탄력성을 키워봅니다.',
    activities: [
      '작은 미니 손전등을 들고 어둠 속 암호 글자 찾기',
      '소리 나는 미스터리 박스 안에 손을 넣어 숨겨진 열쇠 꺼내기',
      '용기의 탈출구에서 "해냈다!" 스탬프 찍고 용기 배지 받기'
    ],
    materials: '암막 커튼, LED 미니 라이트, 미션 힌트 카드, 용기 수료증 스티커',
    cautions: '너무 무서워하는 저학년 친구는 조명을 켠 안전 관람 코스로 안내합니다.',
    durationMinutes: 15,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b6-2-2', 'b-health'],
    mapSvgId: 'room-6-2'
  },
  {
    id: 'b6-2-2',
    code: '6-2 ②',
    name: '쉿, 비밀 마음 편지',
    category: 'student',
    categoryLabel: '학생 운영 부스',
    floor: 5,
    roomName: '6학년 2반 교실 뒤쪽',
    locationDetail: '5층 6-2 교실 (우체국 배달 본부)',
    organizer: '연성초 6학년 2반',
    emoji: '💌',
    shortDesc: '평소 전하지 못한 진심을 글로 쓰고 음성으로 전하는 배달 서비스!',
    description: '친구, 후배, 선배, 선생님께 고마움과 사랑을 전하는 특별 배달 우체국! 예쁜 편지지에 비밀 편지를 쓰거나 큐알코드 음성 편지를 녹음하면, 6학년 배달 특공대가 해당 교실로 직접 전달해 드립니다.',
    activities: [
      '비밀 편지지 작성 및 실링 왁스 느낌 스티커로 봉인하기',
      '따뜻한 목소리를 담는 음성 녹음 메시지 카드 제작',
      '우체통에 접수하면 당일 행사 종료 전 수신자 교실로 직접 특급 배달'
    ],
    materials: '디자인 편지지, 특급 배달 봉투, 스탬프, 음성 녹음 장치',
    cautions: '상대방에게 상처를 줄 수 있는 나쁜 말이나 장난은 절대 금지입니다.',
    durationMinutes: 15,
    targetGrades: '전학년 (1~6학년)',
    adjacentBoothIds: ['b6-2-1', 'b6-1-1'],
    mapSvgId: 'room-6-2'
  },
  {
    id: 'b-job-1',
    code: '꿈JOB',
    name: '꿈JOB마당 (특수분장 & 메이크업)',
    category: 'external',
    categoryLabel: '외부 전문기관',
    floor: 5,
    roomName: '5층 동아리 1·2실',
    locationDetail: '5층 동아리 1실(특수분장) 및 2실(메이크업아티스트)',
    organizer: '한국미래진로센터 전문 강사진',
    emoji: '🎭',
    shortDesc: '전문 뷰티·특수분장 아티스트 직업 체험 및 페이스페인팅!',
    description: '전문 진로체험 기관인 한국미래진로센터 강사님들과 함께하는 생생한 직업 세계! 영화·방송 속 특수분장의 원리와 프로 메이크업 아티스트의 도구를 직접 관찰하고, 실감 나는 상처 분장이나 멋진 페이스페인팅을 직접 받아봅니다.',
    activities: [
      '【동아리 1실】 특수분장: 영화 속 인공 상처, 흉터, 페이스페인팅 시연 및 체험',
      '【동아리 2실】 메이크업아티스트: 피부 톤 진단, 포인트 메이크업 및 직업 특강',
      '전문 아티스트와의 1:1 진로 질의응답 및 미래 진로 포토존 사진 촬영'
    ],
    materials: '피부 무독성 분장용 왁스, 식용 인공 피, 프로 메이크업 팔레트, 소독용 티슈',
    cautions: '1·2·3학년은 필수 참여 부스입니다. 분장 후 물이나 비누로 깨끗이 지워집니다.',
    durationMinutes: 20,
    targetGrades: '1·2·3학년 필수 / 4·5·6학년 희망자 선택',
    adjacentBoothIds: ['b6-1-1', 'b-health'],
    mapSvgId: 'room-job'
  },
  {
    id: 'b-health',
    code: '꿈건강',
    name: '꿈건강마당 (가드너스 흡연예방)',
    category: 'external',
    categoryLabel: '외부 전문기관',
    floor: 5,
    roomName: '5층 이음교실 1실',
    locationDetail: '5층 이음교실 1실 (건강 보건 체험실)',
    organizer: '전문 보건기관 가드너스',
    emoji: '🫁',
    shortDesc: '나의 튼튼한 폐활량 측정 & 금연 다짐 키링 만들기!',
    description: '건강한 나의 몸과 밝은 미래를 위해 흡연의 위험성을 배우고 체험하는 보건 진로 부스입니다. 디지털 폐활량 측정기로 내 호흡 건강을 직접 수치로 확인하고, 평생 노담(No 담배)을 약속하는 멋진 금연 키링을 만듭니다.',
    activities: [
      '디지털 폐활량계로 나의 숨 파워 측정 및 건강 등급 확인',
      '흡연자의 폐 모형과 정상 폐 모형 직접 비교 관찰',
      '‘평생 건강 노담’ 슬로건을 담은 야광 금연 다짐 키링 DIY'
    ],
    materials: '일회용 위생 마우스피스 폐활량계, 인체 폐 모형, 아크릴 금연 키링 재료',
    cautions: '폐활량 측정 시 개인별 1회용 마우스피스를 사용하여 위생적으로 진행됩니다.',
    durationMinutes: 20,
    targetGrades: '3·4·5·6학년 고학년 필수 / 1·2학년 희망 체험 가능',
    adjacentBoothIds: ['b6-2-1', 'b-job-1'],
    mapSvgId: 'room-health'
  }
];

export const FESTIVAL_INFO = {
  title: '2026 연성초 꿈마당 (진로의 날)',
  slogan: '꿈을 만나고, 꿈을 체험하다',
  date: '2026년 10월 15일(목)',
  dateIso: '2026-10-15T09:10:00+09:00',
  time: '09:10 ~ 12:20',
  place: '연성초등학교 4·5층 교실 및 복도',
  target: '연성초등학교 전교생',
  principles: [
    {
      num: 1,
      title: '1·2·3학년은 외부업체 부스 모두 필수 체험',
      desc: '꿈JOB마당(특수분장/메이크업)은 1~3학년 필수 체험 코스입니다.'
    },
    {
      num: 2,
      title: '4·5·6학년은 외부업체 부스 희망 선택',
      desc: '고학년은 희망자에 한하여 특수분장 또는 메이크업 부스를 선택해 참여합니다.'
    },
    {
      num: 3,
      title: '흡연예방 부스는 3·4·5·6학년 필수',
      desc: '3~6학년은 건강한 미래를 위한 꿈건강마당(흡연예방)을 필수로 체험하며, 1·2학년도 자율 체험 가능합니다.'
    },
    {
      num: 4,
      title: '4·5·6학년 A조 / B조 교대 운영',
      desc: 'A조(1부 체험 / 2부 부스 운영), B조(1부 부스 운영 / 2부 체험)로 나뉘어 참여합니다.'
    }
  ]
};
