
import './App.css';
import Message from './Message'


const Description = () => {
  return <p>This the app</p>
}


const App = () => {

  return (
    <div className="App">
      <Message color='red' message='We are working' />
      <Message color='blue' message='on' />
      <Message color='green' message='it' />
      <Description />
    </div>
  );
}

export default App;
