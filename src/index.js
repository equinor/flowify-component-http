import { httpGet, httpPost } from './http.js'
import * as log from './log.js'
import { parse } from './args.js'

async function main (){
    parse();
    switch(process.env.HTTP_METHOD){
        case 'GET':
            httpGet(process.env.URL);
            break
        case 'POST':
            //let payload = Buffer.from(process.env.DATA, 'base64').toString();
            let payload = JSON.parse(process.env.DATA);
            httpPost(process.env.URL,payload);
            break
        default:
            log.error('Invalid http method. Support GET and POST')
    }
}
 await main()



