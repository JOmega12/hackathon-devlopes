
// import './App.css'

import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { Homepage } from "./Pages/Homepage";
import { Navbar } from "./Pages/Navbar";
import { AuthProvider } from "./Providers/AuthProvider";
import { Lobby } from "./Pages/Lobby";
import { DogCard } from "./Pages/DogCard";
import { DogProvider } from "./Providers/DogProvider";


function App() {


  return (
    <>
    <AuthProvider>
      <DogProvider>  
        <Navbar/>
        <div className="py-10 mx-10 ">
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="about-us" element={<AboutPage/>}></Route>
            <Route path="lobby" element={<Lobby/>}></Route>
            <Route path="dogs" element={<DogCard />}></Route>
          </Routes>
        </div>
      </DogProvider>
    </AuthProvider>
    </>
  )
}

export default App
