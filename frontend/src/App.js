import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Signup />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
