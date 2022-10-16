const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
	render(){
		const {title, entry, shipIsBroken, date, _id, created_at} = this.props.logs
		return(
			<Default title={`${title}`} log={this.props.logs}>
				<p>Entry: <br/>
				{entry}</p>
				<p>The ship {shipIsBroken? 'has sustained damaged' : 'is operation' }</p>
				<p>Entry Date: {date? date.toString() : ''}</p>
				<form method='POST' action={`/logs/${_id}?_method=DELETE`}>
					<input type='submit' value={`Delete ${title}`}/>
				</form>
			</Default>
		)
	}
}

module.exports = Show