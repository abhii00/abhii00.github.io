import React from 'react';
import { Link } from 'react-scroll';

class Menu extends React.Component{
    render(){
        return(
            <div className='menu'>
                <div className='menu-name'>AP</div>
                <div className='menu-links'>
                    <div className='menu-link'><Link to='about' duration={2}>About Me</Link></div>
                    <div className='menu-link'><Link to='experience' duration={2}>Education & Experience</Link></div>
                    <div className='menu-link'><Link to='portfolio' duration={2}>Portfolio</Link></div>
                    <div className='menu-link'><Link to='contact' duration={2}>Contact</Link></div>
                </div>
            </div>  
        )
    }
}

export default Menu