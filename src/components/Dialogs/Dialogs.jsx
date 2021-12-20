import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog + ' ' + s.active}>
					Dymich
				</div>
				<div className={s.dialog}>
					Andrey
				</div>
				<div className={s.dialog}>
					Sveta
				</div>
				<div className={s.dialog}>
					Sasha
				</div>
				<div className={s.dialog}>
					Viktor
				</div>
				<div className={s.dialog}>
					Valera
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.dialog}>Hi!</div>
				<div className={s.dialog}>How are you?</div>
				<div className={s.dialog}>You!</div>
			</div>
		</div>
	)
}

export default Dialogs;
