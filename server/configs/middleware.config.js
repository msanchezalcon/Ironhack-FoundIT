const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const cors = require('cors')

const whitelist = ['http://localhost:3000', 'https://found-it-app.herokuapp.com/', 'http://localhost:5001', 'http://localhost:5000', 'http://localhost:5002']
const corsOptions = {
    origin: (origin, cb) => {
        const originIsWhitelisted = whitelist.includes(origin)
        cb(null, originIsWhitelisted)
    },
    credentials: true
}



module.exports = app => {
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())

    app.use(cors(corsOptions))
}