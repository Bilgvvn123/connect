import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div style={{ display: "flex", gap: "30px" }}>
			<Link to={"/"}>Home</Link>
			<Link to={"/blogs"}>Blogs</Link>
		</div>
	);
};

export default Navbar;
