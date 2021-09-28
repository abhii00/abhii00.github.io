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

    render(){
        return(
            <div className='projectsgrid-container'>
                <div className='projectsgrid-rowcontainer'>
                    {this.state.projectTiles}
                </div>
            </div>
        )
    }
}

export default ProjectsGrid