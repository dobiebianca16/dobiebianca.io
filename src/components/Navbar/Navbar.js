
import React from 'react'
// import logo from "../static/images/logo.png"
import { Link } from "react-router-dom"
import "./Navbar.scss"
import LogoB from '../../assets/images/logo-b.png'

const Navbar = () => {


    return (
        <nav className="navbar">
            <div className="navbar__left">
                <Link to="/" className="navbar__link">
                    <img alt='logo' src={LogoB} className="navbar__img" />
                </Link>
            </div>
            <div className="navbar__right" >
        
                <ul className="navbar__list" >
                    <li className="navbar__items" >
                        <Link to="/"  className="navbar__itemsLink"><span className="navbar__itemsLinkNumeric">01.</span>.home()</Link>
                    </li>
                    <li className="navbar__items">
                        <Link to="/skills"  className="navbar__itemsLink"><span className="navbar__itemsLinkNumeric">02.</span>.skills()</Link>
                    </li>
                    <li className="navbar__items">
                        <Link to="/work" className="navbar__itemsLink"><span className="navbar__itemsLinkNumeric">03.</span>.work()</Link>
                    </li>
                    <li className="navbar__items">
                        <Link to="/contact"  className="navbar__itemsLink"><span className="navbar__itemsLinkNumeric">04.</span>.contact()</Link>
                    </li>
                </ul>
                <a href="https://drive.google.com/file/d/1vMm1-Yvz6EGgJpVafqstB5ix-K1xVGW2/view?usp=sharing" target="_blank" rel='noreferrer' className="navbar__button">Resume</a>
               
            </div>
       
           
        </nav>
    )
}

export default Navbar