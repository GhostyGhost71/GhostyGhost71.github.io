const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
      
      if(req.url == '/'){
            fs.createReadStream('GHXSTY GHXST/node/index.html').pipe(res) // у відповідь користувачу
      }  
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
      console.log(`Server started: http://${HOST}:${PORT}`)
})

function sendData(){
      fs.readFile('info.json', () => {
            console.log('Read success')
            fs.writeFile('info.json', document.getElementById("nameInput").value, () => {
                  console.log('Writer success')
            })
      })
}