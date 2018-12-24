/* @flow */
"use strict";

const http = require("http");
const zlib = require("zlib");
const fs = require("fs");

http
    .createServer(function(request, response) {
        // Tell the client, this is a zip file.
        response.writeHead(200, {
            "Content-Type": "application/zip",
            "Content-disposition": "attachment; filename=churches.gz"
        });

        const inputStream = fs.createReadStream(
            "/home/fkereki/Documents/CHURCHES - Digital Taxonomy.pdf"
        );

        const gzipStream = zlib.createGzip();

        inputStream.pipe(gzipStream).pipe(response);
    })
    .listen(8080, "localhost");
