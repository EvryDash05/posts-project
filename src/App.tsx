import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router'
import './App.css'
import PostPage from './pages/PostPage';
import CreatePostPage from './pages/CreatePostPage';
import PostByIdPage from './pages/PostByIdPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path='/posts' element={<PostPage />} />
        <Route path='/posts/:postId' element={<PostByIdPage />} />
        <Route path='/createPost' element={<CreatePostPage />} />
      </Routes>
    </Router>
  );
}

export default App
