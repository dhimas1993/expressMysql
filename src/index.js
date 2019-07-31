const express = require('express')

const userRouter = require('./routers/userRouter')
const taskRouter = require('./routers/taskRouter')

const powrt = require('./config/port')

const app = express()
const port = powrt

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Berhasil Running di ' + port);
    
})