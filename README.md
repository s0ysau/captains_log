| Action |      URL     | HTTP Verb | JSX View |    Mongoose Method     |
|--------|--------------|-----------|----------|------------------------|
| Index  |    /logs/    |  GET      |Index.jsx |       Logs.find()      |
|  Show  |   /logs/:id  |  GET      | Show.jsx |      Logs.findById()   |
|   New  |   /logs/new  |  GET      | New.jsx  |          none          |
|Create  |    /logs/    |  POST     |   none   |  Logs.create(req.body) |
|  Edit  |/logs/:id/edit|  GET      | Edit.jsx |      Logs.findById()   |
|Update  |   /logs/:id  |  PUT      |  none    |Logs.findByIdAndUpdate()|
|Delete  |    /logs/    |  DELETE   |  none    |Logs.findByIdAndDelete()|