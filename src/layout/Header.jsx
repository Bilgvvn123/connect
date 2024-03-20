import React from "react";
import Navbar from "../component/Navbar";

export const Header = () => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: "100px",
				marginBottom: "100px",
			}}
		>
			<Navbar></Navbar>
			<div>
				<input type="text" />
				<button>Search</button>
			</div>
		</div>
	);
};
