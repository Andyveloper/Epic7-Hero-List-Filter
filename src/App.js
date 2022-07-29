import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/App.scss';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import Header from './components/Header';

import Homepage from './pages/Homepage';
import getElements from './redux/apiElementList';
import getHeroes from './redux/apiHeroList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getElements());
    dispatch(getHeroes());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/wind" element={<Header />} />
        <Route path="/light" element={<Header />} />
        <Route path="/dark" element={<Header />} />
        <Route path="/fire" element={<Header />} />
        <Route path="/ice" element={<Header />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
