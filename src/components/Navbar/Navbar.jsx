import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Routes,
	Route,
	Link
} from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<Link to="/profile">Profile</Link>
			</div>
			<div className={`${s.item} ${s.active}`}>
				<Link to="/dialogs">Dialogs</Link>
			</div>
			<div className={s.item}>
				<a>News</a>
			</div>
			<div className={s.item}>
				<a>Music</a>
			</div>
			<div className={s.item}>
				<a>Settings</a>
			</div>
		</nav>
	)
}

export default Navbar;
