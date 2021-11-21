import React from 'react';

class Section extends React.Component {
    render(){
        return(
            <div className={this.props.heightSpecified ? 'section-container-spec' : 'section-container'} id={this.props.id}>
                {
                    this.props.titleShown ? <div className='section-title'>{this.props.title}</div> : ''
                }
                {this.props.children}
            </div>
        )
    }
}

Section.defaultProps = {
    titleShown: true,
    title: 'Default Title',
    heightSpecified: false
}

export default Section