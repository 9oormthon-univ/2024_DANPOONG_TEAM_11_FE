import React, { useState } from 'react';
import styled from 'styled-components';
import { registerIngredient } from '../../apis/ingredientApi'; 
import Drop from '../../assets/image/login/Drop.svg';
import Upload from '../../assets/image/login/Upload.svg';
import Check from '../../assets/image/login/Check.svg';
import Check_active from '../../assets/image/login/Check_active.svg';
import Price from '../../assets/image/login/Price.svg';
import Price_active from '../../assets/image/login/Price_active.svg';

export default function FarmRegisterFormPage() {
  const [selectedCategory, setSelectedCategory] = useState('선택해주세요');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState('선택해주세요');
  const [isReasonDropdownOpen, setIsReasonDropdownOpen] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [formFields, setFormFields] = useState({
    productName: '',
    reasonDescription: '',
    price: '',
  });

  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);

  const isFormValid =
    formFields.productName &&
    formFields.reasonDescription &&
    formFields.price &&
    selectedCategory !== '선택해주세요' &&
    selectedReason !== '선택해주세요';

  const categories = [
    '고구마/감자/밤',
    '쌀/옥수수/콩',
    '고추/마늘/양파',
    '나물',
    '쌈채소',
    '홍삼/인삼/새싹삼',
    '오이/파',
    '배추/무',
    '버섯',
    '기타',
  ];

  const reasons = [
    '모양이 달라요',
    '얼룩졌어요',
    '조금 작아요',
    '상처가 있어요',
    '색깔이 고르지 않아요',
    '기타',
  ];

  const handleInputChange = (field, value) => {
    setFormFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event) => {
    if (event.target.files) {
      const fileList = Array.from(event.target.files);

      // 파일 개수 제한 (최대 3개)
      if (fileList.length > 3) {
        alert('최대 3개의 이미지만 업로드할 수 있습니다.');
        return;
      }

      setFileUploaded(true);
      setUploadedFiles(fileList);
      setFileName(`${fileList.length}개의 파일이 업로드되었습니다.`);
    }
  };

  const handleSubmit = async () => {
    if (!isFormValid) {
      alert('모든 필드를 채워주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('ingredientName', formFields.productName);
    formData.append('uglyReason', selectedReason);
    formData.append('ingredientDescription', formFields.reasonDescription);
    formData.append('price', formFields.price);
    formData.append('category', selectedCategory);
    formData.append('farmId', '1'); // 농가 ID 예시

    // 업로드된 파일 추가
    uploadedFiles.forEach((file) => {
      formData.append('ingredientImages', file);
    });

    try {
      setIsLoading(true); // 로딩 시작
      const data = await registerIngredient('3', formData); // API 호출
      alert('등록 성공!');
      console.log('응답 데이터:', data);
    } catch (err) {
      console.error('등록 실패:', err);
      setError(err.response?.data?.message || '등록 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  return (
    <PageContainer>
      <Header>
        <Span>판매하실 농산물</Span>을<br />등록해 주세요
      </Header>
      <Form>
        {/* 이미지 업로드 */}
        <InputContainer>
          <Label>상품 사진을 등록해주세요.</Label>
          <FileInputContainer fileUploaded={fileUploaded}>
            <CheckIcon
              src={fileUploaded ? Check_active : Check}
              alt="Check Icon"
            />
            <FileLabel>
              {fileUploaded ? fileName || '등록 완료!' : '상품이 잘 보이게 사진을 등록해주세요'}
            </FileLabel>
            <UploadIcon src={Upload} alt="Upload Icon" />
            <FileInput
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
            />
          </FileInputContainer>
        </InputContainer>

        {/* 상품명 입력 */}
        <Label2>상품명을 입력해주세요.</Label2>
        <InputContainer>
          <CheckIcon
            src={formFields.productName ? Check_active : Check}
            alt="Check Icon"
          />
          <Input
            placeholder="ex) 울퉁불퉁 햇 고구마"
            value={formFields.productName}
            onChange={(e) => handleInputChange('productName', e.target.value)}
          />
        </InputContainer>

        {/* 카테고리 선택 */}
        <InputContainer>
          <Label>농산물 카테고리를 선택해주세요.</Label>
          <DropdownContainer>
            <DropdownButton
              isOpen={isCategoryDropdownOpen}
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            >
              <LeftContent>
                <CheckIcon
                  src={selectedCategory === '선택해주세요' ? Check : Check_active}
                  alt="Check Icon"
                />
                {selectedCategory}
              </LeftContent>
              <img src={Drop} alt="Drop Icon" />
            </DropdownButton>
            {isCategoryDropdownOpen && (
              <DropdownMenu isOpen={isCategoryDropdownOpen}>
                {categories.map((option, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => {
                      setSelectedCategory(option);
                      setIsCategoryDropdownOpen(false);
                    }}
                  >
                    <DropdownText>{option}</DropdownText>
                  </DropdownMenuItem>
                ))}
              </DropdownMenu>
            )}
          </DropdownContainer>
        </InputContainer>

         {/* 못난이 이유 선택 */}
         <InputContainer>
          <Label>왜 못난이인가요?</Label>
          <DropdownContainer>
            <DropdownButton
              isOpen={isReasonDropdownOpen}
              onClick={() => setIsReasonDropdownOpen(!isReasonDropdownOpen)}
            >
              <LeftContent>
                <CheckIcon
                  src={selectedReason === '선택해주세요' ? Check : Check_active}
                  alt="Check Icon"
                />
                {selectedReason}
              </LeftContent>
              <img src={Drop} alt="Drop Icon" />
            </DropdownButton>
            {isReasonDropdownOpen && (
              <DropdownMenu isOpen={isReasonDropdownOpen}>
                {reasons.map((option, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => {
                      setSelectedReason(option);
                      setIsReasonDropdownOpen(false);
                    }}
                  >
                    <DropdownText>{option}</DropdownText>
                  </DropdownMenuItem>
                ))}
              </DropdownMenu>
            )}
          </DropdownContainer>
        </InputContainer>

        {/* 상세 설명 */}
        <Label>상품 상세 설명을 입력해주세요. (최대 200자)</Label>
        <InputContainer>
          <ReasonIcon
            src={formFields.price ? Check_active : Check}
            alt="Check Icon"
          />
          <TextArea
            placeholder="ex) 비옥한 땅에서 난 땅끝 고구마에요"
            value={formFields.reasonDescription}
            onChange={(e) => handleInputChange('reasonDescription', e.target.value)}
            maxLength={200} 
          />
          <CharCount>
            {formFields.reasonDescription.length} / 200
          </CharCount>
        </InputContainer>

         {/* 무게 입력 */}
         <Label>1kg 당 가격을 입력해주세요.</Label>
        <InputContainer>
          <CheckIcon
            src={formFields.price  ? Price_active : Price}
            alt="Price Icon"
          />
          <Input
            placeholder="가격(원)"
            value={formFields.price}
            onChange={(e) => handleInputChange('price', e.target.value)}
          />
        </InputContainer>
        
        {/* 등록 버튼 */}
        <SubmitButton isFormValid={isFormValid} onClick={handleSubmit} disabled={!isFormValid}>
          {isLoading ? '등록 중...' : '등록하기'}
        </SubmitButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </PageContainer>
  );
}




const PageContainer = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 6rem;
  margin-bottom: 7rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1.4rem;
  padding-bottom: 1.5rem;
`;

const Span = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1.4rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1.8rem;
`;

const CheckIcon = styled.img`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  width: 27px;
  height: 27px;
`;


const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  padding-left: 3rem; 
  border-radius: 0.5rem;
  font-size: 1rem;
  gap: 0.5rem;
  height: 52px;
  border: 1px solid #B6B6B7;
  background-color: #fff;
  color: #323335;
  display: flex;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 11rem;
  padding: 0.8rem;
  padding-left: 3rem; 
  border-radius: 0.5rem;
   border: 1px solid #B6B6B7;
  font-size: 1rem;
  background-color: #fff;
  color: #323335;
  resize: none;
  overflow-y: auto;
  line-height: 1.5rem;

  &:focus {
    outline: none;
  }
`;

const ReasonIcon = styled.img`
  position: absolute;
  left: 0.8rem;
  top: 15%;
  transform: translateY(-50%);
  width: 27px;
  height: 27px;
`;

const CharCount = styled.p`
  text-align: right;
  font-size: 0.75rem;
  color: #858586;
  margin-top: -1.2rem;
  margin-right: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.95rem;
  font-size: 1rem;
  color: ${({ isFormValid, theme }) =>
    isFormValid ? theme.colors.white : '#FFFFFF'};
  background-color: ${({ isFormValid, theme }) =>
    isFormValid ? theme.colors.orange : '#B6B6B7'};
  border: none;
  border-radius: 0.5rem;
  cursor: ${({ isFormValid }) => (isFormValid ? 'pointer' : 'default')};
  margin-top: 1rem;
  margin-bottom: 5rem;
  transition: background-color 0.3s;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${({ isFormValid, theme }) =>
      isFormValid ? theme.colors.orangeHover : '#B6B6B7'};
  }
