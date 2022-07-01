//6.29 green-lamp-client 한 거!(폴더 이름만 다른거!) -카페나 블로그 참고하기
//ctrl+j 하면 터미널 영역 밑에 하단이 뜨고 사라지고 할 수 있음!!
//images폴더는 public폴더에 넣어준다!!!
// https://blog.naver.com/pink_candy02/222428394437  블로그 참고하기!
// 7.1
import './App.css';
import Footer from './include/Footer';
import Header from './include/Header';
import MainPage from './main';
import ProductPage from './product';
import { Routes, Route } from 'react-router-dom'; 
import UploadPage from './upload';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* path="/" , path="/products", ~ 이 경로가 오면 이게 보이고 이게 보이게 하는거임! */}
      <Routes>
        {/* 파일이름으로 하는게 아니고 컴포넌트 이름을 넣어주는거! index적어주면 안됨! -> MainPage 적어줘야함! */}
        {/* 주소에 따라 다른 화면 보이게함!! => localhost:3000/products : 적어주면 ProductPage 컴포넌트가 나옴 */}
        <Route path="/" element={<MainPage/>}/>
        {/* <Route path="/products" element={<ProductPage/>}/> */}
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/upload" element={<UploadPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
