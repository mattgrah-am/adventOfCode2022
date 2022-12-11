import * as fs from "fs";
const inputFile: string = "input.txt";

const sanitizeData = async () => {
  fs.readFile(inputFile, "utf8", (err, data) => {
    const rows: string[] = data.split(/\n/);
    let scenicScore = 0;

    const calculateScenicScoreForTopView = (
      tree: number,
      i: number,
      j: number
    ) => {
      let treeCount = 0;
      for (let x = i - 1; x >= 0; x--) {
        if (+rows[x][j] >= tree) {
          treeCount = treeCount + 1;
          break;
        } else {
          treeCount = treeCount + 1;
        }
      }
      return treeCount;
    };

    const calculateScenicScoreForBottomView = (
      tree: number,
      i: number,
      j: number
    ) => {
      let treeCount = 0;
      for (let x = i + 1; x < rows.length; x++) {
        if (+rows[x][j] >= tree) {
          treeCount = treeCount + 1;
          break;
        } else {
          treeCount = treeCount + 1;
        }
      }
      return treeCount;
    };

    const calculateScenicScoreForLeftView = (
      tree: number,
      i: number,
      j: number
    ) => {
      let treeCount = 0;
      for (let x = j - 1; x >= 0; x--) {
        if (+rows[i][x] >= tree) {
          treeCount = treeCount + 1;
          break;
        } else {
          treeCount = treeCount + 1;
        }
      }
      return treeCount;
    };

    const calculateScenicScoreForRightView = (
      tree: number,
      i: number,
      j: number
    ) => {
      let treeCount = 0;
      for (let x = j + 1; x < rows[i].length; x++) {
        if (+rows[i][x] >= tree) {
          treeCount = treeCount + 1;
          break;
        } else {
          treeCount = treeCount + 1;
        }
      }
      return treeCount;
    };

    const calculateScenicScore = (tree: number, i: number, j: number) => {
      let topScore = calculateScenicScoreForTopView(tree, i, j);
      let bottomScore = calculateScenicScoreForBottomView(tree, i, j);
      let leftScore = calculateScenicScoreForLeftView(tree, i, j);
      let rightScore = calculateScenicScoreForRightView(tree, i, j);

      return topScore * bottomScore * leftScore * rightScore;
    };

    for (let i = 1; i < rows.length - 1; i++) {
      for (let j = 1; j < rows[i].length - 1; j++) {
        const tree = +rows[i][j];
        const treeScenicScore = calculateScenicScore(tree, i, j);
        if (treeScenicScore > scenicScore) {
          scenicScore = treeScenicScore;
        }
      }
    }

    console.log(scenicScore);
    return scenicScore;
  });
};

sanitizeData();
