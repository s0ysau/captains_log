const React = require('react')

class Index extends React.Component {
	render(){
	const {logs} = this.props
	return (
		<div>
			<h1>Entry Log Index Page</h1>
			<nav>
				<a href='/logs/new'>Post a New Entry Log</a>
			</nav>
			<ul>
				{
					logs.map((log) => {
						const {title, entry, shipIsBroken} = log
						return (
							<li key={log._id}>
								<a href={`/logs/${log._id}`}>{title}</a> <br/>
								Entry: {entry}
								<br/>
								{
									shipIsBroken? 'Ship is operational' : 'Ship has been damaged'
								}
								<br/>
								<form method='POST' action={`/logs/${log._id}?_method=DELETE`}>
									<input type='submit' value={`Delete ${title}`}/>
								</form>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
	}
}

module.exports = Index