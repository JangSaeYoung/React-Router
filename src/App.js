import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Articles from './pages/Articles';
import Article from './pages/Articles';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

// 중첩된 라우트 구현 
// NotFound

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={ <Profile />}/>
      <Route path="/articles" element={ <Articles />}>
        <Route path=":id" element={ <Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} /> 
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
};

export default App;




