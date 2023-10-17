// middleware -> function yang disimpen di tengah

module.exports = {
    // karena sebagai middleware, punya 3 parameter (req, res, next)
    // tanda dari middleware ( ada next )
    getTime: (req, res, next) => {
        console.log("Time: ", Date.now());
        next();
    }
}