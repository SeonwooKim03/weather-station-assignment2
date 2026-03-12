const http = require('http')

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/sample',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

const data = JSON.stringify({
  sensor_id: "sensor1",
  voltage: 3.21,
  timestamp: "2026-03-12T12:00:00Z"
})

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()
