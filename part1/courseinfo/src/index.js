import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Parts = (part) => <p>{part.name} {part.exercises}</p> 
const Content = (content) => {
  console.log(content)
  return (
    <div>
      <Parts name={content.parts[0].name} exercises={content.parts[0].exercises} />
      <Parts name={content.parts[1].name} exercises={content.parts[1].exercises} />
      <Parts name={content.parts[2].name} exercises={content.parts[2].exercises} />
    </div>
  )
 
}
const Total = (props) => <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>

/*
* The same as
* const Title = (props) => {
*   return <h1>{props.course}</h1>  
*}
*/
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))