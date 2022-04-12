import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	const items = [
		"top",
		"newest",
		"show",
		"ask",
		"jobs"
	]

	return (
		<div className="flex items-stretch justify-evenly py-1 border-b-2 border-slate-500 bg-[#ff6600] sticky top-0">
			<b>Hacker News</b>
			{items.map(item =>
				<NavLink
					to={`/${item}`}
					key={item}
					className={({ isActive }) => (isActive ? 'text-black underline decoration-2' : 'text-black')}>
					{item}
				</NavLink>)}
		</div>
	);
}

export default NavBar;