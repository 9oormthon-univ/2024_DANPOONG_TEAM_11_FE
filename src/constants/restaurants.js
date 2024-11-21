import restaurant1 from '../assets/image/restaurant/restaurant1.png';
import restaurant2 from '../assets/image/restaurant/restaurant2.png';
import restaurant3 from '../assets/image/restaurant/restaurant3.png';
import restaurant4 from '../assets/image/restaurant/restaurant4.png';
import restaurant5 from '../assets/image/restaurant/restaurant5.png';
import restaurant1_1 from '../assets/image/restaurant/restaurant1_1.png';


// import 나중에 다 묶어서 해주기~
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
  },
  {
    id: 2,
    image: {
      main: restaurant2,
      // detail: restaurant2_1,
    },
    name: '온기',
    tags: ['성남시 분당구', '진영 단감', '감 타르트'],
    lat: 37.3527102,
    lng: 127.0715293,
    badge: '농담인증',
    location: '서울 강남구',
    time: '10:00 ~ 22:00',
    description: '신선한 재료를 사용한 샌드위치 맛집',
  },
  {
    id: 3,
    image: {
      main: restaurant3,
      // detail: restaurant1_1,
    },
    name: '청파솜',
    tags: ['경기도 안양', '창녕 감', '마늘 떡갈비'],
    lat: 37.3537102,
    lng: 127.0725293,
    badge: '농담인증',
    location: '서울 강남구',
    time: '10:00 ~ 22:00',
    description: '신선한 재료를 사용한 샌드위치 맛집',
  },
  {
    id: 4,
    image: {
      main: restaurant4,
      // detail: restaurant4_1,
    },
    name: '온기',
    tags: ['충청남도 천안', '홍천 감자', '감자 짜글이'],
    lat: 37.3537102,
    lng: 127.0725293,
    badge: '농담인증',
    location: '서울 강남구',
    time: '10:00 ~ 22:00',
    description: '신선한 재료를 사용한 샌드위치 맛집',
  },
  {
    id: 5,
    image: {
      main: restaurant5,
      // detail: restaurant5_1,
    },
    name: '온기',
    tags: ['성남시 분당구', '진영 단감', '감 타르트'],
    lat: 37.3537102,
    lng: 127.0725293,
    badge: '농담인증',
    location: '서울 강남구',
    time: '10:00 ~ 22:00',
    description: '신선한 재료를 사용한 샌드위치 맛집',
  },
];

export default restaurants;