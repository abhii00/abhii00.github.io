import React from "react";
import { Menu, Introduction, About } from "./components.js";
import {BrowserView, MobileView} from 'react-device-detect';

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <BrowserView>
                    <Menu/>
                    <Introduction/>
                    <About/>
                </BrowserView>
                <MobileView>
                    
                </MobileView>
            </div>
        )
    }
}

export default App