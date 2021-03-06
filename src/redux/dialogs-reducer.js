const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
	dialogs: [
		{ id: 1, name: "Dimych" },
		{ id: 2, name: "Andrey" },
		{ id: 3, name: "Sveta" },
		{ id: 4, name: "Sasha" },
		{ id: 5, name: "Viktor" },
		{ id: 6, name: "Valera" },
	],
	messages: [
		{ id: 1, message: "Hi!" },
		{ id: 2, message: "How are you?" },
		{ id: 3, message: "You!" },
		{ id: 4, message: "You!" },
		{ id: 5, message: "You!" },
	],
	newMessageBody: ''
}


const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY: {
			return {
				...state,
				newMessageBody: action.body
			}
		}
		case SEND_MESSAGE: {
			const body = state.newMessageBody
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, { id: 6, message: body }]
		}
		}
		default:
			return state;
	}
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer
