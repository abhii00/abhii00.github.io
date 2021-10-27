import React from 'react';
import rktIcon from '../assets/icons/rktteal.svg';

class Section extends React.Component {
    render(){
        return(
            <div className={this.props.heightSpecified ? 'section-container-spec' : 'section-container'} id={this.props.id}>
                {
                    this.props.titleShown ? <div className='section-title'>{this.props.title}</div> : ''
                }
                {this.props.children}
                { 
                    this.props.sidebarShown ?
                    <div className={this.props.sidebarLeft ? 'section-sidebar-container-left' : 'section-sidebar-container-right'}>
                        <img src={rktIcon} alt='' className={this.props.heightSpecified ? 'section-sidebar-icon-spec' : 'section-sidebar-icon'}></img>
                        <div className='section-sidebar-line'/>
                    </div>
                    : ''
                }
            </div>
        )
    }
}

Section.defaultProps = {
    titleShown: true,
    title: 'Default Title',
    sidebarShown: true,
    sidebarLeft: true,
    heightSpecified: false
}

export default Section