require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo.js')
const app = express()
app.use(cors())
const port = process.env.PORT || 3003
app.use("/api", require("./routes"))
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
dbConnect()