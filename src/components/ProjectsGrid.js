import React from 'react';
import { ProjectTile } from './components.js';

class ProjectsGrid extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            projectRows: [],
            descriptionShown: false,
            descriptionProjectID: 0
        }

        this.consts = {
            projectsPerLine: 5
        }
    }

    componentDidMount(){
        var projectRows = [];
        var projectTiles = [];
        for (var i = 0; i < this.props.projectsJSON.length; i++){
            var projectJSON = this.props.projectsJSON[i];
            projectTiles.push(<ProjectTile projectID={projectJSON.id} projectImage={projectJSON.pictures.tile} renderDescription={this.renderDescription}/>);
            if ((i+1) % this.consts.projectsPerLine === 0 || i === this.props.projectsJSON.length - 1){
                projectRows.push(<div className='projectsgrid-row-container'>{projectTiles}</div>);
                projectTiles = [];
            }
        }
        this.setState({projectRows: projectRows});
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
                {this.state.projectRows}
                {
                    this.state.descriptionShown &&
                    <div onClick={this.unrenderDescription} className='projectsgrid-description-container'/>
                }
            </div>
        )
    }
}

export default ProjectsGrid