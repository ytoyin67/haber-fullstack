const express = require('express')
const fs = require('fs')
const path = require('path')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use(express.static('view'))

app.get('/*', (req,res)=>{
  res.sendFile(__dirname + "/404-page/404.html")
})

app.get('/api', (req, res)=>{
 // res.sendFile(__dirname +'/view/index.html')
  //res.sendFile(path.join(__dirname, 'view','index.html'))
  res.json({message: 'hello world'})
})

app.post('/contact', (req,res)=>{
  const {name, email, phone, message}= req.body

if(!name || !email || !phone || !message) return res.status(500)

  res.json({name , email , phone , message})

   

})






const PORT = process.env.PORT || 3000


app.listen(PORT, console.log('server started on port' + PORT))

