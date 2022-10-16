const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
	render(){
	const {logs} = this.props
	return (
		<Default title="The Captain's Log">
			<ul>
				{
					logs.map((log) => {
						const {title, shipIsBroken, date} = log
						return (
							<li key={log._id}>
								Date: {date? date.toString() : ''}<br/>
								<a href={`/logs/${log._id}`}>{title}</a> <br/>
								{
									shipIsBroken?  'Ship has been damaged' : 'Ship is operational'
								}
								<br/>
							</li>
						)
					})
				}
			</ul>
		</Default>
	)
	}
}

module.exports = Index