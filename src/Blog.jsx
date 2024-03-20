import axios from "axios";
import axios2 from "../axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodo } from "../services/todoServices";

const Blog = () => {
	const [data, setData] = useState({});

	const paramRef = useRef();
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const todo = await getTodo(id);
			setData(todo);
		};

		fetchData();
	}, []);

	console.log(data);

	const complete = () => {
		const fetchData2 = async () => {
			const res = await axios2.put(`todos/${id}/complete`);

			setData(res.data.todo);
		};

		fetchData2();
	};

	return (
		<div>
			<small style={{ fontSize: "10px" }}>ID {id}</small>
			<>
				{data.completed ? (
					<h2>{data?.title}</h2>
				) : (
					<h2 style={{ textDecoration: "line-through" }}>
						{data?.title}
					</h2>
				)}
			</>
			<p>{data?.body}</p>
			<button onClick={complete}>
				{data.completed ? "completed" : "uncompleted"}
			</button>
		</div>
	);
};

export default Blog;
