const express = require('express')
const parser = require('body-parser')
const control = require('./controller')

const app = express();

app.use(parser.json())

app.get('/tasks', control.getTasks)
app.get('/task/:tid', control.getTask)
app.post('/add/task', control.addTask)

app.listen(3100);