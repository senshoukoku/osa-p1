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

  const Total = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part, int)=>(
        <p key={int}>
          {part.name}: {part.exercises}
        </p>
      ))}
      <p>Number of Exercises: {Total}</p>
    </div>
  );
};

export default App