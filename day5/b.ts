import * as fs from "fs";
const inputFile: string = "input.txt";

const sanitizeData = async () => {
  fs.readFile(inputFile, "utf8", (err, data) => {
    const stacks = [
      ["D", "H", "N", "Q", "T", "W", "V", "B"],
      ["D", "W", "B"],
      ["T", "S", "Q", "W", "J", "C"],
      ["F", "J", "R", "N", "Z", "T", "P"],
      ["G", "P", "V", "J", "M", "S", "T"],
      ["B", "W", "F", "T", "N"],
      ["B", "L", "D", "Q", "F", "H", "V", "N"],
      ["H", "P", "F", "R"],
      ["Z", "S", "M", "B", "L", "N", "P", "H"],
    ];

    const moves = data
      .split("\n")
      .map((arr) => arr.split(" "))
      .map((arr) => {
        const arrOfMoves: number[] = [];
        arr.map((item) => {
          if (Number.isInteger(+item)) {
            arrOfMoves.push(+item);
          }
        });
        return arrOfMoves;
      });

    moves.forEach((move) => {
      const tempStack = stacks[move[1] - 1].splice(-move[0], move[0]);
      stacks[move[2] - 1].push(...tempStack);
    });

    const topStacks = stacks.map((top) => top[top.length - 1]).join("");
    console.log(topStacks);
    return topStacks;
  });
};

sanitizeData();
