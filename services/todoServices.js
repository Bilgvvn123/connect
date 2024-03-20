import { baseURL } from "../baseUrl";
import axios from "axios";

export const getTodo = async (id) => {
	const res = await axios.get(baseURL(id));

	return res.data.todo;
};

// export const getTodos = async () => {
// 	const res = await axios.get(baseURL(id));

// 	return res.data.todo;
// };
