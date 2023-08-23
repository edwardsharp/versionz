import { readFile, writeFile } from "fs";

readFile("package.json", function (err, data) {
  let json = JSON.parse(data);

  const { version, exports } = json;
  console.log("version", version, "exports:", exports);

  if (exports[version]) {
    console.info("no new package exports needed.");
  } else {
    console.warn("needs new version export!");
  }
  // json.push('search result: ' + currentSearchResult)

  // writeFile("results.json", JSON.stringify(json))
});
