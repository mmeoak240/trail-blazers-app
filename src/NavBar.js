import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div class="nav-wrapper">
			<nav style={{ background: "sienna" }}>
				<NavLink style={{ marginRight: "10px" }} to="#">
					Home
				</NavLink>
				<NavLink to="#">Comments</NavLink>
			</nav>
		</div>
	);
};

export default NavBar;