`;


const Label = styled.p`
  font-size: 1rem;
  margin-bottom: 0.7rem;
  color: #323335;
`;

const Label2 = styled.p`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: #323335;
`;

const SubLabel = styled.p`
  font-size: 0.75rem;
  margin-bottom: 0.7rem;
  color: #B6B6B7;
`;

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #B6B6B7;
  border-radius: 0.5rem;
  padding: 0.8rem;
  position: relative;
  background-color: ${({ fileUploaded }) => (fileUploaded ? '#fff8e1' : '#fff')};
  height: 52px;
  font-size: 1rem;
  padding-left: 3rem;  
`;

const FileLabel = styled.div`
  flex: 1;
  font-size: 1rem;
  color: ${({ fileUploaded }) => (fileUploaded ? '#323335' : '#858586')};
  display: flex;
  align-items: center;
`;

const UploadIcon = styled.img`
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  width: 27px;
  height: 27px;
`;

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.div`
  width: 100%;
  padding-right: 0.8rem;
  padding-left: 3rem; 
  height: 52px;
  border: 1px solid #B6B6B7;
  border-radius: ${({ isOpen }) => (isOpen ? '0.5rem 0.5rem 0 0' : '0.5rem')};
  font-size: 1rem;
  background-color: #fff;
  color: #555;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: ${({ isOpen }) => (isOpen ? 'none' : '1px solid #B6B6B7')};
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DropdownText = styled.span`
  padding-left: 2rem; 
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #B6B6B7;
  border-top: none;
  border-radius: ${({ isOpen }) => (isOpen ? '0 0 0.5rem 0.5rem' : '0.5rem')};
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const DropdownMenuItem = styled.li`
  padding: 1rem;
  font-size: 1rem;
  color: #858586;
  cursor: pointer;

  &:hover {
    background-color: #FFE5BE;
    color: #323335;
  }
`;