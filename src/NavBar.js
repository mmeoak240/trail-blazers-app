import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="nav-wrapper">
			<nav style={{ background: "sienna" }}>
				<NavLink style={{ marginRight: "10px" }} to="/">
					Home
				</NavLink>
				<NavLink to="/traillist">Trails</NavLink>
			</nav>
		</div>
	);
};

export default NavBar;
