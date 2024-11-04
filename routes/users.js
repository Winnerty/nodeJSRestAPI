const express = require("express")
const router = express.Router()

usersArray = [
	{
	  "ID": 1,
	  "firstName": "John",
	  "lastName": "Doe"
	},
	{
	  "ID": 2,
	  "firstName": "Jane",
	  "lastName": "Smith"
	},
	{
	  "ID": 3,
	  "firstName": "Michael",
	  "lastName": "Johnson"
	},
	{
	  "ID": 4,
	  "firstName": "Emily",
	  "lastName": "Davis"
	},
	{
	  "ID": 5,
	  "firstName": "Ivan",
	  "lastName": "Ivanov"
	},
	{
	  "ID": 7,
	  "firstName": "Anton",
	  "lastName": "Ivanov"
	}
]

//GET METHOD
router.get("/users", (req, res) => {
	res.json(usersArray)
})

//POST METHOD
app.post("/", (req, res) => {
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
app.put("/:id", (req, res) => {
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
app.delete("/:id", (req, res) => {
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