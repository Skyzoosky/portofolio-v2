import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navigasi from "./components/Navigasi";
import Home from "./page/Home";
import Pembuka from "./page/Pembuka";
import Alat from "./page/Alat";
import Hasil from "./page/Hasil";

export default function App(){
  return(
    <div className=' bg-blue-100 min-h-screen'>
  <Router>
    <Routes>
    <Route path='/' element={<Pembuka/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/technology' element={<Alat/>}/>
      <Route path='/project' element={<Hasil/>}/>
    </Routes>
  </Router>
  </div>
  )
}