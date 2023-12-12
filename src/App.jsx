import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Painel from './pages/Painel';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App(){
  const autentic = localStorage.getItem("key") === 'token' || false

  console.log
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Login/>}/>
         {autentic?<Route path='/painel' element={<Painel/>}/>:""}
        </Routes>
      </BrowserRouter> 

    </>
  )
}

export default App