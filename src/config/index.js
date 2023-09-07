const env = process.env.NODE_ENV || 'development'
let config

switch (env) {
  case 'production':
    config = require('./production')
    break
  case 'development':
    config = require('./development')
    break
  default:
    config = require('./production')
    break
}

export default config
