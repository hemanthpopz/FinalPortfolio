import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/Home'

import About from './components/About'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element=<Home /> />
      <Route exact path="/about" element=<About /> />
    </Routes>
  </BrowserRouter>
)

export default App
