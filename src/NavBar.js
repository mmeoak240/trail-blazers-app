import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="nav-wrapper">
			<nav style={{ background: "sienna" }}>
				<NavLink style={{ marginRight: "10px" }} to="/">
					Home
				</NavLink>
				<NavLink style={{ marginRight: "10px" }} to="/traillist">
					Trails
				</NavLink>
				<NavLink to="/newtrail">Add Trail</NavLink>
			</nav>
		</div>
	);
};

export default NavBar;
