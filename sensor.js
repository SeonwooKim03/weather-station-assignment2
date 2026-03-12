const randomVoltage = () => {
    return (Math.random() * 5).toFixed(2)
}

setInterval(() => {
    const voltage = randomVoltage()
    console.log(`Voltage reading: ${voltage}V`)
}, 1000)
