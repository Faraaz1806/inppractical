const express = require("express")

const app = express()

app.get('/', (req,res) => {
    res.send("This is Express Server created by Frz")
}
)

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
}
)