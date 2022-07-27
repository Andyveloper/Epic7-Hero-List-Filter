import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/scss/App.scss';

import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
