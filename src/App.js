import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/App.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Wind from './pages/Wind';
import Light from './pages/Light';
import Dark from './pages/Dark';
import Fire from './pages/Fire';
import Ice from './pages/Ice';

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
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/wind" element={<Wind />} />
        <Route exact path="/light" element={<Light />} />
        <Route exact path="/dark" element={<Dark />} />
        <Route exact path="/fire" element={<Fire />} />
        <Route exact path="/ice" element={<Ice />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
