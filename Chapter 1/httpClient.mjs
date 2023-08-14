import https from "https";

const url = "https://eo5u5d92jp4qm28.m.pipedream.net"
const request = https.request(url, {
    method: "POST",
    headers:{
        "Content-Type": "application/json",
        "Accept":"application/json",

    }
},(response)=>{
    response.addListener("data",(data)=>{
        console.info(`Receive data : ${data.toString()}`);
    })
})

const body = JSON.stringify({
    firstName:"Fahmi",
    lastName:"Bahtiar"
}) 



request.write(body)
request.end()