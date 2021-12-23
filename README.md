# Learning Node and Express

## What is Nodejs?

- Environment to run JS outside Browser
- Built on Chrome's V8 JS engine
- Big Community
- Full Stack

## Browser vs Nodejs

| Browser          | Nodejs              |
| ---------------- | ------------------- |
| DOM Manipulation | No DOM Manipulation |
| Window           | No Window           |
| Interactive Apps | Server Side Apps    |
| No Filesystem    | Filesystem          |
| Fragmentation    | Versions            |
| ES6 Modules      | CommonJS Modules    |

## Built-in Modules

1. OS
2. PATH
3. FS
4. HTTP

## NPM - Node Package Manager

- [NPM](https://www.npmjs.com/)
- `npm i <packageName>`
- `npm i -g <packageName>`
- `npm i <packageName> -D`
- `npm i <packageName> --save-dev`
- `npm i <packageName> --save`

### Resource

1. [The Basics of Package.json in Node.js and npm](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/#:~:text=The%20package.,understanding%20and%20working%20with%20Node.&text=json%20is%20used%20as%20what,streamlined%2C%20modular%2C%20and%20efficient.)

## Event Loop

1. [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#:~:text=What%20is%20the%20Event%20Loop,the%20system%20kernel%20whenever%20possible.&text=js%20so%20that%20the%20appropriate,queue%20to%20eventually%20be%20executed.)

2. [NodeJS Event Loop](https://nodejs.dev/learn/the-nodejs-event-loop)

3. [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

4. [Everything You Need to Know About Node.js Event Loop - Bert Belder, IBM](https://www.youtube.com/watch?v=PNa9OMajw9w)

## Course Slides

[Course Slides](https://course-api.com)

## Events

- Event-Driven Programming
- Used heavily in Node.js

## Streams

- Writeable
- Readable
- Duplex
- Transform

## How Web Works

### HTTP Request/ Response Cycle

HTTP Messages -> Request <-> Data <-> Response -> Node/Express
