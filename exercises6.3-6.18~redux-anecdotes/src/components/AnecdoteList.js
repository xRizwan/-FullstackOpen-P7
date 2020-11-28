import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseVoteOf } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter);
  const anecdotes = useSelector(state => state.anecdotes);

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(increaseVoteOf(id));
    
    dispatch(setNotification(`You voted for "${id}"`, 1000))
  }

  React.useEffect(() => {console.log(filter)}, [filter])

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .filter(anecdote => anecdote.content.includes(filter))
        .sort((a, b) => a.votes > b.votes ? -1 : 0).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList