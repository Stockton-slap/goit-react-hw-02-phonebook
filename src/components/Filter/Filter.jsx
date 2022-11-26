import { Component } from 'react';

import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <label>
        Find contacts by name
        <input type="text" name="filter" value={filter} onChange={onChange} />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
