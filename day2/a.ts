import * as fs from "fs";
const inputFile: string = "input.txt";

const sanitizeData = async () => {
  fs.readFile(inputFile, "utf8", (err, data) => {
    let sortedData: string[][] = [];
    sortedData = data
      .split("\n")
      .map((e) => e.split(" "))
      .map((e) => {
        if (e[1] === "X") return [e[0], "A"];
        if (e[1] === "Y") return [e[0], "B"];
        if (e[1] === "Z") return [e[0], "C"];
        else return [];
      });

    let resultsArr: number[] = [];
    sortedData.forEach((game) => {
      let selectionScore: number = 0;
      if (game[1] === "A") selectionScore = 1;
      if (game[1] === "B") selectionScore = 2;
      if (game[1] === "C") selectionScore = 3;

      if (game[0] === game[1]) {
        resultsArr.push(3 + selectionScore);
      } else if (game[1] === "A") {
        if (game[0] === "C") resultsArr.push(6 + selectionScore);
        else resultsArr.push(selectionScore);
      } else if (game[1] === "B") {
        if (game[0] === "A") resultsArr.push(6 + selectionScore);
        else resultsArr.push(selectionScore);
      } else if (game[1] === "C") {
        if (game[0] === "B") resultsArr.push(6 + selectionScore);
        else resultsArr.push(selectionScore);
      } else return;
    });
    const results = resultsArr.reduce((acc, curr) => acc + curr, 0);
    console.log(results);
    return results;
  });
};

sanitizeData();
