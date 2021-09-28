import React from 'react';
import { ProjectTile } from './components.js';

class ProjectsGrid extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            projectTiles: [],
            descriptionShown: false,
            descriptionProjectID: 0
        }
    }

    componentDidMount(){
        var projectTiles = [];
        for (var i = 0; i < this.props.projectsJSON.length; i++){
            var projectJSON = this.props.projectsJSON[i];
            projectTiles.push(<ProjectTile projectID={projectJSON.id} projectImage={projectJSON.pictures.tile} renderDescription={this.renderDescription}/>);
        }
        this.setState({projectTiles: projectTiles});
    }

    renderDescription = (e) => {
        this.setState({
            descriptionShown: true,
            descriptionProjectID: JSON.parse(e.currentTarget.getAttribute('projectID'))
        });
        
    }

    unrenderDescription = () => {
        this.setState({descriptionShown: false});
    }

    /*TODO project import
    */

    render(){
        return(
            <div className='projectsgrid-container'>
                <div className='projectsgrid-row-container'>
                    {this.state.projectTiles}
                </div>
                {
                    this.state.descriptionShown &&
                    <div onClick={this.unrenderDescription} className='projectsgrid-description-container'/>
                }
            </div>
        )
    }
}

export default ProjectsGrid