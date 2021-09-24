import React from 'react';
import { ProjectGrid, SideLine } from './components.js';

class Experience extends React.Component{
    render(){
        return(
            <div className='section' id='experience' style={this.props.style}>
                <div className = 'section-title'>Education and Experience</div>
                <ProjectGrid style={{top: '30%'}}/>
                <SideLine/>
            </div> 
        )
    }
}

export default Experience