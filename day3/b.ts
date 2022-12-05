import * as fs from "fs";
const inputFile: string = "input.txt";

const sanitizeData = async () => {
  fs.readFile(inputFile, "utf8", (err, data) => {
    let rugSacks = data.split("\n");
    let rugSacksGroup: string[][] = [];
    for (let i = 0; i < rugSacks.length; i += 3) {
      rugSacksGroup.push([rugSacks[i], rugSacks[i + 1], rugSacks[i + 2]]);
    }

    let matchedItems: string[][] = [];
    rugSacksGroup.forEach((rugSack) => {
      matchedItems.push([
        ...new Set(
          rugSack[0]
            .split("")
            .filter(
              (e) =>
                rugSack[1].split("").includes(e) &&
                rugSack[2].split("").includes(e)
            )
        ),
      ]);
    });

    let totalArr = matchedItems.map((item) => {
      if (item[0] === item[0].toUpperCase()) {
        return item[0].charCodeAt(0) - 64 + 26;
      } else if (item[0] === item[0].toLowerCase()) {
        return item[0].charCodeAt(0) - 96;
      } else return 0;
    });
    const total = totalArr.reduce((acc, curr) => acc + curr, 0);
    console.log(total);
    return total;
  });
};

sanitizeData();
