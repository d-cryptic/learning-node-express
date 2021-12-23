const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  //   console.log(req.method);
  //   console.log(req.url);

  const url = req.url;

  // home page
  if (url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    // res.write(`<h1>Home Page</h1>`);
    res.write(homePage);
    res.end();
  }
  //   about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>About Page</h1>`);
    res.end();
  }
  //  styles.css
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // image/logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  //  javascript logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>Page not found</h1>`);
    res.end();
  }
});

server.listen(5000);

/**
 * response.end() - this method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method response.end(). MUST be called on each response.
 *
 * If data is specified, it is similar in effect to calling response.write(data,encoding) followed by response.end(callback).
 *
 * If callback is specified, it will be called when the response stream is finished.
 */
