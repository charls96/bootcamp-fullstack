import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Titles = ({title}) => {
  return <h1>{title}</h1>
}



const App = () => {
  const titles = {
    header1: 'Give Feedback',
    header2: 'stadistics'
  }
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Titles title={titles.header1}/>
      <button onClick={() => setGood(good +1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral +1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad +1)}>
        bad
      </button>
      <Titles title={titles.header2}/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)