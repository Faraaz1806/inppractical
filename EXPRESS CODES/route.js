const express = require("express")
const app = express()

app.get('/',(req,res) =>
        {
            res.send("This is Home page")
        }

)

app.get('/about',(req,res) =>
        {
            res.send("This is About page")
        }

)

app.listen(4000, ()=>
{
    console.log("Server is running on http://localhost:4000")
})

