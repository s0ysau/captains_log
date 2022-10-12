const React = require('react')

class New extends React.Component {
	render(){
        return (
            <>
            <h1>Enter Captain's Log</h1>
            <nav>
                <a href='/logs'>Go Back to the Directory</a>
            </nav>
            <form method='POST' action='/logs'>
                Title: <input type='text' name='title' placeholder='Title'></input><br/>
                Entry: <textarea name='entry' placeholder='Entry'></textarea><br/>
                Ship is damaged?: <input type='checkbox' name='shipIsBroken'></input><br/>
                <input type='submit' value='Submit Entry Log'></input><br/>
            </form>
            </>
        )
	}
}

module.exports = New