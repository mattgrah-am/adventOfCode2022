import * as fs from "fs";
const inputFile: string = "input.txt";

const sanitizeData = async () => {
  fs.readFile(inputFile, "utf8", (err, data) => {
    const signal = data.split("");
    const arraySample: string[][] = [];
    let char = 4;

    for (let i = 0; i < signal.length; i++) {
      arraySample.push(signal.slice(i, i + 4));
    }

    for (let i = 0; i < arraySample.length; i++) {
      if (
        arraySample[i].some((val, idx) => arraySample[i].indexOf(val) !== idx)
      ) {
        char++;
      } else {
        char = i + 4;
        i = arraySample.length;
      }
    }
    console.log(char);
    return char;
  });
};

sanitizeData();
