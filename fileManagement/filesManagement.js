import fs from "fs";

export const getFileContent = async (path) => {
  try {
    return await fs.promises.readFile(path, "utf-8");
  } catch (error) {
    console.error(`Hubo un error al leer el archivo: ${error.message}`);
    throw error;
  }
};

export const writeFileContent = async (path, content) => {
  try {
    await fs.promises.writeFile(path, content, "utf-8");
    console.log(`Archivo escrito exitosamente en ${path}`);
  } catch (error) {
    console.error(`Hubo un error al escribir el archivo: ${error.message}`);
    throw error;
  }
};
