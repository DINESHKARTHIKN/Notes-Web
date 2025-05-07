import Signin from './pages/Signin.jsx'
import Signup from './pages/signup.jsx'
import Home from './Home.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Particles from "./Styles/Particles";
function App() {


  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
