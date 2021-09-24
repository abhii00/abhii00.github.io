import React from 'react';
import rkticon from '../assets/icons/rkt-blue.png'

class SideLine extends React.Component{
    render(){
        var main_class;
        if (this.props.left){
            main_class = 'sideline-left';
        }
        else {
            main_class = 'sideline-right';
        }
        return(
            <div className={main_class}>
                <img src={rkticon} alt='' className='sideline-icon' mask-image={rkticon}></img>
                <div className='sideline-line'></div>
            </div>
        )
    }
}

export default SideLine