import React from 'react';
import './Search.css';
import { FaSearch } from 'react-icons/fa';

export const Search = ({onChange, placeholder}) => {
    return (
      <div className="Search">
        <span className="SearchSpan">
          <FaSearch />
        </span>
        <input
          className="SearchInput"
          type="text"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>    
    );
  };