export function parse() {
    let args = process.argv.slice(2);
    for (let i = 0; i < args.length; i++) {
        let arg = args[i].split('=');
        switch (arg[0]) {
            case 'http_method':
                process.env.HTTP_METHOD = arg[1];
                break;
            case 'url':
                process.env.URL = arg[1];
                break;
            case 'data':
                process.env.DATA = arg[1];
                break;
            case 'auth':
                process.env.AUTH = arg[1];
                break;
            case 'extra_headers':
                process.env.EXTRA_HEADERS = arg[1];
                break;
            default:
        }
    }

}