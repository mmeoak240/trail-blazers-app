import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<NavLink to="#">Home</NavLink>
			<NavLink to="#">Comments</NavLink>
		</nav>
	);
};

export default NavBar;
