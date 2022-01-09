import React from 'react'
import styles from './users.module.css'

const Users = props => {

	if (props.users.length === 0) {
		props.setUsers([
			{ id: 1, photoUrl: 'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-1678508335.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
			{ id: 2, photoUrl: 'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-1678508335.jpg', followed: true, fullName: 'Sergey', status: 'I am a boss too', location: { city: 'Kyiv', country: 'Ukraine' } },
			{ id: 3, photoUrl: 'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-1678508335.jpg', followed: false, fullName: 'Anna', status: 'I am a boss', location: { city: 'Lviv', country: 'Ukraine' } }
		])
	}

	return (
		<div>
			{
				props.users.map(u => (
					<div key={u.id}>
						<span>
							<div>
								<img src={u.photoUrl} className={styles.userPhoto} alt='userAvatar' />
							</div>
							<div>
								{
									u.followed
										? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
										: <button onClick={() => props.follow(u.id)}>Follow</button>
								}
							</div>
						</span>
						<span>
							<span>
								<div>{u.fullName}</div>
								<div>{u.status}</div>
							</span>
							<span>
								<div>{u.location.country}</div>
								<div>{u.location.city}</div>
							</span>
						</span>
					</div>
				))
			}
		</div>
	)
}

export default Users
