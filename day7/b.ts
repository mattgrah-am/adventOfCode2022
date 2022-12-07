import * as fs from "fs";
const inputFile: string = "input.txt";

type Dir = {
  [key: string]: number;
};

const sanitizeData = async () => {
  fs.readFile(inputFile, "utf8", (err, data) => {
    const lines = data.split("\n");

    const dirs: Dir = {};
    const parserPath: string[] = [];

    lines.forEach((line) => {
      if (/\d+/.test(line)) {
        const fileSize = +line.split(" ")[0];

        const path: string[] = [];

        parserPath.forEach((dir) => {
          path.push(dir);

          const dirTotal = dirs[path.join("/")] ?? 0;
          dirs[path.join("/")] = dirTotal + fileSize;
        });
      } else if (/\$ cd/.test(line)) {
        const [_, _command, param] = line.split(" ");

        param === ".." ? parserPath.pop() : parserPath.push(param);
      }
    });
    const response = Object.values(dirs)
      .sort((a, b) => a - b)
      .find((dirSize) => 70000000 - dirs["/"] + dirSize >= 30000000);

    console.log(response);
    return response;
  });
};

sanitizeData();
