import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import s from './../Dialogs.module.css'


const DialogItem = (props) => {
	let path = "/dialogs/" + props.id

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)

}

export default DialogItem;
