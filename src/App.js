import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Main from './pages/Main';

import './App.css';

function App() {
  // 로그인 상태 체크 (예시)
  const isLoggedIn = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인하지 않은 경우: 로그인 페이지로 */}
        <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to="/main" /> : <Login />} 
        />

        {/* 로그인한 경우: Layout 포함된 페이지들 */}
        <Route 
          element={isLoggedIn ? <Layout /> : <Navigate to="/" />}
        >
          <Route path="/main" element={<Main />} />
          <Route path="/facility" element={<div>설비관리</div>} />
          <Route path="/resource" element={<div>자원관리</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
