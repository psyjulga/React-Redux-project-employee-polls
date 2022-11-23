import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleSaveQuestion } from '../actions/questions'

const NewPoll = (props) => {
	const { authedUser, dispatch } = props
	const navigate = useNavigate()

	const initialQuestionObject = {
		author: authedUser,
		optionOneText: '',
		optionTwoText: '',
	}

	const [question, setQuestion] = useState(initialQuestionObject)
	const [disabled, setDisabled] = useState(true)

	const checkInput = () => {
		if (question.optionOneText !== '' && question.optionTwoText !== '') {
			setDisabled(false)
		}
	}

	useEffect(() => {
		checkInput()
	}, [question])

	const handlePollSubmit = (e) => {
		e.preventDefault()

		dispatch(handleSaveQuestion(question)).then(() => {
			setQuestion(initialQuestionObject)
			setDisabled(true)
			navigate('/')
		})
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setQuestion({ ...question, [name]: value })
	}

	return (
		<div className="new-poll">
			<h1 className="new-poll-heading">Add a new poll</h1>
			<form onSubmit={handlePollSubmit} className="poll-form">
				Would you rather <br />
				<input
					data-testid="test-option-one"
					name="optionOneText"
					value={question.optionOneText}
					onChange={handleInputChange}
					className="input-margin"
					type="text"
					size="50"
				/>
				or <br />
				<input
					data-testid="test-option-two"
					name="optionTwoText"
					value={question.optionTwoText}
					onChange={handleInputChange}
					className="input-margin"
					type="text"
					size="50"
				/>
				?
				<br />
				<button
					data-testid="test-submit-button"
					disabled={disabled}
					className="add-button"
				>
					Add poll
				</button>
			</form>
		</div>
	)
}

const mapStateToProps = ({ authedUser }) => {
	return { authedUser }
}

export default connect(mapStateToProps)(NewPoll)
