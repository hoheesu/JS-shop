import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import NavBar from './components/NavBar';
import PrivateRoute from './Route/PrivateRoute';


// 1. 전체 상품 페이지 , 로그인 , 상품상세 페이지
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.

// 4. 상품 디테일 눌렀는데 로그인이 안되있을 경우 로그인 페이지 먼저 나온다.
// 5. 로그인이 되어 있을경우 상품 디테일 페이지로 잘 들어간다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 6-1 로그아웃되면 상품 디테일 페이지를 볼수 없다, 다시 로그인페이지로
// 7. 상품을 검색 할 수 있다.


function App() {
  const [authenticate, setAuthenticate] = useState(false)
  useEffect(()=>{
    console.log("AAA")
  },[authenticate])
  return (
    <>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll /> } />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} /> } />
        <Route path="/detail/:id" element={<PrivateRoute authenticate={authenticate} /> } />
      </Routes>
    </>
  );
}

export default App;
