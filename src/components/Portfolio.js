import React from 'react';
import { ProjectGrid } from './components.js';

class Portfolio extends React.Component{
    render(){
        return(
            <div className='section' style={this.props.style}>
                <div className = 'section-title'>Portfolio</div>
                <ProjectGrid style={{top: '30%'}}/>
            </div> 
        )
    }
}

export default Portfolio