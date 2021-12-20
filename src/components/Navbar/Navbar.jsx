import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink
					to="/profile"
					className={({ isActive }) => isActive ? s.activeLink : undefined}
				>
					Profile
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/dialogs"
					className={({ isActive }) => isActive ? s.activeLink : undefined}
				>
					Dialogs
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/news"
					className={({ isActive }) => isActive ? s.activeLink : undefined}
				>
					News
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/music"
					className={({ isActive }) => isActive ? s.activeLink : undefined}
				>
					Music
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/settings"
					className={({ isActive }) => isActive ? s.activeLink : undefined}
				>
					Settings
				</NavLink>
			</div>
		</nav>
	)
}

export default Navbar;
