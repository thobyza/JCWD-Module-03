const fs = require('fs')

const dataUsers = JSON.parse(fs.readFileSync('./users.json', 'utf-8'))

module.exports = {
    getAll: (req, res) => {
        res.status(200).send(dataUsers)
    },

    getById: (req, res) => {
        const result = dataUsers.filter((item) => item.id == req.params.id)

        if (result.length == 1) {
            res.status(200).send(result)
        } else {
            res.status(400).send("User not found")
        }
    },

    register: (req, res) => {
        const id = dataUsers.length ? Math.max(...dataUsers.map((item) => item.id)) + 1 : 1;
        req.body.id = id

        dataUsers.push(req.body)

        fs.writeFileSync('./users.json', JSON.stringify(dataUsers), 'utf-8')

        res.status(200).send("Register success")
    },

    deleteById: (req, res) => {
        // finding index corresponding to req.params.id
        const index = dataUsers.findIndex((item) => item.id == req.params.id)

        if (index >= 0) {
            dataUsers.splice(index, 1)
            res.status(200).send(dataUsers)
            fs.writeFileSync('./users.json', JSON.stringify(dataUsers), 'utf-8')
        } else {
            res.status(400).send("User not found")
        }
    },

    // to handle login
    login: (req, res) => {
        const { email, password } = req.query;
        const result = dataUsers.filter((item) => item.email === email && item.password === password)

        if (result.length == 1) {
            res.status(200).send(result)
        } else {
            res.status(400).send("User not found")
        }
    }
}