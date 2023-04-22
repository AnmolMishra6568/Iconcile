import './App.css';
import Navbar from './components/Navbar'; 
import {Routes , Route} from 'react-router-dom';
import Login from './components/Login';
import Body from './components/Body';
import {} from 'react-router-dom';
import Booking from './components/Booking';
import Rec from './components/Rec';
import Register from './components/Register'
function App() {
 
  return (
    <div className="App">
      <Navbar/> 

      <Routes>
      <Route exact path='/' element={<Body/>}/>
      <Route path="/Rec" element={<Rec/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Booking" element={<Booking/>}/>
      <Route path="/Register" element={<Register/>}/>
      </Routes>
     

      
    </div>
  );
}

export default App;
