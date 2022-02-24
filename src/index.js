import { httpGet, httpPost } from './http.js'
import * as log from './log.js'

switch(process.env.HTTP_METHOD){
    case 'GET':
        httpGet(process.env.URL);
        break
    case 'POST':
        let payload = Buffer.from(process.env.DATA, 'base64').toString();
        payload = JSON.parse(payload);
        httpPost(process.env.URL,payload);
        break
    default:
        log.error('Invalid http method. Support GET and POST')
}



