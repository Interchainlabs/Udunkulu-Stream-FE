import './LandingPage.css';
import { UdunkuluLady, UdunkuluLogo1} from '../../../Assets/Images';
import { Button } from '../../../Components';
import { NavLink } from "react-router-dom";

const LandingPage =()=>{
    return(
        <div className="landingPage">
            <div className="d-flex">
                <div className="" id="landingPageContent">
                    <img src={UdunkuluLogo1} alt="" id="UdunkuluLogo1"/>
                    <div className="landingPageText">
                        <h1>Get connected to<br/>original Nigerian<br/>Music Content</h1>
                        <p>To get started, click on the button below</p>

                        <NavLink to="/trending" className="nav-link">
                            <div id="landingPageButton">
                                <Button variant="Continue" size={"sm"} >Connect Wallet to Continue</Button>
                            </div>
                        </NavLink>

                    </div>
                </div>
                {/* <div className="full-height"> */}
                    <img  className="" src={UdunkuluLady} alt="" id="landingPageImage"/>

            </div>
        </div>
    );
}

export {LandingPage};
