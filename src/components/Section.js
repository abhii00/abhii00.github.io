import React from 'react';
import rktIcon from '../assets/icons/rktblue.svg';

class Section extends React.Component {
    render(){
        var sidebarClassname;
        if (this.props.sidebarLeft) { sidebarClassname = 'section-sidebar-container-left'; }
        else { sidebarClassname = 'section-sidebar-container-right'; }

        return(
            <div className='section-container' id={this.props.id}>
                {
                    this.props.titleShown &&
                    <div className='section-title'>{this.props.title}</div>
                }
                {this.props.children}
                { 
                    this.props.sidebarShown &&
                    <div className={sidebarClassname}>
                        <img src={rktIcon} alt='' className='section-sidebar-icon'></img>
                        <div className='section-sidebar-line'/>
                    </div>
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
}

export default Section