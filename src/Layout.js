import { Outlet, useNavigate } from 'react-router-dom';
// useNavigate 사용

const Layout = () => {
   const navigate = useNavigate();

   // 이전 페이지로 이동해
   const goBack = () => {
       navigate(-1);
   };

   // articles 경로로 이동해
   const goArticles = () => {
       navigate('/articles');
   };


    return(
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24}}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;



