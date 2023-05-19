import React from "react";
import './info.css';

function Info(){
    return(
        <div className="info--container">
            <div className="user--pic">
                <img className="user-profile" src="profile.jpeg"></img>
            </div>
            <h4 className="user--name">James Camaron</h4>
            <p className="user--designation">FrontEnd Developer</p>
            <p className="user--web">jamescam.com</p>
            <div className="user--contact">
                <button className="contact--email"><i class='bx bxs-envelope'></i> Email</button>
                <button className="contact--linkedin"><i class='bx bxl-linkedin-square' ></i> LinkedIn</button> 
            </div>
        </div>
    );
}

export default Info;