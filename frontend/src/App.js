import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import MainPage from './pages/MainPage';
import ContentWritePage from './pages/ContentWritePage';
import ContentPostPage from './pages/ContentPostPage';
import ContentListPage from './pages/ContentListPage';
import AdminPage from './pages/AdminPage';
import AboutPage from './pages/AboutPage';
import FindPWPage from './pages/FindPWPage';

const App = () => {
  return (
    <div>
      <Route component={MainPage} path="/" exact />   
      <Route component={ContentWritePage} path="/contentwrite" />
      <Route component={ContentPostPage} path="/content/:contentId" />
      <Route component={ContentListPage} path="/contentlist" />
      <Route
        component={PostListPage}
        path={['/@:username/postlist', '/postlist']}
      />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={FindPWPage} path='/findpw' />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={AdminPage} path="/administer" />
      <Route component={AboutPage} path="/about" />
    </div>
  );
};
//리액트에서 페이지 컴포넌트 바꾸는 코드
export default App;
