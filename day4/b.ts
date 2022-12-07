import * as fs from "fs";
const inputFile: string = "input.txt";

const sanitizeData = async () => {
  fs.readFile(inputFile, "utf8", (err, data) => {
    const assignments = data
      .split("\n")
      .map((e) => e.split(","))
      .map((arr) => [arr[0].split("-"), arr[1].split("-")])
      .map((arr) => {
        return [
          [...Array(+arr[0][1] - +arr[0][0] + 1).keys()].map(
            (x) => x + +arr[0][0]
          ),
          [...Array(+arr[1][1] - +arr[1][0] + 1).keys()].map(
            (x) => x + +arr[1][0]
          ),
        ];
      });
    console.log(assignments);

    let matchedItems = 0;
    assignments.forEach((arr) => {
      if (
        arr[0].some((v) => arr[1].includes(v)) ||
        arr[1].some((v) => arr[0].includes(v))
      )
        matchedItems++;
    });

    console.log(matchedItems);
    return matchedItems;
  });
};

sanitizeData();
