import { connect } from 'react-redux'
import AnsweredPoll from './AnsweredPoll'
import UnansweredPoll from './UnansweredPoll'

const Poll = (props) => {
	const { poll, authedUser } = props
	const { optionOne, optionTwo } = poll

	const userChoseOptionOne = optionOne.votes.includes(authedUser)
	const userChoseOptionTwo = optionTwo.votes.includes(authedUser)
	const notAnsweredYet = !userChoseOptionOne && !userChoseOptionTwo

	return (
		<div className="poll-container">
			{notAnsweredYet ? (
				<UnansweredPoll poll={poll} />
			) : (
				<AnsweredPoll poll={poll} />
			)}
		</div>
	)
}

const mapStateToProps = ({ authedUser, questions }, { id }) => {
	const poll = questions[id]
	return { authedUser, poll }
}

export default connect(mapStateToProps)(Poll)
