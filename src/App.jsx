import React, { useState } from "react"
import News from "./pages/News"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  //* Getting country from local storage if present
  const [country, setCountry] = useState(
    localStorage.getItem("country") ? localStorage.getItem("country") : "us"
  )

  return (
    <>
      <Navbar
        country={country}
        setCountry={setCountry}
      />
      <Routes>
        <Route
          path="/"
          element={
            <News
              key="home"
              country={country}
              category="Entertainment"
            />
          }
        />

        <Route
          path="general"
          element={
            <News
              key="general"
              country={country}
              category="General"
            />
          }
        />

        <Route
          path="entertainment"
          element={
            <News
              country={country}
              category="Entertainment"
            />
          }
        />

        <Route
          path="technology"
          element={
            <News
              key="technology"
              country={country}
              category="Technology"
            />
          }
        />

        <Route
          path="business"
          element={
            <News
              key="business"
              country={country}
              category="Business"
            />
          }
        />

        <Route
          path="health"
          element={
            <News
              key="health"
              country={country}
              category="Health"
            />
          }
        />

        <Route
          path="science"
          element={
            <News
              key="science"
              country={country}
              category="Science"
            />
          }
        />

        <Route
          path="sports"
          element={
            <News
              key="sports"
              country={country}
              category="Sports"
            />
          }
        />

        <Route
          path="*"
          element="Not Found"
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
