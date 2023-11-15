
// import './App.css'

import { AboutPage } from "./AboutPage"
import { Homepage } from "./Homepage"
import { Navbar } from "./Navbar"

function App() {


  return (
    <div className="py-10 mx-10 ">
      <Navbar/>
      <div>
        <AboutPage />
        <Homepage />
      </div>
    </div>
  )
}

export default App
