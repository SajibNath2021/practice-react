import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css'
const Users = (props) => {
     
    const {name, email, website,address,img, salary} = props.user;
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
                <button className="mainButton" onClick={()=>props.handleButton(props.user)}><FontAwesomeIcon icon={faPlus} /> Add friend</button>
       
            </div>
        </div>
    );
};

export default Users;