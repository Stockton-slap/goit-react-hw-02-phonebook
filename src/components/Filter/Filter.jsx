import { Component } from 'react';

import PropTypes from 'prop-types';

import { FilterLabel, FilterValue } from './Filter.styled';

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <FilterLabel>
        Find contacts by name
        <br />
        <FilterValue
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </FilterLabel>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
