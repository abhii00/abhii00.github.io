import React from 'react';
import { Introduction, About, Experience } from './components.js';
import {BrowserView, MobileView} from 'react-device-detect';

class App extends React.Component{
    render(){
        return(
            <div className='app'>
                <BrowserView>
                    <Introduction/>
                    <About/>
                    <Experience/>
                </BrowserView>
                <MobileView>
                    
                </MobileView>
            </div>
        )
    }
}

export default App