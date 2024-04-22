const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false})) // Для форм

app.get('/', (req, res) => {
      res.render('index')
})

app.get('/about', (req, res) => {
      res.render('about')
})

app.get('/user/:name', (req, res) => {
      let data = {name: req.params.name, hobbies: [ 'Football', 'Skate', 'Basketball' ]}
      res.render('user', data)
})

app.post('/check-user', (req, res) => {
      let username = req.body.nameInput
            return res.redirect('/user/' + username)
})

const PORT = 3000

app.listen(PORT, () => {
      console.log(`Server started: http://localhost:${PORT}`)
})