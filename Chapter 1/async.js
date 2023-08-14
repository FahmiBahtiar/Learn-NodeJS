function samplePromise(){
    return Promise.resolve("Fahmi");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();