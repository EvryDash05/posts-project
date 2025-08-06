import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import CreatePostPage from './pages/CreatePostPage';
import PostByIdPage from './pages/PostByIdPage';
import PostPage from './pages/PostPage';
import { ThemeProvider } from './providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path='/posts' element={<PostPage />} />
          <Route path='/posts/:postId' element={<PostByIdPage />} />
          <Route path='/createPost' element={<CreatePostPage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </ThemeProvider>
  );
}

export default App
