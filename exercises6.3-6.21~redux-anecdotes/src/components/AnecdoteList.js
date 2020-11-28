import React from 'react'
import { increaseVoteOf } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import { resetTimeoutID } from '../reducers/timeoutReducer';
import { connect } from 'react-redux';

const AnecdoteList = (props) => {
  const filter = props.filter;
  const anecdotes = props.anecdotes;
  const vote = (id) => {
    props.increaseVoteOf(id);
    
    if (props.timeout !== null){
      window.clearTimeout(props.timeout);
      props.resetTimeoutID();
    }

    props.setNotification(`You voted for "${id}"`, 1000);
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    timeout: state.timeout,
  }
}

const mapDispatchToProps = {
  increaseVoteOf,
  setNotification,
  resetTimeoutID,
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);

export default ConnectedAnecdoteList