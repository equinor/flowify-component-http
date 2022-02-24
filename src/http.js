import axios from 'axios';
import { writeFileSync } from 'fs'
import { getToken } from './auth.js'
import * as log from './log.js'

async function requestConfig() {
    let config = process.env.AUTH=='SERVICE_PRINCIPAL' ? { headers: { Authorization: `Bearer ${await getToken()}` } } : {};

    if (process.env.EXTRA_HEADERS) {
        const extraHeaderStr = Buffer.from(process.env.EXTRA_HEADERS, 'base64').toString();
        const extraHeader = JSON.parse(extraHeaderStr);
        config.headers ?
            config.headers = {
                ...config.headers,
                ...extraHeader
            } : config.headers = extraHeader;
    }
    return config
}


async function httpGet(url) {
    const config = await requestConfig();
    axios.get(url, config).then((response) => {
        //log.info(response.data);
        const savePath = `${process.env.SAVE_FILE}`;
        writeFileSync(savePath, JSON.stringify(response.data));
        return response.data;
    }).catch((error) => {
        log.error(error);
    })
}

async function httpPost(url, payload) {
    const config = await requestConfig();
    config.data = payload;
    axios.post(url, config).then((response) => {
        //log.info(response.data);
        const savePath = `${process.env.SAVE_PATH}/output.json`;
        fs.writeFileSync(savePath, response.data);
        return response.data;
    }).catch((error) => {
        log.error(error);
    })
}

export { httpGet, httpPost }