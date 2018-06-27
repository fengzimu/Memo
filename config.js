const env = 'dev', // 'dev' || 'test' || 'prod'
  apiPath = 'api/v1/'

let host = ''

switch(env) {
  case 'dev': 
    host = 'http://localhost:3001/'
    break
  case 'test': 
    host = 'http://localhost:3001/'
    break
  case 'prod': 
    host = 'http://localhost:3001/'
    break
}

let config = {
  env: env,
  hostUrl: host,
  apiUrl: host + 'api/v1'
}

module.exports = config
