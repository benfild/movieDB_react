import React, { useState, useEffect, useRef } from 'react';

//import search icon
import searchIcon from '../../images/search-icon.svg';

//styles
import { Wrapper, Content } from './SearchBar.styles';


const SearchBar = ({ searchTerm }) => {
    const [state, setState] = useState('');

    
    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input 
                    type='text' 
                    placeholder='Search Movie'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}    
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;