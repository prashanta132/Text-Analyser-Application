// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';

import About from './components/About';
import TextForm from './components/TextForm';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 1500);


  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#465f8d';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = 'Text Utils is amazing Mode';


      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500);

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"
    }
  }


  return (

    <>



      {/*<Navbar title="TextUtils2" aboutText="About us"/> */}
      <Router>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Route path='/'>
            
          </Route>
          <Route path= "/about">
            <About />
          </Route> */}
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>  
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>  
          </Switch>
      </div>
      </Router>

            
    

        



       


    </>
  );
}

export default App;
