const { Client } = require('../lib')

const client = new Client()

client.on('message', data => {
    console.log(data.toString())
})

client.bind(yeelight => {
    yeelight.set_power('on')
    yeelight.set_rgb([250, 150, 120])

    yeelight.get_prop('bright').then(
        data => console.log(data)
    )
})
