function samplePromise(){
    return Promise.resolve("Fahmi");
}

const name = await samplePromise();
console.info(name)