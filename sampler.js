const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/sample') {
        let body = ''

        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', () => {
            console.log('Received data:', body)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({
                status: 'received',
                message: 'Sample stored successfully'
            }))
        })
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
            error: 'Not found'
        }))
    }
})

server.listen(3000, () => {
    console.log('Sampler running on port 3000')
})
