<<<<<<< HEAD
import React from "react";
import { Introduction } from "./components.js";
=======
import React from 'react';
import { Introduction, About, Experience } from './components.js';
import {BrowserView, MobileView} from 'react-device-detect';
>>>>>>> dev/features/experience

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