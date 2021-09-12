import './App.css';

const App = () => {
	return (
		<div className='app-wrapper'>
			<header className='header'>
				<img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" />
			</header>
			<nav className='nav'>
				<div>
					<a>Profile</a>
				</div>
				<div>
					<a>Messages</a>
				</div>
				<div>
					<a>News</a>
				</div>
				<div>
					<a>Music</a>
				</div>
				<div>
					<a>Settings</a>
				</div>
			</nav>
			<div className='content'>
				<div>
					<img src="https://wallpaperaccess.com/full/1971765.jpg" alt="beach" />
				</div>
				<div>
					ava + description
				</div>
				<div>
					My posts
					<div>
						New post
					</div>
					<div>
						<div>
							post 1
						</div>
						<div>
							post 2
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;
