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
    const sortedArr = calories.sort((a, b) => b - a);
    const totalTopThree = sortedArr
      .splice(0, 3)
      .reduce((acc, curr) => acc + curr, 0);
    console.log("Total of Top 3: ", totalTopThree);
    return totalTopThree;
  });
};

sanitizeData();
