import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';


const MyPosts = (props) => {
	let postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likesCount} />)

	const newPostElelment = React.createRef();

	let addPost = () => {
		// props.addPost()
		props.dispatch(addPostActionCreator())
	}

	let onPostChange = () => {
		let text = newPostElelment.current.value;
		// props.updateNewPostText(text)
		// const action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
		const action = updateNewPostTextActionCreator(text);
		props.dispatch(action)
	}

	return (
		<div className={s.postBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElelment} value={props.newPostText} />
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;
