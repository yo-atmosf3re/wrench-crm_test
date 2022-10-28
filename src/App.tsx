import React, { Suspense } from 'react';
import './scss/app.scss'
import { Route, Routes } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path='' element={<MainLayout />}>
        <Route path='home-page' element={<Home />} />
        <Route path='search-address' element={<Search />} />
        <Route path='*' element={
          <Suspense fallback={<div>Идёт загрузка...</div>}>
            <NotFound />
          </Suspense>} />
      </Route>
    </Routes>
  );
}

export default App;