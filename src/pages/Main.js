import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  // 로그인 체크
  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  //   if (!isLoggedIn) {
  //     navigate('/'); // 로그인이 안되어있으면 로그인 페이지로
  //   }
  // }, [navigate]);

  // 로그아웃 처리
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto px-4 py-6 flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-gray-900'>Green Reuse</h1>
          <button
            onClick={handleLogout}
            className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
          >
            로그아웃
          </button>
        </div>
      </header>

      <main className='max-w-7xl mx-auto py-6 px-4'>
        <h2 className='text-2xl font-semibold mb-4'>메인 페이지</h2>
        <p>로그인 성공! 환영합니다.</p>
      </main>
    </div>
  );
};

export default Main;
