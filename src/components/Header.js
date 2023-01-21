import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={hedr}> {title} </h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker Header",
};

Header.propTypes = {
  title: PropTypes.string,
};

const hedr = {
  color: "red",
  background: "blue",
};
export default Header;
