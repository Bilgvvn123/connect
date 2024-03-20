import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Blogs from "./Blogs";
import { Header, Footer } from "./layout";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="blogs" element={<Blogs />}></Route>
				<Route path="blogs/:id" element={<Blog />}></Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
