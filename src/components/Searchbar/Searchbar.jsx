import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import {
  StyledBtnSubmit,
  StyledForm,
  StyledHeader,
  Styledinput,
} from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return Notify.warning(
        'The input of search are empty. Please, type your request!'
      );
    }
    onSubmit(query);

    setQuery('');
  };

  return (
    <StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledBtnSubmit type="submit">
          <FiSearch size={20} stroke="#1c1c1c" />
        </StyledBtnSubmit>

        <Styledinput
          onChange={handleChange}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
