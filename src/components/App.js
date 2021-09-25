import React from 'react';
import { Menu, Introduction, About, Experience, Portfolio, Contact } from './components.js';
import { BrowserView, MobileView } from 'react-device-detect';

class App extends React.Component{
    render(){
        return(
            <div className='app'>
                <BrowserView> 
                    // TODO add on load animations
                    // TODO add animations for interest
                    // FIXME Icons, descriptions, metadata
                    <Menu style = {{top: '0vh'}}/>
                    <Introduction style={{top: '0vh'}}/>
                    <About style={{top: '100vh'}}/>
                    <Experience style={{top: '200vh'}}/>
                    <Portfolio style={{top: '300vh'}}/>
                    <Contact style={{top: '400vh'}}/>
                </BrowserView>
                <MobileView/> // TODO add mobile view, either via responsiveness or new components
            </div>
        )
    }
}

export default App