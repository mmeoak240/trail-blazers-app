import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="nav-wrapper">
			<nav style={{ textAlign: "center", background: "sienna" }}>
				<NavLink style={{ marginRight: "30px", fontSize: "20px" }} to="/">
					Home
				</NavLink>
				<NavLink
					style={{ marginRight: "30px", fontSize: "20px" }}
					to="/traillist"
				>
					Trails
				</NavLink>
				<NavLink
					style={{ marginRight: "30px", fontSize: "20px" }}
					to="/newtrail"
				>
					Add Trail
				</NavLink>
			</nav>
		</div>
	);
};

export default NavBar;
