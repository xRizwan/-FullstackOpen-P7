import anecdoteService from "../services/anecdoteService";

const reducer = (state = [], action) => {

  switch (action.type) {
    case "INCREASE_VOTE":
      const id = action.data.id;
      const objToChange = state.find(n => n.id === id);
      const changedAnecdote = {
        ...objToChange,
        votes: objToChange.votes + 1,
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote);
    case "ADD_ANECDOTE":
      const anecdote = action.data;
      return [...state, anecdote];
    case "INIT_ANECDOTES":
      return action.data;
    default:
      return state;
  }
}

export const increaseVoteOf = (id) => {
  return async dispatch => {
    await anecdoteService.increaseVote(id);
    dispatch({
      type: "INCREASE_VOTE",
      data: { id },
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createAnecdote(content);
    dispatch({
      type: "ADD_ANECDOTE",
      data: anecdote,
    })
  }
}

export default reducer