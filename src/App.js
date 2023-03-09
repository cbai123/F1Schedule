import './App.css';
import Home from './pages/home'
import Race from './pages/Race'
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home navigate={useNavigate()}/>} />
      <Route path={'/:round'} element={<Race />} />
    </Routes>
  );
}

export default App;
