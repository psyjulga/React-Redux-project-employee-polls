import { handleInitialData } from '../actions/shared'
import { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadingBar } from 'react-redux-loading-bar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import PollPage from './PollPage'
import NewPoll from './NewPoll'
import Leaderboard from './Leaderboard'
import Login from './Login'
import NotFound from './NotFound'
import Footer from './Footer'
import '../styles/app.css'

const App = (props) => {
	const { loading } = props

	useEffect(() => {
		props.dispatch(handleInitialData())
	}, [loading])

	return (
		<Fragment>
			<LoadingBar />
			<div className="app-container">
				<Navbar />
				{loading === true ? (
					<Login />
				) : (
					<Routes>
						<Route path="*" element={<NotFound page="page" />} />
						<Route exact path="/" element={<Dashboard />} />
						<Route path="/questions/:question_id" element={<PollPage />} />
						<Route path="/add" element={<NewPoll />} />
						<Route path="/leaderboard" element={<Leaderboard />} />
					</Routes>
				)}
				<Footer />
			</div>
		</Fragment>
	)
}

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null,
})

export default connect(mapStateToProps)(App)
