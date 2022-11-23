import { Link } from 'react-router-dom'

const Navlinks = () => {
	return (
		<ul className="navlinks">
			<li className="horizontal">
				<Link to={'/'} className="none link-style">
					Home
				</Link>
			</li>
			<li className="horizontal">
				<Link to={'/add'} className="none link-style">
					New Poll
				</Link>
			</li>
			<li className="horizontal">
				<Link to={'/leaderboard'} className="none link-style">
					Leaderboard
				</Link>
			</li>
		</ul>
	)
}

export default Navlinks
