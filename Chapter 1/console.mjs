import {Console} from "console";
import fs from 'fs';


const logFile = fs.createWriteStream("Application.log");

const log = new Console({
    stdout: logFile,
    stderr: logFile,
})

log.info("hello World")
log.error("hello world")

const person = {
    firstName : "Fahmi",
    lastname : "Bahtiar"
}

log.table(person);