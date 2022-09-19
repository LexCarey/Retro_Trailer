import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
