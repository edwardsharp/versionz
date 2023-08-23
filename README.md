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

see also: [example/index.js][example/index.js]

## dev

`npm run bump-n-build` bump package a patch version, write package.json's `exports` with new version, `tsc` files to `dist/${new-package-version}`

profit! 💰
