import React, {createContext} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import YellowPage from './components/YellowPage'
import GreenPage from "./components/GreenPage";

export const Context = createContext('dark');
const App = () => {
  
  
  return(
    <Context.Provider value={'light'}>
    <BrowserRouter>
    <Routes>
      <Route path="/yellowpage" element={<YellowPage/>} />
      <Route path="/greenpage" element={<GreenPage/>} />
      </Routes>
      </BrowserRouter>
      </Context.Provider>

  )
};

export default App