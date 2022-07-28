import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/App.scss';
import Header from './components/Header';

import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/header" element={<Header />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
