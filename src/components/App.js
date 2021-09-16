import React from "react";
import { Header, Introduction, About } from "./components.js";
import {BrowserView, MobileView} from 'react-device-detect';

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <BrowserView>
                    <Header/>
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