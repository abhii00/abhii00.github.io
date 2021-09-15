import React from "react";
import { Header, Introduction } from "./components.js";
import {BrowserView, MobileView} from 'react-device-detect';

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <BrowserView>
                    <Header/>
                    <Introduction/>
                </BrowserView>
                <MobileView>
                    
                </MobileView>
            </div>
        )
    }
}

export default App