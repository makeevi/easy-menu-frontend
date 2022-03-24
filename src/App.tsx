import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FoodGroupView from './components/referenceBook/FoodGroupView';
import ListFoodInGroup from './components/referenceBook/components/foodGroup/ListFoodInGroup';
import FoodPage from './pages/food/FoodPage';
import MenuPage from './pages/menu/MenuPage';
import TestPage from './pages/food/Test/TestPage';
import GlobalContext from './hook/GlobalContext';
import { ThemeProvider } from 'react-bootstrap';
import { render } from '@testing-library/react';
import Home from './pages/Home';

function App() {

const[component, setComponent] = useState<any>("sdsd");

  return (

    <GlobalContext.Provider value={{componet:component, setComponet:setComponent}}>
      <Home/>

    </GlobalContext.Provider>

    

    // <GlodalContext.Provider value={{componet:component, setCompenet:setComponent}}>
    //             <BrowserRouter>
    //        <Routes>
    //          <Route path = '/food' element = {<FoodPage/>} />
    //          <Route path = '/test' element = {<TestPage/>} />
    //          <Route path = '/menu' element = {<MenuPage/>} />                 
    //        </Routes>             
    //        </BrowserRouter> 
    // </GlodalContext.Provider>


    // <div>
    //     <GlodalContext.Provider value={{componet:component, setCompenet:setComponent}}>
    //     <MenuPage/>
    //         {/* <BrowserRouter>
    //       <Routes>
    //         <Route path = '/food' element = {<FoodPage/>} />
    //         <Route path = '/test' element = {<TestPage/>} />
    //         <Route path = '/menu' element = {<MenuPage/>} />                 
    //       </Routes>             
    //       </BrowserRouter>  */}
    //     </GlodalContext.Provider>



    

    // </div>
  );
}

export default App;
