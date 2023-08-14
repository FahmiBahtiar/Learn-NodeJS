import http from 'http';


const serverPost = http.createServer((request, response) => {
    console.info(request.method)
    console.info(request.url)

    if(request.method == "POST"){
        request.addListener("data", (data) =>{
            response.setHeader("Content-Type", "Application/json")
            response.write(data)
            response.end()
        })
    }else{
        if(request.url == "/fahmi"){
            response.write("Hello fahmi")
        }else{
            response.write("hello HTTP Server");
        }
    }
})


serverPost.listen(3000);