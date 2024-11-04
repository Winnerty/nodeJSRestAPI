const express = require("express")
const router = express.Router()

const db = require("../database")

//GET METHOD
router.get("/users", (req, res) => {
	db.all('SELECT * FROM users', [], (err, rows) => {
		if (err) 
			res.status(500).json({ error: err.message })
		else 
			res.json(rows)
	  })
})

//POST METHOD
router.post("/users", (req, res) => {
    const { firstName, lastName } = req.body

	const newUser = {
        ID: usersArray.length > 0 ? usersArray[usersArray.length - 1].ID + 1 : 1,
        firstName,
        lastName,
    }

	usersArray.push(newUser)

    res.status(201).json({
        msg: "new user added",
        firstName,
        lastName,
    })
})

//PUT METHOD
router.put("/users/:id", (req, res) => {
	const { firstName, lastName } = req.body

    const userId = parseInt(req.params.id)

	const user = usersArray.find(user => user.ID === userId)

    if (!user) {
		return res.status(404).json({ msg: "User not found" })
	}
    
    if (firstName) user.firstName = firstName
	if (lastName) user.lastName = lastName

	res.json({
        msg: "user updated",
        user,
    })
})

//DELETE METHOD
router.delete("/users/:id", (req, res) => {
	const userId = parseInt(req.params.id)
    const len = usersArray.length

	usersArray = usersArray.filter(user => user.ID !== userId)

	if (usersArray.length === len) 
		return res.status(404).json({ msg: "User not found" })
	
	res.json({
		msg: "user deleted",
        id: userId
	})
})

module.exports = router