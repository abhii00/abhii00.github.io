import React from 'react';

import rktIcon from '../assets/icons/rkt.png';

class Sidebar extends React.Component{
    render(){
        return(
            <div className='sidebar-container'>
                <img src={rktIcon} alt='' className='sidebar-icon'/>
                <div className='sidebar-line'/>
            </div>
        )
    }
}

export default Sidebar