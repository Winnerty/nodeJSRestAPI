const express = require("express")
const router = express.Router()
const { checkApiKey } = require("../middleware/checkApiKey")
const { getAllUsers,
        createNewUser,
        updateUser,
        deleteUser,
 } = require("../controllers/usersControllers")

const db = require("../database")

//GET METHOD
router.get("/users", getAllUsers)

//POST METHOD
router.post("/users", createNewUser)

//PUT METHOD
router.put("/users/:id", updateUser)

//DELETE METHOD
router.delete("/users/:id", deleteUser)

module.exports = router