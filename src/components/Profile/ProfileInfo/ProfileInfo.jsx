import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = props => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<div>
				<img className='contentImg' src="https://wallpaperaccess.com/full/1971765.jpg" alt="beach" />
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} alt='profile avatar' />
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo;
