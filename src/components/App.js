import React from "react";
import { Introduction } from "./components.js"

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <Introduction/>
            </div>
        )
    }
}

export default App