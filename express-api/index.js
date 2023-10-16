// [!] ini REST API dengan framework ExpressJs

const express = require('express');
const PORT = 2000;

const app = express();

// agar express bisa nerima body
app.use(express.json())

//      route,   handler
app.get("/api", (req, res) => {
    res.send("Hi there from Express.js API")
});

const { userRouter } = require('./routers')

app.use("/users", userRouter)

// 
app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
})

