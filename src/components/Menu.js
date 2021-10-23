import React from 'react';
import { Link } from 'react-scroll';

class Menu extends React.Component{
    render(){
        return(
            <div className='menu-container'>
                <Link to='introduction'>
                    <div className='menu-icon'>AP</div>
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