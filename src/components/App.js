import React from 'react';
import { Section, ProjectsGrid } from './components.js';
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
                    <Section title='Introduction' id='introduction' sidebarShown={false}/>
                    <Section title='About' id='about' sidebarShown={true} sidebarLeft={true}/>
                    <Section title='Experience and Education' id='experience' sidebarShown={true} sidebarLeft={false}>
                        <ProjectsGrid/>
                    </Section>
                    <Section title='Portfolio' id='portfolio' sidebarShown={true} sidebarLeft={true}>
                        <ProjectsGrid/>
                    </Section>
                    <Section title='Contact' id='contact' sidebarShown={true} sidebarLeft={false}/>
                </BrowserView>
                <MobileView/> {/* TODO add mobile view, either via responsiveness or new components */}
            </div>
        )
    }
}

export default App