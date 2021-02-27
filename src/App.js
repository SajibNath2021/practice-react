import './Components/Users/Users';
 import React , { useEffect, useState } from 'react';
import './App.css';
import userData from './data/data.json';
import Users from './Components/Users/Users';
import Cart from './Components/Users/Cart/Cart';

function App() {
    const [users, setUsers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
      setUsers(userData)
    }, [])
    
    const handleButton =(faka)=>{
      const newCart = [...cart, faka];
      setCart(newCart)
    }

  return (
    <div className="fontPage" >
      <div className="infoUser">
        {
        users.map(user => <Users user = {user}
          handleButton= {handleButton}
        ></Users>)
        }
      </div>
      <div className="cartDetail">
        <Cart cart ={cart}></Cart>
      </div>
      

    </div>
  );
}

export default App;
