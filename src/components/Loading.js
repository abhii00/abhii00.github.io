import React from 'react';

import logo from '../assets/icons/logo.png';

class Loading extends React.Component {
    render(){
        return(
            <div className='loading-logo-container'>
                <img src={logo} alt='' className='loading-logo'/>
            </div>
        )
    }
}

export default Loading