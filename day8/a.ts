import * as fs from "fs";
const inputFile: string = "input.txt";

const sanitizeData = async () => {
  fs.readFile(inputFile, "utf8", (err, data) => {
    const rows: string[] = data.split(/\n/);
    const alreadyVisible = (rows.length - 1 + rows[0].length - 1) * 2;
    let visibleTrees = 0;

    const isTreeVisibleFromTheTop = (tree: number, i: number, j: number) => {
      for (let x = 0; x < i; x++) {
        if (+rows[x][j] >= tree) {
          return false;
        }
      }
      return true;
    };

    const isTreeVisibleFromTheBottom = (tree: number, i: number, j: number) => {
      for (let x = i + 1; x < rows.length; x++) {
        if (+rows[x][j] >= tree) {
          return false;
        }
      }
      return true;
    };

    const isTreeVisibleFromTheLeft = (tree: number, i: number, j: number) => {
      for (let x = 0; x < j; x++) {
        if (+rows[i][x] >= tree) {
          return false;
        }
      }
      return true;
    };

    const isTreeVisibleFromTheRight = (tree: number, i: number, j: number) => {
      for (let x = j + 1; x < rows[i].length; x++) {
        if (+rows[i][x] >= tree) {
          return false;
        }
      }
      return true;
    };

    const isTreeVisible = (tree: number, i: number, j: number) => {
      if (isTreeVisibleFromTheTop(tree, i, j)) {
        return true;
      }
      if (isTreeVisibleFromTheBottom(tree, i, j)) {
        return true;
      }
      if (isTreeVisibleFromTheLeft(tree, i, j)) {
        return true;
      }
      if (isTreeVisibleFromTheRight(tree, i, j)) {
        return true;
      }
      return false;
    };

    for (let i = 1; i < rows.length - 1; i++) {
      for (let j = 1; j < rows[i].length - 1; j++) {
        const tree = +rows[i][j];
        if (isTreeVisible(tree, i, j)) {
          visibleTrees = visibleTrees + 1;
        }
      }
    }

    const totalVisible = visibleTrees + alreadyVisible;
    console.log(totalVisible);
    return totalVisible;
  });
};

sanitizeData();
