import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FoodGroupAllView from './components/FoodGroupAllView';
import FoodGroupView from './components/FoodGroupView';
import FoodPage from './pages/Food/FoodPage';
import MenuPage from './pages/Food/MenuPage';
import TestPage from './pages/Food/Test/TestPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = '/food' element = {<FoodPage/>} />
        <Route path = '/test' element = {<TestPage/>} />
        <Route path = '/menu' element = {<MenuPage/>} />                 
      </Routes>             
      </BrowserRouter>     

    </div>
  );
}

export default App;
