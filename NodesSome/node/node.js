const fs = require('fs')
let rawdata = fs.readFileSync('GHXSTY GHXST/info.json')
let parsedData = JSON.parse(rawdata)
parsedData.push({
	"name": "name",
	"message": "message"
})
let data = JSON.stringify(parsedData)
fs.writeFileSync('GHXSTY GHXST/info.json', data)
console.log('Success') 