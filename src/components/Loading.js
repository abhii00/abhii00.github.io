import React from 'react';

import logo from '../assets/icons/logo.png';

class Loading extends React.Component {
    render(){
        return(
            this.props.loading ?
            <div className='loading-background'>
                <div className='loading-logo-container'>
                    <img src={logo} alt='' className='loading-logo'/>
                </div>
            </div> : ''
        )
    }
}

export default Loading