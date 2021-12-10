const db = require('./mongo')

const getTasks = async (req, res, next) => {
    const client = new db.MongoClient(db.url) 
    let tasks;
    await client.connect()
    const con = client.db()
    tasks = await con.collection('tasks').find().toArray()
    client.close()
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    return res.json(tasks);
}

const getTask = (req, res, next) => {
    console.log('Getting Task ' + req.params.tid)
}

const addTask = (req, res, next) => {
    
}

exports.getTasks = getTasks
exports.getTask = getTask
exports.addTask = addTask