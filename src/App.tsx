
// import './App.css'

import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { Homepage } from "./Homepage";
import { Navbar } from "./Navbar";
import { AuthProvider } from "./Providers/AuthProvider";
import { Lobby } from "./Lobby";
import { Dogs } from "./Dogs";


function App() {


  return (
    <>
    <AuthProvider>
      <Navbar/>
      <div className="py-10 mx-10 ">
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="about-us" element={<AboutPage/>}></Route>
          <Route path="lobby" element={<Lobby/>}></Route>
          <Route path="dogs" element={<Dogs />}></Route>
        </Routes>
      </div>
    </AuthProvider>
    </>
  )
}

export default App
