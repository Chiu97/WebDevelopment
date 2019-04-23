import React from 'react';
import { robots } from './robots';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';

const SearchBox = ({searchfield,onSearchChange}) => {
    return (
        <div className='pd2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue' 
            type='search' 
            placeholder='search robots'
            onChange={onSearchChange}
            >
            </input>
        </div>
    );
}

export default SearchBox;