import { readFile, writeFile } from "fs";

readFile("package.json", function (err, data) {
  let json = JSON.parse(data);

  const { version, exports } = json;
  console.log("version", version, "exports:", exports);

  if (exports[version]) {
    console.info("no new package exports needed.");
  } else {
    console.warn("needs new version export! writing package.json...");
    const val = `./dist/${version}/index.ts`;
    json.exports[version] = val;
    writeFile("package.json", JSON.stringify(json, null, 2), (err) => {
      if (err) {
        console.warn("error writing package.json!", err);
      }
    });
  }
});
