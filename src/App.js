import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import { Route, Routes } from 'react-router';
import Navbar from './Component/navbar/Navbar';
import Footer from './Component/footer/Footer';
import Detail from './Page/Detail';
import About from './Page/About';
import { Provider } from 'react-redux';
import Appstore from './redux/AppStore';
import Cart from './Page/Cart';



function App() {
  return (
    <Provider store={Appstore}>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      
      
    </div>
    </Provider>
    
  );
}

export default App;
