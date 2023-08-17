import "./App.scss"
import {Routes, Route, useLocation} from "react-router-dom"
import Particles from "react-tsparticles"
import { loadFull } from 'tsparticles'
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Portfolio from './containers/portfolio'
import Contect from './containers/contect'
import Navber from './components/navber'
import particles from './utils/particles'

function App() {

  const location = useLocation()

  const handleInit = async (main) =>{
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className='App'> 
      
      {
        renderParticleJsInHomePage && 
        <Particles id="particles" options={particles} init={handleInit}/>

      }


      <Navber/>
      
      <div className="App__main-page-content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
         <Route path='/contact' element={<Contect/>}/>
       </Routes>
      </div>
    </div>
  )
}

export default App

