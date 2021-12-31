import React from 'react';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

	const state = props.store.getState().dialogsPage;

	const onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}

	const onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	}

	return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
}

export default DialogsContainer;
