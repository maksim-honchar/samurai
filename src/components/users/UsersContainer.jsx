import React, { Component } from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { usersApi } from '../../api/api'


class UsersContainer extends Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)

		usersApi.getUsers(this.props.currentPage, this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
				this.props.setTotalUsersCount(data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)

		usersApi.getUsers(pageNumber, this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
			})
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
				/>
			</>
		)
	}
}


const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching
})(UsersContainer)
