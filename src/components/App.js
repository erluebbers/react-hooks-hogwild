import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles"
import hogs from "../porkers_data";

function App() {
	const [displayHogs, setDisplayHogs] = useState([...hogs])

	return (
		<div className="App">
			<Nav />
			<HogTiles hogs={displayHogs}/>
		</div>
	);
}

export default App;
