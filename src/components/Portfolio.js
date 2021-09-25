import React from 'react';
import { ProjectGrid, SideLine } from './components.js';

class Portfolio extends React.Component{
    render(){
        return(
            <div className='section' id='portfolio' style={this.props.style}>
                <div className = 'section-title'>Portfolio</div>
                <ProjectGrid style={{top: '30%'}}/> // TODO add Projects
                <SideLine left={true}/>
            </div> 
        )
    }
}

export default Portfolio