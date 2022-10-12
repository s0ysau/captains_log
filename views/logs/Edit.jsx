const React = require('react')

class Edit extends React.Component {
	render(){
		const { title, entry, shipIsBroken, _id } = this.props.logs
		return (
			<>
				<h1>Edit this Entry</h1>
				<nav>
					<a href='/logs'>Back to the Entry Log Index Page</a><br/>
				</nav>
				<form method="POST" action={`/logs/${_id}?_method=PUT`}>
					Title: <input type='text' name='title' defaultValue={title}></input><br/>
					Entry: <textarea name='entry' defaultValue={entry}></textarea><br/>
					Is the Ship Damaged: <input type='checkbox' name='shipIsBroken' defaultChecked={shipIsBroken}></input><br/>
					<input type="submit" value="Edit Entry"/>
				</form>
			</>
		)
	}
}

module.exports = Edit