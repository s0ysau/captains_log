const React = require('react')

class Default extends React.Component {
    render(){
        const {log, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css"></link>
                    <title>{title}</title>
                </head>
                <nav>
                    <a href="/logs">Entry Log Index Page</a><br/>
                    <a href="/logs/new">Post a New Entry Log</a><br/>
                    { log ? <a href={`/logs/${log._id}/edit`}>{log.title} Edit Name</a> : ''}<br/>
                </nav>
                <body>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default