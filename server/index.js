import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Buffer, WasiResponse, WasiRequest } from 'wasi_http'; // Adjust the imports based on your actual module structure
import { WasiTcpServer } from 'wasi_net'; // Adjust the import based on your actual module structure


import App from '../src/App.js'; // Adjust the import based on your actual file structure


async function handle_client(cs) {
    let buffer = new Buffer();

    while (true) {
        try {
            let d = await cs.read();
            if (d == undefined || d.byteLength <= 0) {
                return;
            }
            buffer.append(d);
            let req = buffer.parseRequest();
            if (req instanceof WasiRequest) {
                handle_req(cs, req);
                break;
            }
        } catch (e) {
            print(e);
        }
    }
}

async function handle_req(s, req) {
    if (req.uri == '/') {
        const app = ReactDOMServer.renderToString(<App data={{"title": "Hello this is the example of Server side rendering in react application via wasm",
        "description": "Passing initial values of props in React"}} />);
        const htmlTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>My SSR React App</title>
            </head>
            <body>
                <div id="root">${app}</div>
            </body>
            <script src="/static/js/main.283431e3.js"></script>
            </html>
        `;

        let resp = new WasiResponse();
        resp.headers = {
            'Content-Type': 'text/html'
        };
        console.log(htmlTemplate);
        let r = resp.encode(htmlTemplate);
        s.write(r);
    } else {
        // Handle other requests here
    }
}


async function server_start() {
    try {
        console.log("server is listning on port 5000");
        let s = new WasiTcpServer(5000);
        for (var i = 0; ; i++) {
            let cs = await s.accept();
            handle_client(cs);
        }
    } catch (e) {
        print(e);
    }
}

server_start();

