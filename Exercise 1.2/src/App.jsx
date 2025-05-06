const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Part = ({title, exercises}) => {
  return(
    <div>
      <p>{title} {exercises}</p>
    </div>
  )
}

//Header Prop
const Header = () =>{
  return(
    <h1>{course}</h1>
  )
}
//Content Prop
const Content = () => {
  return(
    <div>
      <Part title={part1} number of exercises={exercises1}/>
      <Part title={part2} number of exercises={exercises2}/>
      <Part title={part3} number of exercises={exercises3}/>
    </div>
  )
}
//Total Prop
const Total = () => {
  return(
    <div>
      Number of Exercises: {exercises1 + exercises2 + exercises3}
    </div>
  )
}

const content = {Content}
const total = {Total}

const App = () => {
  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total total={total}/>
    </div>
  )
}

export default App