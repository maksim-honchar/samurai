import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

	return (
		<div className={s.item}>
			<img className={s.itemImg} src='https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg' alt='' />
			{props.message}
			<div>
				<span>{`like ${props.likeCounts}`}</span>
			</div>
		</div>
	)
}

export default Post;
