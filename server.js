const express = require('express')


const app = express()


app.listen(8081, ()=> console.log('Server is running on port 8081'))

app.get('/', (req, res)=>{
    res.json({
        success:true,
        message: "Hello from the server update Roshan singh Mehta"
    })
})