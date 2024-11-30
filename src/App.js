// Remove the unused import if not needed
// import React from "react";
import { useState } from "react";
import "./App.css";
import About from "./componante/About";
import Navbar from "./componante/Navbar";
import TextForm from "./componante/TextForm";
import Alert from "./componante/Alert";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enable", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          tital="TextUtils2"
          mode={mode}
          toggleMode={toggleMode}
          AboutUs="AboutMe"
        />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />}></Route>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
