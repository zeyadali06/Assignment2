const fs = require("fs");
const zlib = require("zlib");
const pipeline = require("stream");

let srcFilePath = "./data.txt"
let dstFilePath = "./data.txt.gz"

function createFile(fileName, content) {
    fs.writeFile(fileName, content.repeat(100000), "utf-8", () => { })
}

createFile(srcFilePath, "ejdjoeiwjqojowqhorgqrwjidwejdjoeiwjqojowqhorgqrw")

function copyAndCompress(source, destination) {
    pipeline.pipeline(
        fs.createReadStream(source),
        zlib.createGzip(),
        fs.createWriteStream(destination),
        (err) => {
            if (err) {
                console.error("Compression failed:", err);
            } else {
                console.log("File compressed successfully!");
            }
        }
    );
}

copyAndCompress(srcFilePath, dstFilePath);