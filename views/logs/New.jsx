const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
	render(){
        return (
            <Default>
                <h1>Enter Captain's Log</h1>
                <form method='POST' action='/logs'>
                    Title: <input type='text' name='title' placeholder='Title'></input><br/>
                    Entry: <textarea name='entry' placeholder='Entry'></textarea><br/>
                    Date: <input type="datetime-local" name="date" placeholder="Date of Entry"></input><br/>
                    Is the Ship damaged?: <input type='checkbox' name='shipIsBroken'></input><br/>
                    <input type='submit' value='Submit Entry Log'></input><br/>
                </form>
            </Default>
        )
	}
}

module.exports = New