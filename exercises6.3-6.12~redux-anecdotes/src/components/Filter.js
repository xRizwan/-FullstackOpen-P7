import React from 'react';
import { useDispatch } from 'react-redux'; 
import { setFilter } from '../reducers/filterReducer';

const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
      dispatch(setFilter(event.target.value));
    }

    const style = {
        marginTop: 20
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter;