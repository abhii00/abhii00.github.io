import React from 'react';

class ProjectTile extends React.Component {
    /* TODO image/name functionality */

    render(){
        return(
            <div onClick={this.props.renderDescription} className='projecttile-container'/>
        )
    }
}

export default ProjectTile