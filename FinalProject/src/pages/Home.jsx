import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home">
			<div className="home-content">
				<h1>Welcome ro Recipe Finder</h1>
				<p>Find recipes, save it to favoriter, and create your shopping list</p>

				<Link to='/recipes' className='btn'>Start searching</Link>
			</div>
		</div>
	)
}

export default Home