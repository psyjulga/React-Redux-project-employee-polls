const BoardEntry = (props) => {
	const { avatar, name, numQanswered, numQasked } = props

	return (
		<div className="board-entry">
			<div className="board-left">
				<img
					src={avatar}
					alt={`${name.toLowerCase()} avatar`}
					width="40"
					height="40"
				/>
				<p>{name}</p>
			</div>
			<div className="board-right">
				<p>Questions: {numQasked}</p>
				<p>Answers: {numQanswered}</p>
			</div>
		</div>
	)
}

export default BoardEntry
