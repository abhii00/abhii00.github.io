import React from 'react';
import { Section } from './components.js';
import { BrowserView, MobileView } from 'react-device-detect';

class App extends React.Component{
    render(){
        return(
            <div className='app'>
                <BrowserView> 
                    {/* FIXME change to relative positioning to allow project description to push rest of content down*/}
                    {/* TODO add on load animations */}
                    {/* TODO add animations for interest */}
                    {/* FIXME website icons, descriptions, metadata */}
                    {/* TODO Lato Font and refactor css*/}
                    <Section></Section>
                </BrowserView>
                <MobileView/> {/* TODO add mobile view, either via responsiveness or new components */}
            </div>
        )
    }
}

export default App