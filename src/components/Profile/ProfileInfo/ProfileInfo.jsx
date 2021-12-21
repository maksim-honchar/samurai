import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img className='contentImg' src="https://wallpaperaccess.com/full/1971765.jpg" alt="beach" />
			</div>
			<div className={s.descriptionBlock}>
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo;
