# versionz

prototype exploring versioned exports a la deno!

## pretense

with deno you can import stuff from different versions of the same package. for example:

```ts
// ramda-example.ts
import { add } from "https://x.nest.land/ramda@0.27.0/source/index.js";
import { multiply } from "https://x.nest.land/ramda@0.27.2/mod.ts";
// note: these two fns are coming from two different versions (0.27.0 and 0.27.2) of the same package (ramda)
console.log("add@0.27.0", add(6, 6, 6));
console.log("multiply@0.27.2", multiply(6, 6, 6));

// run like:
// deno run ramda-example.ts
```

## proto

...so then this lil' experiment can enable like:

```js
import { main as main1 } from "versionz/0.0.1";
import { main as main2 } from "versionz/0.0.2";
import { main as main3 } from "versionz/0.0.3";
import { main as main4, newFn } from "versionz/0.0.4";

main1();
main2();
main3();
main4();
newFn();
```

`node example/index.js` then will output:

```
$ node example/index.js
hi from version 0.0.1! 👋
hi from version 0.0.2! 👋
hi from version 0.0.3! 👋
hi from version 0.0.4! 👋
ohai! this is newFn in version 0.0.4!!
```

this is mostly achieved by the `exports` field in package.json having version identifies, like:

```json
"exports": {
    "./0.0.1": "./dist/0.0.1/index.js",
    "./0.0.2": "./dist/0.0.2/index.js",
    "./0.0.3": "./dist/0.0.3/index.js",
    "./0.0.4": "./dist/0.0.4/index.js"
  },
```

there's some package.json scripts that will:

1. bump package.json's `version` using `npm version patch --no-git-tag-version`
2. re-write (if needed) package.json's `exports` with the new version. see: [utilz/writePackageExports.js](utilz/writePackageExports.js)
3. tsc build to the root of dist/
4. and finally tsc build into a version folder in `dist/` (uses `process.env.npm_package_version` which is available to npm scripts!)

check out the entire [package.json](package.json)

see also: [example/index.js](example/index.js)

## dev

`npm run bump-n-build` bump package a patch version, write package.json's `exports` with new version, `tsc` files to `dist/${new-package-version}`

profit! 💰
