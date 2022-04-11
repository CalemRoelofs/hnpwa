import React from "react";

const NavBar = () => {
	const items = [
		"top",
		"new",
		"show",
		"ask",
		"jobs"
	]

	return (
		<div className="flex items-stretch justify-evenly py-1 border-b-2 border-slate-500 bg-orange-500 sticky top-0">
			<b>Hacker News</b>
			{items.map(item => <span key={item} className="text-black">{item}</span>)}
		</div>
	);
}

export default NavBar;