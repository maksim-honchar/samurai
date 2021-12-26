const store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hi, how are you?", likesCount: 12 },
				{ id: 2, message: "It's my first post", likesCount: 11 },
				{ id: 3, message: "Blabla", likesCount: 11 },
				{ id: 4, message: "Dada", likesCount: 11 },
			],
			newPostText: ''
		},
		dialogsPage: {
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
			]
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log('Staet changed')
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === 'ADD-POST') {
			const newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			}
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this._callSubscriber(this._state)
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state)
		}
	}
}


export default store;
window.store = store;
