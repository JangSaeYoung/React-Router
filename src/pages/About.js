// import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
// 쿼리스트링 사용 
// useSearchParams => Hook 사용

const About = () => {
    // const location = useLocation();
    const [ searchParams , setSearchParams ] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({mode, detail: detail === 'true' ?  false : true});
    };

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({mode: nextMode, detail});
    };

    return(
        <div>
            <h1>소개</h1>
            <p>리엑트 라우터 사용 프로젝트</p>
            <p>detail : {detail}</p>
            <p>mode : {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
}

export default About;




