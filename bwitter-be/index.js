const express = require('express')
const PORT = 2000;
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

const { userRouter } = require('./routers')

app.use("/users", userRouter)

// 
app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
})



