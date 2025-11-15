import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div className="container">
				<h1>Recipe Finder</h1>
				<nav>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/favorites'>Favorites</NavLink>
					<NavLink to='/shopping-list'>Shopping List</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Header