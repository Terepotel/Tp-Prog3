import { getFileContent } from "./fileManagement/filesManagement.js";

const content = getFileContent("./package.json");
console.log(content);
