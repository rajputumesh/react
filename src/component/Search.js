import React from 'react';

const Search = ({searchFeild,searchchange}) => {
    return (
        <input type='text' placeholder='Search robots' className='form-control' onChange={searchchange} />
    )
}

export default Search;