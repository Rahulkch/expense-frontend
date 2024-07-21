import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { Routes ,Route, Form} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { Helmet } from 'react-helmet';
import Nav from './components/Nav';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Hm from './components/Hm';
function App() {



  const navigate=useNavigate();
  useEffect( () => {
    const id=localStorage.getItem("id");
     if(!id){
        navigate("/login")
     }
  },[])
  return (
    <div className="">
     
     {/* <Signup/> */}
     <Helmet>
      <title>My Final Project</title>
    </Helmet>
{/* <Form/> */}

    <Routes>
      <Route path='/h' element={<Home/>}></Route>
      <Route path='/' element={<Hm/>}></Route>
      {/* <Route path="/" element={<Form/>}></Route> */}
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>} ></Route>
    </Routes>
    
    {/* <Signin/> */}
    </div>
  );
}

export default App;
