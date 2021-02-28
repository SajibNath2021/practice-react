import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css'
const Users = (props) => {
     
    const {name, email, website,address,img, salary} = props.user;
    const [isClicked , setIsClicked] = useState(false)
    return (
        <div className= "userInfo">
            <div className="img-container">
                <img src={img} alt=""/>
            </div>
            <div className="info-conatiner">
                <h1>users : {name} </h1>
                <p>Salary :{salary}</p>
                 <p>email : {email}</p>
                 <p>City :{address.city}</p>
                 <p>Website :{website}</p>
                <button className="mainButton" disabled={isClicked} onClick={()=>{props.handleButton(props.user) 
                setIsClicked(true)}}><FontAwesomeIcon icon={faPlus} /> {isClicked ? "✓ Remove" : "Add to Cart"}</button>
       
            </div>
        </div>
    );
};

export default Users;