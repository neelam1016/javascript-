import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import Editproduct from './components/Editproduct';
import Viewproduct from './components/Viewproduct';
import Nav from './components/Nav';
import Products from './components/Products';
// import Protected from './components/Protected';
import { useState } from 'react';

function App() {
   const [isLoggedIn, updateLoggedIn] = useState(false);
  return (
     <>
     <Router>
      
       <Nav isLoggedIn={isLoggedIn} />
       <section className='container'>
          <Routes>
          {/* <Route path='/' element={<Login/>}/> */}
          <Route path='/login' element={<Login isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} />}/>
             {/* <Route path='/addproduct' element={<Protected Component={Addproduct}/>}/> */}
             {isLoggedIn && (
                <>
                  <Route path='/products' element={<Products/>}/>
                  <Route path='/addproduct' element={<Addproduct/>}/>
                  <Route path='/editproduct/:id' element={<Editproduct/>}/>
                  <Route path='/viewproduct/:id' element={<Viewproduct/>}/>
               </>
             )}
          </Routes>
       </section>
     </Router>
     </>
  );
}


export default App;
