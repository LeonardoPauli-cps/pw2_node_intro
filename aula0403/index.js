const fs = require('fs')
const http = require('http')

const port = 3000

const server = http.createServer((req, res) =>{
    fs.readFile('Mensagem.html', function(err, data){
        res.writeHead(200, {'content-Type' : 'text/html'})
        res.write(data)
        return res.end()
    })
})

server.listen(port, () => {
    console.log('fileSystem Server Rodando!: ' + port)
})