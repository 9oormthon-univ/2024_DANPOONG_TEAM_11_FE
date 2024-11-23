import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 라우터 훅
import { registerFarm } from '../../apis/farmApi'; // 농산물 생산자 등록 API
import { registerRestaurant } from '../../apis/restaurantApi'; // 요식업 종사자 등록 API
import Shop from '../../assets/image/login/Shop.svg';
import ShopActive from '../../assets/image/login/Shop_active.svg';
import Person from '../../assets/image/login/Person.svg';
import PersonActive from '../../assets/image/login/Person_active.svg';
import Mobile from '../../assets/image/login/Mobile.svg';
import MobileActive from '../../assets/image/login/Mobile_active.svg';
import Pin from '../../assets/image/login/Pin.svg';
import PinActive from '../../assets/image/login/Pin_active.svg';
import ChieldCheck from '../../assets/image/login/ChieldCheck.svg';
import ChieldCheckActive from '../../assets/image/login/ChieldCheck_active.svg';
import styled from 'styled-components';

const RegisterFormPage = () => {
  const location = useLocation(); // 이전 페이지에서 전달된 데이터 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

  // 전달된 userType
  const userType = location.state?.userType || '농산물 생산자';

  // 잘못된 접근일 경우 홈으로 이동
  if (!location.state) {
    navigate('/home');
    return null;
  }

  const [form, setForm] = useState({
    shopName: '',
    representativeName: '',
    contactNumber: '',
    registrationNumber: '',
    address: '',
  });

  const [activeField, setActiveField] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setIsFilled(Object.values({ ...form, [name]: value }).every((field) => field !== ''));
  };

  const handleSubmit = async () => {
    if (!isFilled) return;

    const accessToken = localStorage.getItem('accessToken'); // 액세스 토큰 가져오기
    if (!accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    try {
      let response;
      if (userType === '농산물 생산자') {
        response = await registerFarm(form, accessToken); // 농산물 생산자 등록
      } else if (userType === '요식업 종사자') {
        response = await registerRestaurant(form, accessToken); // 요식업 종사자 등록
      }

      alert(`${userType} 등록이 완료되었습니다!`);
      console.log('등록 성공:', response);

      // 성공 시 홈 화면으로 이동
      navigate('/home');
    } catch (error) {
      alert('등록 중 오류가 발생했습니다. 다시 시도해 주세요.');
      console.error('등록 실패:', error);
    }
  };

  const getIcon = (fieldName) => {
    const isActive = activeField === fieldName || form[fieldName] !== '';
    switch (fieldName) {
      case 'shopName':
        return isActive ? ShopActive : Shop;
      case 'representativeName':
        return isActive ? PersonActive : Person;
      case 'contactNumber':
        return isActive ? MobileActive : Mobile;
      case 'registrationNumber':
        return isActive ? ChieldCheckActive : ChieldCheck;
      case 'address':
        return isActive ? PinActive : Pin;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>
        <span>{userType} 등록을<br /></span> 완료해 주세요
      </h1>
      <p>사업자 정보를 입력해 주세요</p>
      <div>
        <p>상호명</p>
        <label>
          <img src={getIcon('shopName')} alt="Shop Icon" />
          <input
            type="text"
            name="shopName"
            placeholder="ex) 농담이네"
            value={form.shopName}
            onChange={handleInputChange}
            onFocus={() => setActiveField('shopName')}
            onBlur={() => setActiveField('')}
          />
        </label>

        <p>대표자 이름</p>
        <label>
          <img src={getIcon('representativeName')} alt="Person Icon" />
          <input
            type="text"
            name="representativeName"
            placeholder="ex) 김농"
            value={form.representativeName}
            onChange={handleInputChange}
            onFocus={() => setActiveField('representativeName')}
            onBlur={() => setActiveField('')}
          />
        </label>

        <p>고객센터(연락처)</p>
        <label>
          <img src={getIcon('contactNumber')} alt="Mobile Icon" />
          <input
            type="text"
            name="contactNumber"
            placeholder="ex) 010-1234-5678"
            value={form.contactNumber}
            onChange={handleInputChange}
            onFocus={() => setActiveField('contactNumber')}
            onBlur={() => setActiveField('')}
          />
        </label>

        <p>사업자 등록 번호</p>
        <label>
          <img src={getIcon('registrationNumber')} alt="Chield Check Icon" />
          <input
            type="text"
            name="registrationNumber"
            placeholder="ex) 1234567890"
            value={form.registrationNumber}
            onChange={handleInputChange}
            onFocus={() => setActiveField('registrationNumber')}
            onBlur={() => setActiveField('')}
          />
        </label>

        <p>사업자 소재지</p>
        <label>
          <img src={getIcon('address')} alt="Pin Icon" />
          <input
            type="text"
            name="address"
            placeholder="ex) 서울시 농담구 농담로 10"
            value={form.address}
            onChange={handleInputChange}
            onFocus={() => setActiveField('address')}
            onBlur={() => setActiveField('')}
          />
        </label>

        <button disabled={!isFilled} onClick={handleSubmit}>
          등록하기
        </button>
      </div>
    </div>
  );
};

export default RegisterFormPage;



const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  padding: 1.3rem;
  padding-top: 6rem;
`;

const Notice = styled.p`
  font-size: 1rem;
  margin-bottom: 0.7rem;
`;

const Header = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1.4rem;
`;

const Span = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1.4rem;
`;

const SubText = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.caption2};
  margin-bottom: 2rem;
`;

const Form = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.caption2};
  border-radius: 0.5rem;
  padding: 0.5rem;
  height: 3.25rem;
  background-color: ${({ isActive }) => (isActive ? '#FFEFD9' : 'white')};
`;

const Icon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ isActive }) => (isActive ? '#FFEFD9' : 'white')};

  ::placeholder {
    color: ${({ theme }) => theme.colors.caption2};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.95rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ isFilled, theme }) => (isFilled ? theme.colors.orange : theme.colors.button)};
  border: none;
  border-radius: 0.5rem;
  cursor: ${({ isFilled }) => (isFilled ? 'pointer' : 'default')};
  margin-top: 1.8rem;
  transition: background-color 0.3s;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3); 

  &:hover {
    background-color: ${({ isFilled, theme }) => (isFilled ? theme.colors.orangeHover : theme.colors.button)};
  }
`;