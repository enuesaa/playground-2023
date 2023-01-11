import serveStatic from 'serve-static'
import process from 'node:process'
import http from 'node:http'
import finalhandler from 'finalhandler'

/**
 * @see https://github.com/reg-viz/reg-cli/blob/master/test/screenshot.js
 */
const serve = serveStatic(process.cwd(), { index: ['report.html'] });

const server = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res))
})

server.listen(3000)
