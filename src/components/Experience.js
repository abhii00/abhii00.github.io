import React from 'react';
import { ProjectGrid } from './components.js';

class Experience extends React.Component{
    render(){
        return(
            <div className = 'experience'>
                <div className = 'experience-title'>Education and Experience</div>
                <ProjectGrid style={{top: '30%'}}/>
            </div> 
        )
    }
}

export default Experience