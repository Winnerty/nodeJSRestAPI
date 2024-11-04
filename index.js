const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const usersArray = [
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
	"firstName": "Chris",
	"lastName": "Brown"
	}
]

//GET METHOD
app.get("/", (req, res) => {
    res.json({
        msg: "This the message",
    })
})

//POST METHOD
app.post("/", (req, res) => {
    const { firstName, lastName } = req.body

    res.status(201).json({
        msg: "This is the message from POST",
        firstName,
        lastName,
    })
})

//PUT METHOD
app.put("/", (req, res) => {
	const { firstName, lastName } = req.body

    const userId = req.params.id

    const user = usersArray.find((user) => user.id === userId)

    if (!user) {
		return res.status(404).json({ msg: "User not found" })
	}
    
    if (firstName) {
		user.firstName = firstName
	}
	if (lastName) {
		user.lastName = lastName
	}

	res.json({
        msg: "This the message from PUT ",
        userId,
        firstName: user.firstName,
		lastName: user.lastName,
    })
})

//DELETE METHOD
app.delete("/:id", (req, res) => {
    const { id } = req.params

	res.json({
		msg: "This the message from DELETE ",
        id
	})
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});