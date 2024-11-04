const express = require('express')
const app = express()
const port = 3000
const usersRouter = require("./routes/users.js")

const db = require("./database")

//MIDDLEWARE
app.use(express.json())
//users endpoints
app.use("/api/", usersRouter)

//HOME GET METHOD
app.get("/", (req, res) => {
    res.json(usersArray)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})