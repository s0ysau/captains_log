const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
	render(){
		const { title, entry, shipIsBroken, _id } = this.props.logs
		return (
			<Default title={`${title} Edit Page`} logs={this.props.logs}>
				<form method="POST" action={`/logs/${_id}?_method=PUT`}>
					Title: <input type='text' name='title' defaultValue={title}></input><br/>
					Entry: <textarea name='entry' defaultValue={entry}></textarea><br/>
					Is the Ship Damaged: <input type='checkbox' name='shipIsBroken' defaultChecked={shipIsBroken}></input><br/>
					<input type="submit" value="Edit Entry"/>
				</form>
			</Default>
		)
	}
}

module.exports = Edit