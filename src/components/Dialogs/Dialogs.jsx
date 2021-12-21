import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


const DialogItem = (props) => {
	const path = "/dialogs/" + props.id

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
	let dialogsData = [
		{ id: 1, name: "Dimych" },
		{ id: 2, name: "Andrey" },
		{ id: 3, name: "Sveta" },
		{ id: 4, name: "Sasha" },
		{ id: 5, name: "Viktor" },
		{ id: 6, name: "Valera" },
	]

	let messagesData = [
		{ id: 1, message: "Hi!" },
		{ id: 2, message: "How are you?" },
		{ id: 3, message: "You!" },
		{ id: 4, message: "You!" },
		{ id: 5, message: "You!" },
	]

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
			</div>
			<div className={s.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
			</div>
		</div>
	)
}

export default Dialogs;
