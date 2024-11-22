import restaurant1 from '../../assets/image/restaurant/restaurant1.png';
import restaurant2 from '../../assets/image/restaurant/restaurant2.png';
import restaurant3 from '../../assets/image/restaurant/restaurant3.png';
import restaurant4 from '../../assets/image/restaurant/restaurant4.png';
import restaurant5 from '../../assets/image/restaurant/restaurant5.png';
import restaurant1_1 from '../../assets/image/restaurant/restaurant1_1.png';


const restaurants = [
  {
    id: 1,
    image: {
      main: restaurant1,
      detail: restaurant1_1,
    },
    name: '모먼트',
    tags: ['서울시 강남구', '무안 양파', '양파잼'],
    lat: 37.3517102,
    lng: 127.0705293,
    badge: '농담인증',
    location: '경기도 용인시 수지구 호수로 126번길 14-1',
    time: '10:00 ~ 22:00',
    description: '무안 양파로 만든 양파잼 샌드위치',
    menu: [
      { name: '양송이수프', price: '4,500' },
      { name: '크림파스타', price: '12,000' },
      { name: '로제떡볶이', price: '9,000' },
      { name: '망고에이드', price: '4,000' },
    ],
    guide: [
      '예약은 전화로만 가능해요.',
      '반려동물 출입 가능해요.',
      '주차 불가능해요.',
    ],
  },
  {
    id: 2,
    image: {
      main: restaurant2,
    },
    name: '온기',
    tags: ['성남시 분당구', '진영 단감', '감 타르트'],
    lat: 37.3527102,
    lng: 127.0715293,
    badge: '농담인증',
    location: '서울 강남구',
    time: '10:00 ~ 22:00',
    description: '신선한 재료를 사용한 샌드위치 맛집',
    menu: [
      { name: '단호박샐러드', price: '7,000' },
      { name: '감자스프', price: '6,000' },
      { name: '토마토샌드위치', price: '8,000' },
    ],
    guide: [
      '반려동물 출입 불가능해요.',
      '주차 가능해요.',
      '예약은 필요하지 않아요.',
    ],
  },
  {
    id: 3,
    image: {
      main: restaurant3,
    },
    name: '청파솜',
    tags: ['경기도 안양', '창녕 감', '마늘 떡갈비'],
    lat: 37.3537102,
    lng: 127.0725293,
    badge: '농담인증',
    location: '서울 강남구',
    time: '10:00 ~ 22:00',
    description: '신선한 재료를 사용한 샌드위치 맛집',
    menu: [
      { name: '마늘떡갈비', price: '13,000' },
      { name: '콩나물밥', price: '6,500' },
      { name: '청국장', price: '7,000' },
    ],
    guide: [
      '예약은 전화로만 가능해요.',
      '주차 불가능해요.',
      '음료는 따로 제공되지 않아요.',
    ],
  },
  {
    id: 6,
    image: {
      main: restaurant4,
      detail: null,
    },
    name: '보리밥의정석',
    tags: ['전라북도 전주', '국산 쌀', '보리밥'],
    lat: 37.5507291,
    lng: 127.0209234,
    badge: '농담인증',
    location: '전라북도 전주시 완산구 경원동 123-45',
    time: '09:00 ~ 20:00',
    description: '정통 전주 보리밥을 맛볼 수 있는 정석 식당입니다.',
    menu: [
      { name: '보리밥정식', price: '8,500' },
      { name: '된장찌개', price: '6,500' },
    ],
    guide: [
      '예약은 불가능합니다.',
      '주차 가능합니다.',
      '반려동물은 출입 불가능합니다.',
    ],
  },
  {
    id: 7,
    image: {
      main: restaurant5,
      detail: null,
    },
    name: '산들애',
    tags: ['강원도 평창', '유기농 재료', '한정식'],
    lat: 37.3707101,
    lng: 127.1405295,
    badge: '농담인증',
    location: '강원도 평창군 봉평면 이효석로 234',
    time: '11:00 ~ 21:00',
    description: '강원도의 자연을 담은 정갈한 한정식 맛집',
    menu: [
      { name: '황태구이정식', price: '14,000' },
      { name: '감자전', price: '5,000' },
    ],
    guide: [
      '주차 가능합니다.',
      '예약은 필요하지 않습니다.',
    ],
  },
];

export default restaurants;