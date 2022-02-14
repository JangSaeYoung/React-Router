//Home 페이지에서 About 페이지로 이동
import { Link } from 'react-router-dom';

// 가장 먼저 보이는 페이지
const Home = () => {
    return(
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지</p>
            {/* <Route path="/profiles/:username" element={ <Profile />}/> */}
            <ul>  
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles/velopert">velopert의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재하지 않는 프로필</Link>
                </li>
                <li>
                    <Link to="/Articles">게시글 목록</Link>
                </li>
            </ul>
        </div>
    );
}
export default Home;



