const http = require('http')

const randomVoltage = () => {
  return Number((Math.random() * 5).toFixed(2))
}

setInterval(() => {
  const data = JSON.stringify({
    sensor_id: 'sensor1',
    voltage: randomVoltage(),
    timestamp: new Date().toISOString()
  })

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/sample',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  }

  const req = http.request(options, res => {
    let body = ''

    res.on('data', chunk => {
      body += chunk.toString()
    })

    res.on('end', () => {
      console.log('Sensor sent:', data)
      console.log('Sampler response:', body)
    })
  })

  req.on('error', error => {
    console.error('Error:', error.message)
  })

  req.write(data)
  req.end()
}, 1000)
