const data = [
    { id: 1, username: "User 1", password: "asd" },
    { id: 2, username: "User 2", password: "asd" },
    { id: 3, username: "User 3", password: "asd" }
]

module.exports = {
    getAll: (req, res) => {
        res.status(200).send(data)
    },

    getById: (req, res) => {
        const result = data.filter((item) => item.id == req.params.id)

        if (result.length == 1) {
            res.status(200).send(result)
        } else {
            res.status(400).send("User not found")
        }
    },

    register: (req, res) => {
        // finding the biggest id in the data, and add 1 for the new User
        const id = Math.max(...data.map((item) => item.id)) + 1

        // setting id to the new user
        req.body.id = id

        // pushing new user from what has been inputted in the body
        data.push(req.body)

        // sending response 
        res.status(200).send("Register success")
    },

    deleteById: (req, res) => {
        // finding index corresponding to req.params.id
        const index = data.findIndex((item) => item.id == req.params.id)

        if (index >= 0) {
            data.splice(index, 1)
            res.status(200).send(data)
        } else {
            res.status(400).send("User not found")
        }
    },

    editById: (req, res) => {
        const id = +req.params.id;
        const updateData = req.body;
        const userIndex = data.findIndex((user) => user.id === id);

        if (userIndex >= 0) {
            data[userIndex] = { ...data[userIndex], ...updateData };
            res.status(200).send(data[userIndex]);
        } else {
            res.status(400).send({ message: "User not found" })
        }
    }
}
