import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Signup } from "./pages";
import { Navbar, Footer } from "./components";
import { useAuthContext } from "./hooks/useAuthContext";
import { ViewByCategory } from "./components";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/register"
              element={!user ? <Signup /> : <Navigate to="/" />}
            ></Route>
            <Route path="/category" element={<ViewByCategory />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
