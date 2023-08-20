// import {useHistory} from "react-router-dom";

import {useState} from "react";
import { NavLink } from "react-router-dom";
import { UdunkuluLogo, ProfilePhoto } from '../../Assets/Images';
import {Home, SearchIcon} from '../../Assets/Icons';
import { ArtistHomePage, Search } from "../../Pages";
import './SideBar.css';
import { LogOutButton } from "../../Components/Buttons/LogOut";



const Sidebar=(props)=>{
    const isLoggedIn = localStorage.getItem("token");
    return(
        <section>
         <div className="sidebar" id="sidebar-wrapper">
             <NavLink to='/trending' className='nav-link'>
                <img className="sidebar-header" src={UdunkuluLogo} alt="Udunkulu"/>
             </NavLink>
            
            <ul className="list-group flex-column d-inline-block list-group-sidebar">
                <li className="list-item">
                    <NavLink to='/trending' className="nav-link">
                       <button type="button" className="btn btn-dark" id="button-border"><img src={Home} alt=""/></button> 
                    </NavLink>
                </li>

                <li className="list-item">
                    {/* TODO clean up active state */}
                    <NavLink to='/search' className="nav-link">
                    <button type="button" className="btn btn-dark" id="button-border"><img src={SearchIcon} alt=""/></button>
                    </NavLink>
                </li>
            </ul>
            
           
            <ul className="list-group flex-column d-inline-block list-group-sidebar pad-top">
                <li className="list-item">
                    {isLoggedIn ? <LogOutButton /> : null}
                </li>
            </ul>
            
            

        </div>
    
        </section>
    );
}

export {Sidebar};