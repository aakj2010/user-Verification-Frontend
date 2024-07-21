import './App.css'
import Home from './Home';
import ForgotPassword from './authScreen/Forgotpassword';
import Login from './authScreen/Login'
import ResetPassword from './authScreen/ResetPassword';
import Signup from './authScreen/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>User Auth</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
