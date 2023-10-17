const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))

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
        const id = data.length ? Math.max(...data.map((item) => item.id)) + 1 : 1;
        console.log(id);

        // setting id to the new user
        req.body.id = id

        // pushing new user from what has been inputted in the body
        data.push(req.body)

        // update data di db.json ditambah data yg baru, rewriting 
        fs.writeFileSync('./db.json', JSON.stringify(data), 'utf-8')

        // sending response 
        res.status(200).send("Register success")
    },

    deleteById: (req, res) => {
        // finding index corresponding to req.params.id
        const index = data.findIndex((item) => item.id == req.params.id)

        if (index >= 0) {
            data.splice(index, 1)
            res.status(200).send(data)
            fs.writeFileSync('./db.json', JSON.stringify(data), 'utf-8')
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
            fs.writeFileSync('./db.json', JSON.stringify(data), 'utf-8')
        } else {
            res.status(400).send({ message: "User not found" })
        }
    }
}
