import React from 'react';
import { Menu, Introduction, About, Experience, Portfolio, Contact } from './components.js';
import {BrowserView, MobileView} from 'react-device-detect';

class App extends React.Component{
    render(){
        return(
            <div className='app'>
                <BrowserView>
                    <Menu style = {{top: '0vh'}}/>
                    <Introduction style={{top: '0vh'}}/>
                    <About style={{top: '100vh'}}/>
                    <Experience style={{top: '200vh'}}/>
                    <Portfolio style={{top: '300vh'}}/>
                    <Contact style={{top: '400vh'}}/>
                </BrowserView>
                <MobileView>
                    
                </MobileView>
            </div>
        )
    }
}

export default App