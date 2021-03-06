import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/user.png'
import styles from './users.module.css'


const Users = props => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

	let pages = []

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div>
			<div>
				{pages.map((p, index) => {
					return (
						<span
							key={index}
							className={props.currentPage === p ? styles.selectedPage : ''}
							onClick={() => props.onPageChanged(p)}
						>
							{p}
						</span>
					)
				})}
			</div>
			{
				props.users.map(u => (
					<div key={u.id}>
						<span>
							<div>
								<NavLink to={'/profile/' + u.id}>
									<img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto} alt='userAvatar' />
								</NavLink>
							</div>
							<div>
								{
									u.followed
										?
										<button
											disabled={props.followingInProgress.some(id => id === u.id)}
											onClick={() => {
												props.toggleFollowingProgress(true, u.id)
												axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
													withCredentials: true,
													headers: {
														"API-KEY": "7374640a-3837-40a5-9bac-b674866abc6c"
													}
												})
													.then(response => {
														if (response.data.resultCode === 0) {
															props.unfollow(u.id)
														}
														props.toggleFollowingProgress(false, u.id)
													})
											}}
										>
											Unfollow
										</button>
										:
										<button
											disabled={props.followingInProgress.some(id => id === u.id)}
											onClick={() => {
												props.toggleFollowingProgress(true, u.id)
												axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
													withCredentials: true,
													headers: {
														"API-KEY": "7374640a-3837-40a5-9bac-b674866abc6c"
													}
												})
													.then(response => {
														if (response.data.resultCode === 0) {
															props.follow(u.id)
														}
														props.toggleFollowingProgress(false, u.id)
													})
											}}
										>
											Follow
										</button>
								}
							</div>
						</span>
						<span>
							<span>
								<div>{u.name}</div>
								<div>{u.status}</div>
							</span>
							<span>
								<div>{'u.location.country'}</div>
								<div>{'u.location.city'}</div>
							</span>
						</span>
					</div>
				))
			}
		</div>
	)
}

export default Users
