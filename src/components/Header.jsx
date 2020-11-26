import React from 'react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import questionImg from '../assets/img//question.svg';

function Header() {
    return (
        <header className='header'>
            <div className='header__wrap'>
                <nav className='header__nav'>
                    <Link className='header__link' to='/'>
                        <img className='header__logo' src={logo} alt="logo" />
                    </Link>
                    <Link className='header__link' to='/info'>
                        Info
                    </Link>
                </nav>
                <Link to='/question' className='header__question'>
                    <img src={questionImg} alt="img" />
                </Link>
            </div>
        </header >
    )
}

export default Header
