const React = require('react')

class Show extends React.Component {
	render(){
		const {title, entry, shipIsBroken, _id} = this.props.logs
		return(
			<>
				<h1>{title} Page</h1>
				<nav>
					<a href='/logs'>Back to the Entry Log Index Page</a><br/>
					<a href={`/logs/${_id}/edit`}>{`Edit the ${title}`}</a>
				</nav>
				<p>{entry}</p>
				<p>From the {title} entry, the ship {shipIsBroken ? 'has sustained damaged' : 'is operation' }</p>
			</>
		)
	}
}

module.exports = Show