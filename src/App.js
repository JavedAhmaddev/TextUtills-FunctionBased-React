import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {


  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutills-Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutills-Light Mode";
    }

  }
  return (

    <>



      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />
      </div>
      {/* <Router>
          <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />


          {<div className="container my-3">

          <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              
              <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />
              </Route>
          </Switch>
            
          </div>}
      </Router> */}
    </>

  );



}

export default App;
