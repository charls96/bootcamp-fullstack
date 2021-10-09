import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';

const rootElement= document.getElementById('root');
/* access via props
const Counter = (props) => {
  console.log("Counter render");
  return <h1>{props.number}</h1>
} */

//Acess directly to the object of the props
const Counter = ({number}) => {
  console.log("Counter render");
  return <h1>{number}</h1>
}
const App = (props) => {
  const [counter, setCounter] = useState(0);

 /*  const counter = useState(13);
  const counterValue = counter[0];
  const updateCounter = counter[1]; */
  const handleClick = () =>{
    //setCounter(counter + 1);
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  }


  const handleClickReset = () =>{
    setCounter(0);
  }

  const isEven = counter % 2 === 0;
  const messageEven = isEven ? 'the number is even' : 'the number is odd';
  return (
  <div>
    <p>The value of the counter is: </p>
    <Counter number = {counter} />
    <p>{messageEven}</p>
    <button onClick={handleClick}
      /* setCounter(prevCounter =>{
        return prevCounter + 1;
      } )*/
    >
      Increment
    </button>
    <button onClick={handleClickReset}>
      Reset
    </button>
  </div>
  );
}



ReactDOM.render(
    <App />,
    rootElement);






/* const refresh = () => {
  ReactDOM.render(
    <App contadorInicial={contador}/>, 
    rootElement
);
} 

setInterval(() => {         //each second that pass is rendering app
  refresh();
  contador++;
}, 1000) */



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
