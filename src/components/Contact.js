import React from 'react';
import { SideLine } from './components.js';

class Contact extends React.Component{
    render(){
        return(
            <div className='section' id='contact' style={this.props.style}>
                <div className='section-title'>Contact</div>
                <SideLine/>
            </div>
        )
    }
}

export default Contact