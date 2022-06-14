import { useState } from 'react'

const Btn = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const AnecdoteLine = ({anecdotes, votes, index}) => {
  return (   
    <div>
      <p>{anecdotes[index]}</p>
      <p>has {votes[index]} votes</p>
    </div> 
  )
}

const MostVotes = ({anecdotes, votes}) => {
  const max = Math.max(...votes)
  const maxIndex = votes.indexOf(max)

  if(max === 0) {
    return (
      <div>
        <p>No votes have been made.</p>
      </div>
    )
  } else {
    return (
      <div>
        <AnecdoteLine anecdotes={anecdotes} votes={votes} index={maxIndex}/>
      </div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const numAnecdotes = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(numAnecdotes).fill(0))

  const randomAnecdote = () => setSelected(Math.floor(Math.random() * numAnecdotes))
  const addVote = (selected) => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of The Day</h1>
      <AnecdoteLine anecdotes={anecdotes} votes={votes} index={selected} />
      <div>
        <Btn handleClick={() => randomAnecdote()} text="Next Anecdote" />
        <Btn handleClick={() => addVote(selected)} text="Vote" />
      </div>
      <h1>Anecdote with Most Votes</h1>
      <MostVotes anecdotes={anecdotes} votes={votes}  />
    </div>
  )
}

export default App
