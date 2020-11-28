import React from 'react'
import { resetTimeoutID } from '../reducers/timeoutReducer';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';

    props.createAnecdote(content);

    if (props.timeout !== null){
      window.clearTimeout(props.timeout);
      props.resetTimeoutID();
    }

    props.setNotification(`You added "${content}"`, 1000);
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    timeout: state.timeout,
  }
}

const mapDispatchToProps = {
  setNotification,
  createAnecdote,
  resetTimeoutID,
}

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm);

export default ConnectedAnecdoteForm;