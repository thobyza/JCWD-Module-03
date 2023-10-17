const fs = require('fs')

const expenseData = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))

module.exports = {
    createDate: (req, res, next) => {
        const todayDate = new Date().toISOString().slice(0, 10);
        req.body.date = todayDate
        next();
    },

    createId: (req, res, next) => {
        const id = expenseData.length ? Math.max(...expenseData.map((item) => item.id)) + 1 : 1;
        req.body.id = id;
        next();
    }
}


