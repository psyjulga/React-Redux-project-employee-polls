import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Poll from './Poll'

const Dashboard = (props) => {
	const { authedUser, questionIds, questions } = props

	let questionsArr = []
	for (let i = 0; i < questionIds.length; i++) {
		questionsArr.push(questions[questionIds[i]])
	}

	const answeredQuestions = questionsArr.filter(
		(q) =>
			q.optionOne.votes.includes(authedUser) ||
			q.optionTwo.votes.includes(authedUser)
	)

	const unansweredQuestions = questionsArr.filter(
		(q) =>
			!q.optionOne.votes.includes(authedUser) &&
			!q.optionTwo.votes.includes(authedUser)
	)

	const [questionsToDisplay, setQuestionsToDisplay] =
		useState(unansweredQuestions)
	const [active, setActive] = useState(true)

	const showAnswered = () => {
		setQuestionsToDisplay(answeredQuestions)
		setActive(false)
	}

	const showUnanswered = () => {
		setQuestionsToDisplay(unansweredQuestions)
		setActive(true)
	}

	return (
		<div className="dashboard">
			<h1 data-testid="test-dashboard" className="dashboard-heading">
				<button
					className={active ? 'button active' : 'button'}
					onClick={showUnanswered}
				>
					Unanswered
				</button>
				<button
					className={!active ? 'button active' : 'button'}
					onClick={showAnswered}
				>
					Answered
				</button>
			</h1>

			<ul>
				{questionsToDisplay.length > 0 ? (
					questionsToDisplay.map((q) => (
						<li key={q.id}>
							<Link to={`/questions/:question_${q.id}`} className="none">
								<Poll id={q.id} />
							</Link>
						</li>
					))
				) : (
					<div>no polls available</div>
				)}
			</ul>
		</div>
	)
}

const mapStateToProps = ({ questions, authedUser }) => ({
	questionIds: Object.keys(questions).sort(
		(a, b) => questions[b].timestamp - questions[a].timestamp
	),
	authedUser,
	questions,
})

export default connect(mapStateToProps)(Dashboard)
