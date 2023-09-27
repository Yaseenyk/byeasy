import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './auth/Signup';
import Signin from './auth/Signin';

function App() {


  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<Signup /> }/>
          <Route path='/signin' element={<Signin /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
