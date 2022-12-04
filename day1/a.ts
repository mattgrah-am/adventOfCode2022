import * as fs from "fs";
const inputFile: string = "input.txt";

let calories: number[] = [];

const sanitizeData = async () => {
  fs.readFile(inputFile, "utf8", (err, data) => {
    let inputArr: number[] = [];

    data.split("\n").forEach((e) => {
      if (e !== "") {
        inputArr.push(+e);
      } else {
        let total = inputArr.reduce((acc, curr) => acc + curr, 0);
        calories.push(total);
        inputArr = [];
      }
    });
    const max: number = Math.max(...calories);
    const index = calories.indexOf(max);
    console.log("index: ", index, "Total of Index: ", calories[index]);
    return index;
  });
};

sanitizeData();
