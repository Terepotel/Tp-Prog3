import {
  //   getFileContent,
  writeFileContent,
} from "./fileManagement/filesManagement.js";

// const content = getFileContent("./package.json");
// console.log(content);

// ---------------------------

const mockContent =
  "Los alumnos deberán crear un archivo de JavaScript que realice consultas al API https://thronesapi.com/. Trabajar con métodos comunes y avanzados de los arrays, y utilizar el módulos File System de NodeJS. Cuando se solicite, persistir la información en un archivo local en formato JSON y realizar acciones sobre dicho archivo.";

writeFileContent("./testOutput/mockContent.txt", mockContent);
