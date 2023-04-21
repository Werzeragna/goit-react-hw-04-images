import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { StyledBtnSubmit, StyledForm, StyledHeader,  Styledinput } from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    if (query.trim() === '') {
      return Notify.warning(
        'The input of search are empty. Please, type your request!'
      );
    }
    this.props.onSubmit(query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <StyledHeader>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledBtnSubmit type="submit"><FiSearch size={20} stroke="#1c1c1c" /></StyledBtnSubmit>

          <Styledinput
            onChange={this.handleChange}
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
