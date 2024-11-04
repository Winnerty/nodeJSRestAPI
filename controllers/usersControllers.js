const db = require("../database")

exports.getAllUsers = function (req, res) {
	db.all("SELECT * FROM users", [], (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message })
		} else {
			res.json(rows)
		}
	})
}

exports.createNewUser = (req, res) => {
    const { firstName, lastName } = req.body

	function isAlphanumeric(str) {
		const regex = /^[a-zA-Z0-9]+$/
		return regex.test(str)
	}
	
	if (!firstName || !lastName)
		return res.status(400).json({ error: "The first name and last name are required !" })
	if (typeof firstName !== "string" || typeof lastName !== "string")
		return res.status(400).json({ error: "That's a weird first or last name !" })
	if (!isAlphanumeric(firstName) || !isAlphanumeric(lastName))
		return res.status(400).json({ error: "That name is not allowed !" })

	db.run(
		"INSERT INTO users (firstName,lastName ) VALUES (?, ?)",
		[firstName, lastName],
		function (err) {
			if (err) {
				res.status(500).json({ error: err.message })
			} else {
				res.status(201).json({ id: this.lastID, firstName })
			}
		}
	)
}