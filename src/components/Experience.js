import React from 'react';
import { ProjectGrid } from './components.js';

class Experience extends React.Component{
    render(){
        return(
            <div className='section' style={this.props.style}>
                <div className = 'section-title'>Education and Experience</div>
                <ProjectGrid style={{top: '30%'}}/>
            </div> 
        )
    }
}

export default Experience