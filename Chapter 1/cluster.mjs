import cluster from "cluster";
import http from "http"
import os from "os"
import process from "process";


if(cluster.isPrimary){
    //running worker
    console.info(`Primary : ${process.pid}`)
    for(let i = 0; i < os.cpus().length; i++){
    cluster.fork();
    }
    cluster.addListener("exit", (worker)=>{
        console.info(`Worker-${worker.id} is exit`)
        cluster.fork();
    })
}

if(cluster.isWorker){
    const server = http.createServer((request, response) =>{
        response.write(`Response From proccess ${process.pid}`)
        response.end();
        process.exit();

    })
server.listen(3000)
console.info(`Start cluster Worker : ${process.pid}`)

}

