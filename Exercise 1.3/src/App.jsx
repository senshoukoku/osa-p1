const App = () => {
  const course = 'Half Stack application development'
  const part1 = [{
    name: 'Fundamentals of React',
    exercises: 10
  }]
  const part2 = [{
    name: 'Using props to pass data',
    exercises: 7
  }]
  const part3 = [{
    name: 'State of a component',
    exercises: 14
  }]

  //Header Prop
  const Header = (props) => {

    console.log(props)
    return <h1>{props.course}</h1>
  }

  return (
    <div>
      <Header course={course}/>
      <p>{part1[0].name} {part1[0].exercises}</p>
      <p>{part2[0].name} {part2[0].exercises}</p>
      <p>{part3[0].name} {part3[0].exercises}</p>
    </div>
  )
}

export default App