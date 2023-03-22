import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WeatherDisplay from "./components/WeatherDisplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/Home";

function App() {
  const [location, setLocation] = useState<string>("");

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar location={location} setLocation={setLocation} />
          <Routes>
            <Route
              path="/weather"
              element={
                <WeatherDisplay location={location} setLocation={setLocation} />
              }
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
