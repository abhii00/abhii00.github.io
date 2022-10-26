import React from 'react';

import { Link } from 'react-scroll';

import logo from '../assets/icons/logo.png';

class Menu extends React.Component{
    render(){
        return(
            <div className='menu-container'>
                <Link to='introduction'>
                    <img src={logo} alt='' className='menu-icon'/>
                </Link>
                <div className='menu-links-container'>
                    <Link to='about'>
                        <div className='menu-link'>ABOUT</div>
                    </Link>
                    <Link to='featured'>
                        <div className='menu-link'>FEATURED</div>
                    </Link>
                    <Link to='experience'>
                        <div className='menu-link'>EXPERIENCE AND EDUCATION</div>
                    </Link>
                    <Link to='organisation'>
                        <div className='menu-link'>ORGS</div>
                    </Link>
                    <Link to='portfolio'>
                        <div className='menu-link'>PORTFOLIO</div>
                    </Link>
                    <Link to='contact'>
                        <div className='menu-link'>CONTACT</div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Menu