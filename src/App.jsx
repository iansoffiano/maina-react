import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button/Button";

function App() {

	return (
		<>
			<div className="flex flex-col justify-center items-center h-full">
				<h1 className="font-bold text-[2rem] text-center">
					Belajar React + Tailwindcss
				</h1>
				<div className="">
					<Button value="Test Parsing props" appereance="primary" />
					<Button value="Ini button secondary" appereance="secondary" />
				</div>
        <div>
        </div>
			</div>
		</>
	);
}

export default App;
