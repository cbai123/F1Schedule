import './App.css';
import Home from './pages/home'
import Race from './pages/Race'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <h2>F1 Schedule</h2>
      </header>

      <body className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path={'/:round'} element={<Race />} />
          </Routes>
      </body>
    </BrowserRouter>
  );
}

export default App;
