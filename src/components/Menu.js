import React from 'react';
import { Link } from 'react-scroll';

class Menu extends React.Component{
    render(){
        return(
            <div className='menu-container'>
                <div className='menu-icon'>AP</div>
                <div className='menu-links-container'>
                    <Link to='about'>
                        <div className='menu-link'>About</div>
                    </Link>
                    <Link to='Experience and Education'>
                        <div className='menu-link'>Experience and Education</div>
                    </Link>
                    <Link to='portfolio'>
                        <div className='menu-link'>Portfolio</div>
                    </Link>
                    <Link to='contact'>
                        <div className='menu-link'>Contact</div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Menu