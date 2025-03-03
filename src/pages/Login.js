import React, { useState, useEffect } from 'react';
import Tab from '../components/Tab';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // 활성화된 Tab state 관리
  const [activeTab, setActiveTab] = useState('login');

  // 폼 데이터 상태 관리
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  // 에러 메세지 상태
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  // 타이머 상태 추가
  const [timeLeft, setTimeLeft] = useState(180); // 3분 = 180초
  const [isExpired, setIsExpired] = useState(false); // 만료 상태 추가

  // QR 상태 관리
  const [qrStatus, setQrStatus] = useState('waiting');

  // 임시 사용자 데이터
  const DUMMY_USER = {
    id: 'test123',
    password: 'test123',
  };

  // 로그인 성공 시
  localStorage.setItem('isLoggedIn', 'true');

  // 로그인 체크
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // 로그아웃 시
  localStorage.removeItem('isLoggedIn');

  // 타이머 효과
  useEffect(() => {
    if (activeTab !== 'qr') return; // QR 탭이 아니면 타이머 실행 안 함

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer); // 타이머 정지
          setIsExpired(true); // 만료 상태로 변경
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // 컴포넌트 언마운트 또는 탭 변경 시 타이머 정리
    return () => clearInterval(timer);
  }, [activeTab]);

  // QR 인증 체크
  useEffect(() => {
    if (activeTab !== 'qr' || isExpired || qrStatus === 'success') return;

    console.log('QR 인증 시작...'); // 로그 추가

    const fakeAuth = setTimeout(() => {
      console.log('QR 인증 성공!'); // 로그 추가
      setQrStatus('success');

      // 로그인 정보 저장
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: 'test123',
          name: '테스트 사용자',
        }),
      );

      console.log('로그인 정보 저장 완료'); // 로그 추가

      // 3초 후 메인 페이지로 이동
      setTimeout(() => {
        console.log('메인 페이지로 이동 시도...'); // 로그 추가
        navigate('/main');
      }, 3000);
    }, 10000);

    return () => {
      clearTimeout(fakeAuth);
    };
  }, [activeTab, isExpired, qrStatus, navigate]);

  // 분:초 형식으로 변환하는 함수
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 입력값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
    // 입력 시 해당 필드의 에러 메세지 초기화
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // 로그인 처리
  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 기본 동작 방지

    // 임시 로그인 검증
    if (loginForm.username === '') {
      setErrors({
        ...errors, // 기존 에러 상태 유지
        username: '아이디를 입력해주세요.',
        password: '', // 비밀번호 에러는 초기화
      });
      return;
    }

    if (loginForm.password === '') {
      setErrors({
        ...errors, // 기존 에러 상태 유지!
        username: '', // username 에러는 초기화
        password: '비밀번호를 입력해주세요.',
      });
      return;
    }

    try {
      // 로그인 API 호출
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginForm),
      });

      const data = await response.json();

      if (response.ok) {
        // 로그인이 성공
        console.log('로그인 성공:', data);
        // navigate('/main');
      } else {
        // 서버에서 받은 에러 메세지 처리
        if (data.error === 'invalid_username') {
          setErrors({
            ...errors,
            username: '존재하지 않는 아이디입니다.',
          });
        } else if (data.error === 'invalid_password') {
          setErrors({
            ...errors,
            password: '비밀번호가 일치하지 않습니다.',
          });
        }
      }

      if (data.error === 'invalid_username') {
        setErrors({
          ...errors,
          username: '존재하지 않는 아이디입니다.',
        });
      } else if (data.error === 'invalid_password') {
        setErrors({
          ...errors,
          username: '', // username 에러는 초기화!
          password: '비밀번호가 일치하지 않습니다.',
        });
      }
    } catch (error) {
      console.error('로그인 에러: ', error);
      setErrors({
        username: '',
        password: '로그인 처리 중 오류가 발생했습니다.',
      });
    }
  };

  // QR 코드 재요청
  const handleQRRefresh = () => {
    setTimeLeft(180);
    setIsExpired(false);
    setQrStatus('waiting');
    // 재요청 시 저장된 로그인 정보 삭제
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  };

  // Tab 데이터 정의
  const loginTabs = [
    { id: 'login', content: 'ID/PW' },
    { id: 'qr', content: 'QR 코드' },
  ];

  return (
    <div className='flex min-h-screen'>
      <section className='flex-1 bg-gray-100'>
        <div className='flex flex-col items-center justify-center h-full'>
          <p className='text-center mb-4'>평택시 주민의 친환경</p>
          <h1 className='text-green-600 text-2xl font-bold'>Green Reuse</h1>
        </div>
      </section>
      <section className='w-[580px] bg-[#27264E] text-white p-8'>
        <h2 className='mb-8'>로그인</h2>

        {/* Tab 컴포넌트 */}
        <Tab tabs={loginTabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'login' ? (
          <form onSubmit={handleSubmit} className='space-y-4'>
            <article className='flex gap-4'>
              <div className=''>
                <input
                  type='text'
                  name='username'
                  value={loginForm.username}
                  onChange={handleChange}
                  placeholder='아이디를 입력해주세요.'
                  className={`w-full p-2 rounded-md bg-transparent border border-white ${
                    errors.username ? 'border-yellow-500' : 'border-gray-300'
                  }`}
                />
                {/* 아이디 에러 메세지 */}
                {errors.username && (
                  <p className='text-yellow-500 text-sm mt-1'>{errors.username}</p>
                )}
                <input
                  type='password'
                  name='password'
                  value={loginForm.password}
                  onChange={handleChange}
                  placeholder='비밀번호를 입력해주세요.'
                  className={`w-full p-2 rounded-md bg-transparent border border-white ${
                    errors.password ? 'border-yellow-500' : 'border-gray-300'
                  }`}
                />
                {errors.password && (
                  <p className='text-yellow-500 text-sm mt-1'>{errors.password}</p>
                )}
              </div>
              <button
                type='submit'
                className='w-full h-full bg-blue-500 p-2 rounded hover:bg-blue-600'
              >
                로그인
              </button>
            </article>
            <article className='flex justify-center gap-4 mt-4'>
              <a
                href='#'
                className='text-gray-300 hover:text-white hover:underline hover:font-bold'
              >
                회원가입
              </a>
              <div className='text-gray-500'>|</div>
              <a
                href='#'
                className='text-gray-300 hover:text-white hover:underline hover:font-bold'
              >
                아이디찾기
              </a>
              <div className='text-gray-500'>|</div>
              <a
                href='#'
                className='text-gray-300 hover:text-white hover:underline hover:font-bold'
              >
                비밀번호찾기
              </a>
            </article>
          </form>
        ) : (
          <div className='flex flex-col items-center p-8'>
            {/* QR 코드 영역 */}
            <div
              className={`w-48 h-48 bg-white p-4 rounded-lg mb-6 relative ${
                isExpired ? 'opacity-50' : ''
              }`}
            >
              <img src='/qr-placeholder.png' alt='QR 코드' className='w-full h-full' />
              {isExpired && (
                <div className='absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg'>
                  <span className='text-white font-medium'>만료됨</span>
                </div>
              )}
            </div>

            {/* 타이머 표시 */}
            <div className='flex items-center gap-2 mb-4'>
              <span className='text-white'>남은 시간</span>
              <span className='text-yellow-400 font-bold'>
                {isExpired
                  ? '0분 00초'
                  : `${Math.floor(timeLeft / 60)}분 ${(timeLeft % 60).toString().padStart(2, '0')}초`}
              </span>
            </div>

            {isExpired ? (
              // 만료 시 메시지와 버튼
              <div className='flex flex-col items-center gap-2'>
                <p className='text-yellow-400'>인증 시간이 만료되었습니다.</p>
                <button
                  onClick={handleQRRefresh}
                  className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
                >
                  QR코드 재요청
                </button>
              </div>
            ) : (
              // QR 코드 스캔 안내 메시지
              <p className='text-center text-white'>
                스마트폰 카메라로 QR코드를 촬영해서
                <br />
                로그인해주세요.
              </p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Login;
