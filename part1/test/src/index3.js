import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useState} from 'react';
import "./index.css";


const WarningNotUsed = () =>{
    return <h1>Counter is not used yet</h1>
}

const ListOfClicks = ({clicks}) => {
    //debugger;           //Stops the program and you can see what's happening
    return <p>{clicks.join(", ")}</p>
}

const INITIAL_COUNTER_STATE = {
    left: 2,
    right: 4,
    message: 'This is a message in the state'
}
const App = () => {
    /* const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0) */

    const [counters, setCounters] = useState(INITIAL_COUNTER_STATE)
    const [clicks, setClicks] = useState([]);

    const handleClicklLeft = () =>{
        const newCountersState = {
            ...counters,
            left: counters.left +1
        }
            setCounters(newCountersState);
            setClicks(prevClicks =>{
                return [...prevClicks, 'L'];
            })
        };
    const handleClicklRight = () =>{
        setCounters({
            ...counters,
            right: counters.right +1
        })
        setClicks(prevClicks =>([...prevClicks, 'R']))
    }
    const handleReset = () =>{
        setCounters(INITIAL_COUNTER_STATE)
        setClicks([])
    }
    
    //Only one function handleClick
    /* const handleClick = (e) => {
        setCounter(counter+ Number(e.target.innerText))}
    }
    <button onClick = {handleClick}>+1</button>
    
    <button onClick = {handleClick}>-1</button> */
  
    return (
      <div>
        {counters.left}
        <button onClick={handleClicklLeft}>
          left
        </button>
        <button onClick={handleClicklRight}>
          right
        </button>
        {counters.right}
        <p>
            <button onClick={handleReset}>reset</button>
        </p>
        <p>Total clicks: {clicks.length}</p>
        {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks clicks={clicks} />}
      </div>
    )
  }



  const rootElement= document.getElementById('root');
  ReactDOM.render(
    <App />,
    rootElement);
