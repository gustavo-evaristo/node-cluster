"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const processID = process.pid;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    for (let index = 0; index < 1e7; index++)
        res.end(`handled by pid ${processID}`);
});
const server = app.listen(3000).once('listening', () => console.log(`server started in process ${processID}`));
process.on('SIGTERM', () => server.close(() => process.exit()));
setTimeout(() => {
    process.exit(1);
}, Math.random() * 1e4);
