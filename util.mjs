import util from 'util';

const name = "Fahmi";
console.info(util.format("Nama : %s", name))


const person = {
    fisrtName : "Fahmi",
    lastName : "Bahtiar"
}

console.info(`Person : ${JSON.stringify(person)}`)

console.info(util.format("Person : %i", person))