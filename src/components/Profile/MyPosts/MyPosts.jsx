import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
	const postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likesCount} key={p.id} />)

	const newPostElelment = React.createRef();

	const onAddPost = () => {
		props.addPost()
	}

	const onPostChange = () => {
		let text = newPostElelment.current.value;
		props.updateNewPostText(text)
	}

	return (
		<div className={s.postBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElelment} value={props.newPostText} />
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;
