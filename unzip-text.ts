import * as fs from "fs";
import * as zlib from "zlib";

function unzipTextFile(inputFile: string, outputFile: string): void {
  const gzip = zlib.createGunzip();
  const inputStream = fs.createReadStream(inputFile);
  const outputStream = fs.createWriteStream(outputFile);

  inputStream.pipe(gzip).pipe(outputStream);

  outputStream.on("finish", () => {
    console.log("Unzipping completed successfully.");
  });

  outputStream.on("error", (err) => {
    console.error(`Error occurred while unzipping: ${err.message}`);
  });
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile || !outputFile) {
  console.error("Please provide input and output file names as arguments.");
  process.exit(1);
}

unzipTextFile(inputFile, outputFile);
