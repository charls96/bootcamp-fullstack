import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}
const Parts = (part) => <p>{part.name} {part.exercises}</p> 
const Content = (content) => {
  console.log(content)
  return (
    <div>
      <Parts name={content.course.parts[0].name} exercises={content.course.parts[0].exercises} />
      <Parts name={content.course.parts[1].name} exercises={content.course.parts[1].exercises} />
      <Parts name={content.course.parts[2].name} exercises={content.course.parts[2].exercises} />
    </div>
  )
 
}
const Total = (props) => <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>

/*
* The same as
* const Title = (props) => {
*   return <h1>{props.course}</h1>  
*}
*/
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))