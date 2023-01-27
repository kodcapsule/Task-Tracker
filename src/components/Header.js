import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShow, taskShow }) => {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <header className="header">
      <h1> {title} </h1>
      <Button
        color={taskShow ? "red" : "green"}
        text={taskShow ? "CLOSE" : "ADD TASK"}
        onClick={onShow}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

// const hedr = {
//   color: "red",
//   background: "blue",
// };
export default Header;
