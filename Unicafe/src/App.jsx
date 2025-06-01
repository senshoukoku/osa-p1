import { useState } from 'react'
import Statistics from './Components/Statistics'
import HandlerButton from './Components/ButtonHandler'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  const totalFeedback = good + neutral + bad

  return (
    <>
    <h1>give feedback</h1>
    <div className="btnFeedback">
          <div className="btnFeedback">
        <span><HandlerButton onClick={handleGood} text='good'/></span>
        <span><HandlerButton onClick={handleNeutral} text='neutral'/></span>
        <span><HandlerButton onClick={handleBad} text='bad'/></span>
    </div>
    </div>
    <div className='condition'>
      {totalFeedback > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
    </>
  )
}

export default App