const express = require('express')
const app = express()
const port = 3000
const usersRouter = require("./routes/users.js")

//MIDDLEWARE
app.use(express.json())
//CORS
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, x-api-key"
	)
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
	next()
})

//users endpoints
app.use("/api/", usersRouter)

//HOME GET METHOD
app.get("/", (req, res) => {
    res.json()
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})