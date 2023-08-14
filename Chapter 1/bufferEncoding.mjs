const buffer = Buffer.from("Fahmi bahtiar", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));
console.info(buffer.toString("ascii"));

 const bufferBase64 = Buffer.from("RmFobWkgYmFodGlhcg==", "base64");
 console.info(bufferBase64.toString('utf8'));