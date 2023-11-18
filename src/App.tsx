// import './App.css'

import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { Homepage } from "./Pages/Homepage";
import { Navbar } from "./Pages/Navbar";
import { AuthProvider } from "./Providers/AuthProvider";
import { Lobby } from "./Pages/Lobby";
import { DogCard } from "./Pages/DogCard";
import { DogProvider } from "./Providers/DogProvider";
import { BookedDogs } from "./Pages/BookedDogs";
import { BookingProvider } from "./Providers/BookingProvider";
import { Footer } from "./Pages/Footer";

function App() {
  return (
    <>
      <AuthProvider>
        <DogProvider>
          <BookingProvider>
            <Navbar />
            <div className="w-full min-h-fit">
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="about-us" element={<AboutPage />}></Route>
                <Route path="lobby" element={<Lobby />}></Route>
                <Route path="booked-dogs" element={<BookedDogs />}></Route>
                <Route path="dogs" element={<DogCard />}></Route>
              </Routes>
            </div>
            <Footer />
          </BookingProvider>
        </DogProvider>
      </AuthProvider>
    </>
  );
}

export default App;
