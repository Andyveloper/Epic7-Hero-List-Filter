import PropTypes from 'prop-types';

const Filter = (props) => {
  const { handleChange } = props;
  return (
    <select
      name="category-list"
      id="category-list"
      onChange={handleChange}
      className="filterMenu"
    >
      <option value="">All</option>
      <option value="wind">Wind</option>
      <option value="ice">Ice</option>
      <option value="fire">Fire</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
