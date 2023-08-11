import fs, { write } from 'fs';

const writer = fs.createWriteStream("target.log");
writer.write("Fahmi");
writer.write("Bahtiar");
writer.write("Adi");
writer.write("Nugroho");

writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});