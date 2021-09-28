import React from 'react';

class ProjectTile extends React.Component {
    /* TODO image/name functionality */

    render(){
        return(
            <img src={this.props.projectImage} alt='' onClick={this.props.renderDescription} className='projecttile-container'/>
        )
    }
}

export default ProjectTile