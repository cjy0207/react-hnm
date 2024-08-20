import './App.css';
import  {Route, Routes} from "react-router-dom"
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';

// 전체 상품페이지, 로그인, 상품 상세페이지
// 전체상품 페이지에서 전체 상품을 볼 수 있다
// 로그임 버튼을 누르면 로그임 페이지가 나온다
// 상품 디테일을 눌렀으나 로그인이 안되어 있을 경우 로그인 페이지가 먼저 나옴
// 로그인이 되어 있을 때 상품 디테일을 볼 수 있다
// 로그아웃 버튼 클릭시 로그아웃이 된다
// 로그아웃이 되면 상품 디테일을 볼 수 없고 다시 로그인 페이지가 나온다
// 로그인을 하면 로그인이 보이고 로그아웃을 하면 로그아웃이 보인다
// 상품을 검색할 수 있다

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
