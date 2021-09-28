import React from 'react';
import { ProjectTile } from './components.js';

class ProjectsGrid extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            projectTiles: []
        }
    }

    componentDidMount(){
        var projectTiles = [];
        for (var i = 0; i < 6; i++){
            projectTiles.push(<ProjectTile/>);
            console.log(i);
        }
        this.setState({projectTiles: projectTiles});
    }

    /* TODO on click description
    TODO project import
    */

    render(){
        return(
            <div className='projectsgrid-container'>
                <div className='projectsgrid-row-container'>
                    {this.state.projectTiles}
                </div>
                <div className='projectsgrid-row-container'>
                    {this.state.projectTiles}
                </div>
            </div>
        )
    }
}

export default ProjectsGrid