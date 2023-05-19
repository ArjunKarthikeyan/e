import React from "react";
import './footer.css'

function Footer(){
    return(
        <div className="footer--container">
            <div className="footer-grid">
                <table className="footer--table">
                <tr><th><i class='bx bxl-twitter' id="twitter--icon"></i></th></tr>
                <tr><th><i class='bx bxl-facebook' id="facebook--icon"></i></th></tr>
                <tr><th><i class='bx bxl-instagram-alt' id="instagram--icon"></i></th></tr>
                <tr><th><i class='bx bxl-github' id="github--icon"></i></th></tr>
                </table>
            </div>
        </div>
    )
}
export default Footer