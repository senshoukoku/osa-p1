const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

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
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
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