import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
// 쿼리스트링 사용 
// useSearchParams => Hook 사용

const About = () => {
    const location = useLocation();
    const [ searchParams , setSearchParams ] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    

    return(
        <div>
            <h1>소개</h1>
            <p>리엑트 라우터 사용 프로젝트</p>
            <p>쿼리스트링: {location.search}</p>
        </div>
    );
}

export default About;




