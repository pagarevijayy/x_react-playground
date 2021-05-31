import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <header className="flex justify-between px-8 py-3 my-3  shadow-sm">
      <div className={classes.company}>
        <Link to="/">PlayGround</Link>
      </div>
      <nav>
        <ul className="flex space-x-3 md:space-x-6">
          <li>
            <Link to="all-meetups">Meetups</Link>
          </li>
          <li>
            <Link to="new-meetup">Host</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

NavBar.propTypes = {};

export default NavBar;
