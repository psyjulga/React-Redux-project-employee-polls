import { connect } from 'react-redux'
import BoardEntry from './BoardEntry'

const Leaderboard = (props) => {
	const { users, userIds } = props

	const addNumsToUser = (user, numQanswered, numQasked, sum) => {
		return {
			...user,
			numQanswered,
			numQasked,
			sum,
		}
	}

	let usersArr = []
	for (let i = 0; i < userIds.length; i++) {
		const user = users[userIds[i]]

		const { questions, answers } = user

		const numQasked = questions.length
		const numQanswered = Object.keys(answers).length
		const sum = numQanswered + numQasked

		const userWithNums = addNumsToUser(user, numQanswered, numQasked, sum)

		usersArr.push(userWithNums)
	}

	const sortedArr = usersArr.sort((a, b) => b.sum - a.sum)

	return (
		<div className="leaderboard">
			<h1 className="leaderboard-heading"> Leaderboard </h1>
			<ul>
				{sortedArr.map((user) => {
					return (
						<li key={user.id}>
							<BoardEntry
								avatar={user.avatarURL}
								name={user.name}
								numQanswered={user.numQanswered}
								numQasked={user.numQasked}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

const mapStateToProps = ({ users }) => {
	const userIds = Object.keys(users)

	return { users, userIds }
}

export default connect(mapStateToProps)(Leaderboard)
