import { main as main1 } from "versionz/0.0.1";
import { main as main2 } from "versionz/0.0.2";
import { main as main3, newFn as newFn3 } from "versionz/0.0.3"; // newFn was introduced in v0.0.3!
import { main as main4, newFn as newFn4 } from "versionz/0.0.4";
import { main, newFn } from "versionz/latest";

main1();
main2();
main3();
newFn3();
main4();
newFn4();
main();
newFn();
