/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jsx from "./components/view/Jsx"
import { Footer } from "./components/Footer";
import { HookUseState } from "./components/HookUseState";
import { Flux } from "./components/view/Flux";
import { Formulaire } from "./components/view/Formulaire";
import { Exercice } from "./components/view/Exercice";

function App() {
  return(
    <>
      <Navbar/>
      <div className="app-container">
        <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Jsx/>}/>
              <Route path='/use-state' element={<HookUseState/>}/>
              <Route path='/flux' element={<Flux/>}/>
              <Route path='/formulaire' element={<Formulaire/>}/>
              <Route path='/exercice' element={<Exercice/>}/>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App;