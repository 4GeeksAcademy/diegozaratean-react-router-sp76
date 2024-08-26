import React, { useState } from "react";
import Contact from "./contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about";
import Service from "./service";
import Header from "./header";

const Home = () => {
	const [texto,setTexto] = useState('texto inicial')
	return (
		<>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/contactanos" element={<Contact />} />
				<Route path="/servicios" element={<Service />} />
			</Routes>
			<p>{texto}</p>
			<p><button onClick={()=>setTexto('actualizado')}>Cambiar texto</button> </p>
			<h3>Footer</h3>
		</BrowserRouter>
		</>		
	);
};

export default Home;
