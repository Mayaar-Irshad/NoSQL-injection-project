import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signUp'
import Account from './pages/account'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        {isUserSignedIn && <Route path='/account' element={<Account />} />}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;