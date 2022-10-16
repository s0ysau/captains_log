const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
	render(){
		const {title, entry, shipIsBroken, date, _id, created_at} = this.props.logs
		return(
			<Default title={`${title}`} log={this.props.logs}>
				<p>{entry}</p>
				<p>From the {title}, the ship {shipIsBroken? 'has sustained damaged' : 'is operation' }</p>
				<p>Entry Date: {date? date.toString() : ''}</p>
				<p>Created At: {created_at? created_at.toString() : ''}</p>
				<form method='POST' action={`/logs/${_id}?_method=DELETE`}>
					<input type='submit' value={`Delete ${title}`}/>
				</form>
			</Default>
		)
	}
}

module.exports = Show