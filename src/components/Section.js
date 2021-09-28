import React from 'react';
import rktIcon from '../assets/icons/rktblue.svg';

class Section extends React.Component {
    render(){
        var sidebarClassname;
        if (this.props.sidebarLeft) {
            sidebarClassname = 'section-sidebar-container-left';
        }
        else{
            sidebarClassname = 'section-sidebar-container-right';
        }

        if (this.props.sidebarShown){
            return(
                <div className='section-container' id={this.props.id}>
                    <div className='section-title'>{this.props.title}</div>
                    {this.props.children}
                    <div className={sidebarClassname}>
                        <img src={rktIcon} alt='' className='section-sidebar-icon'></img>
                        <div className='section-sidebar-line'/>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className='section-container' id={this.props.id}>
                    <div className='section-title'>{this.props.title}</div>
                    {this.props.children}
                </div>
            )
        }
    }
}

export default Section