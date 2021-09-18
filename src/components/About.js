import React from 'react';

class About extends React.Component{
    render(){
        return(
            <div className='section' style={this.props.style}>
                <div className='section-title'>About Me</div>
                <div className='about-text'>
                    <p>
                        Hi, I'm Abhi and I'm currently a 3rd year Engineering student at the University of Cambridge. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit urna, fringilla rhoncus sem a, pulvinar tincidunt arcu. Aliquam erat volutpat.
                    </p>
                    <p>
                        Quisque a quam facilisis, elementum metus non, tincidunt tellus. Morbi nibh felis, consectetur ut nulla quis, cursus dignissim purus. Praesent id enim quis purus tempus auctor. In suscipit nibh libero, sit amet pulvinar neque laoreet eu.
                    </p>
                    <p>
                        Nunc molestie sed lorem a eleifend. Praesent sed nunc magna. Mauris nec mauris consequat ligula aliquet lacinia pharetra quis quam. In eget scelerisque magna.
                    </p>
                </div>
                <div className='about-image'></div>
            </div>
        )
    }
}

export default About