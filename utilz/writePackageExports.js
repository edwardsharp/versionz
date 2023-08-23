import { readFile, writeFile } from "fs";

readFile("package.json", function (err, data) {
  let json = JSON.parse(data);

  const { version, exports } = json;

  if (exports[version]) {
    console.info("no new package exports needed.");
  } else {
    console.warn("needs new version export! writing package.json...");
    json.exports[`./${version}`] = `./dist/${version}/index.js`;
    writeFile("package.json", JSON.stringify(json, null, 2), (err) => {
      if (err) {
        console.warn("error writing package.json!", err);
      }
    });
  }
});
