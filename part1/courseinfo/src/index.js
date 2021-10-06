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
      <Parts name={content.part1} exercises={content.exercises} />
      <Parts name={content.part2} exercises={content.exercises2} />
      <Parts name={content.part3} exercises={content.exercises3} />
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
      <Header course= {course} />
      <Content 
      part1 = {parts[0].name} exercises = {parts[0].exercises}
      part2 = {parts[1].name} exercises2 = {parts[1].exercises}
      part3 = {parts[2].name} exercises3 = {parts[2].exercises}
      />
      <Total total = {'Number of exercises ' + (parts[0].exercises + parts[1].exercises + parts[2].exercises)} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))