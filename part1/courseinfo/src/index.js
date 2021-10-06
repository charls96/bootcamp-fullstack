import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course}</h1>
const Parts = (part) => <p>{part.name} {part.exercises}</p> 
const Content = (content) => {
  return (
    <div>
      <Parts name={content.part1.name} exercises={content.part1.exercises} />
      <Parts name={content.part2.name} exercises={content.part2.exercises} />
      <Parts name={content.part3.name} exercises={content.part3.exercises} />
    </div>
  )
 
}
const Total = ({total}) => <p>{total}</p>

/*
* The same as
* const Title = (props) => {
*   return <h1>{props.course}</h1>  
*}
*/
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course= {course} />
      <Content 
      part1 = {part1.name} exercises = {part1.exercises}
      part2 = {part2.name} exercises2 = {part2.exercises}
      part3 = {part3.name} exercises3 = {part3.exercises}
      />
      <Total total = {'Number of exercises ' + (part1.exercises + part2.exercises + part3.exercises)} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))