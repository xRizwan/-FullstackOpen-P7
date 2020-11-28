import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}
const createAnecdote = async (content) => {
    const object = {content: content, votes: 0}
    const response = await axios.post(baseUrl, object);
    return response.data;
}

const increaseVote = async (id) => {
    const url = `${baseUrl}/${id}`
    const oldObj = await axios.get(url)

    const updatedObj = {
        ...oldObj.data,
        votes: oldObj.data.votes + 1,
    }

    const patchResponse = await axios.patch(url, updatedObj);
    return patchResponse;

}

export default {
    getAll,
    createAnecdote,
    increaseVote,
}