import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {logout} from "../util/fireBaseFunctions"
import {AuthContext} from "../providers/AuthProviders"
import "../css/NavBar.css";

export default function NavBar(params) {
    const {currentUser} = useContext(AuthContext)
    const display = ()=>{
        if(currentUser){
            return <button onclick= {logout}>logout</button>
        }else{
            return(
                <>
                <NavLink to ={"/signup"}>signup</NavLink>
                <NavLink to ={"/login"}>login</NavLink>
                
                </>
            )
        }
    }
    return(
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/users"}>Show All Users</NavLink>
            <button onclick = {logout}>Logout</button>
            {display()}
        </nav>
    )
};
