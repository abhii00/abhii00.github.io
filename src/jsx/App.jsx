import '../css/App.css'

import Bar from './Bar.jsx'
import Page from './Page.jsx'
import Card from './Card.jsx'
import PortfolioItem from './PortfolioItem.jsx'
import linkedinIcon from '../assets/linkedinIcon.svg'

import logoIcon from '../assets/logoIcon.svg'
import mailIcon from '../assets/mailIcon.svg'

import jplIcon from '../assets/jplIcon.jpg'
import tasIcon from '../assets/tasIcon.png'
import selwynIcon from '../assets/selwynIcon.svg'
import cusfIcon from '../assets/cusfIcon.png'
import scesIcon from '../assets/scesIcon.png'
import zgIcon from '../assets/zgIcon.png'
import camIcon from '../assets/camIcon.png'

export default function App() {
  return (
    <>
      <Bar>
        <img src={logoIcon} class='icon' alt=''/>
      </Bar>
      <Page id="landing">
        <h2> hi, I'm </h2>
        <h1> abhi </h1>
        <h2> and I'm making (my) dreams come true </h2>
      </Page>
      <Page id="portfolio">
        <Card> 
          <h4> Experience </h4> 
          <PortfolioItem icon={tasIcon} date={"2023 - Now"} role={"Propulsion Systems Engineer"} organisation={"Thales Alenia Space UK"}/>
          <PortfolioItem icon={logoIcon} date={"2022 - Now"} role={"Engineering / STEM Tutor"} organisation={"Various Organisations"}/> 
          <PortfolioItem icon={jplIcon} date={"2022"} role={"Visiting Student Researcher"} organisation={"NASA Jet Propulsion Laboratory"}/> 
          <PortfolioItem icon={tasIcon} date={"2021"} role={"Propulsion Intern"} organisation={"Thales Alenia Space UK"}/>
          <PortfolioItem icon={selwynIcon} date={"2019 - 23"} role={"BA, MEng in Engineering"} organisation={"Selwyn College, University of Cambridge"}/>
        </Card>
        <Card> 
          <h4> Projects </h4>  
          <PortfolioItem icon={logoIcon} date={"2026"} role={"Digital Vinyl Frame"} organisation={"CircuitPython"}/> 
          <PortfolioItem icon={logoIcon} date={"2026"} role={"Quick Access Button"} organisation={"Android (Kotlin), Arduino"}/>
          <PortfolioItem icon={scesIcon} date={"2022 - 23"} role={"President"} organisation={"Selwyn College Engineering Society"}/> 
          {/* <PortfolioItem icon={zgIcon} date={"2021 - 23"} role={"Mentor"} organisation={"Zero Gravity"}/> */}
          <PortfolioItem icon={cusfIcon} date={"2020 - 23"} role={"President / White Dwarf Propulsion Engineer"} organisation={"Cambridge University Spaceflight"}/>
          {/* <PortfolioItem icon={camIcon} date={"2020 - 23"} role={"IB - IIB Representative / President"} organisation={"CUED Staff-Student Joint Committee"}/> */}
          <PortfolioItem icon={logoIcon} date={"2019 - 22"} role={"Orbit & Landing Simulator and Earth Observation Visualiser"} organisation={"JavaScript, Python, C++"}/> 
        </Card>
      </Page>
      <Page id="contact">
        <a href='mailto:abhijit.pandit808[at]gmail.com' target="_blank" rel="noopener noreferrer">
          <img src={mailIcon} class='icon mail' alt=''/>
        </a>
        <a href='https://www.linkedin.com/in/abhijit-pandit' target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} class='icon' alt=''/>
        </a>
      </Page>
      <Bar/>
    </>
  )
}