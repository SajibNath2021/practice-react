import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    const totalSalary = cart.reduce((total, current)=> total + Number(current.salary), 0);
   
    return (
        <div className="cartFont">
            <h1>Total Summary</h1>
            <p>Total Users : {cart.length}</p>  
            <p>Users total salary :${totalSalary}</p>
        </div>
    );
};

export default Cart;  <h2>cart</h2>