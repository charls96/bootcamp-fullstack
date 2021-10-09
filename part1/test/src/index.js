import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useState} from 'react';
import "./index.css";




  
const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    return (
      <div>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>
          plus
        </button>
        <button onClick={() => setCounter(0)}> 
          zero
        </button>
      </div>
    )
  }
  
  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )