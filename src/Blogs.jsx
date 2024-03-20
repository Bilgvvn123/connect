import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";

const Blogs = () => {
	const [data, setData] = useState([]);

	console.log(location);
	console.log("======>");

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get("http://localhost:2030/todos");

			console.log(res.data.todos);

			setData(res.data.todos);
		};

		fetchData();
	}, []);
	console.log(data);

	return (
		<div>
			Blogs
			{data.length !== 0
				? data.map((el) => (
						<Link to={`/blogs/${el._id}`}>
							{el.id}
							<h2>{el.title}</h2>
							{moment(el.createdAt).format(
								"MMMM Do YYYY, h:mm:ss a"
							)}
							<hr />
						</Link>
				  ))
				: "no datas"}
		</div>
	);
};

export default Blogs;
