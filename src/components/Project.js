import React from 'react';

class Project extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            descriptionShown: false
        }
    }

    render(){
        return(
            <div className='project' onClick={this.props.renderDescription} style={this.props.style}/>
            /* TODO add on click */
            /* TODO add picture prop */
            /* TODO add name prop */
            /* TODO add content prop */
        )
    }
}

export default Project