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
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={AdminPage} path="/administer" />
    </div>
  );
};

export default App;
