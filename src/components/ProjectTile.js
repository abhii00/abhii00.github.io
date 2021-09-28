import React from 'react';

class ProjectTile extends React.Component {
    render(){
        return(
            <img src={require('../assets/projects/'+this.props.imageUrl).default} alt='' onClick={this.props.renderDescription} projectID={this.props.projectID} className='projecttile-container'/>
        )
    }
}

export default ProjectTile