import { useState } from 'react'

const Btn = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad} ) => {
  const all = good + neutral + bad
  const sum = good + 0 - bad
  const avg = sum / all
  const positiveAvg = (good / all) * 100 + "%"

  if (all === 0) {
    return (

        <p>No feedback given</p>

    )
  } else {
    return (
      <div>
        <StatisticLine text="Good:" value={good}/>
        <StatisticLine text="Neutral:" value={neutral}/>
        <StatisticLine text="Bad:" value={bad}/>
        <StatisticLine text="All:" value={all}/>
        <StatisticLine text="Average:" value={avg}/>
        <StatisticLine text="Positive:" value={positiveAvg}/>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const counter = (rating, setRating) => setRating(rating + 1)

  return (
    <>
      <h1>Give Feedback</h1>
      <div>
        <Btn handleClick={() => counter(good, setGood)} text={"good"} />
        <Btn handleClick={() => counter(neutral, setNeutral)} text={"neutral"} />
        <Btn handleClick={() => counter(bad, setBad)} text={"bad"} />
      </div>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App;
