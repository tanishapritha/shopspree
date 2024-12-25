import React from "react";
import './footer.css';
import preshoplogo from '../../Assets/preshoplogo.webp'
const Footer = () =>{
    return(
        <div className="footer">
            <div className="footercontent">

                <div className="footercont1">
                    <div className="contentFootertitle">contact us</div>
                        <div className="contentFooterSubTitlediv">
                            <div className="contentFooterSubTitlecont">Instagram</div>
                            <div className="contentFooterSubTitlecont">Linkedin</div>
                        </div>
                 

                </div>
                <div className="footercont1">
                    <div className="contentFootertitle">Links</div>
                        <div className="contentFooterSubTitlediv">
                            <div className="contentFooterSubTitlecont">Amazon</div>
                            <div className="contentFooterSubTitlecont">Flipkart</div>
                        </div>
                 

                </div>
            </div>
            <div className="footerimg">
                <img className="preshoplogofooter" src={preshoplogo}/>
            </div>
        </div>
    )
}
export default Footer