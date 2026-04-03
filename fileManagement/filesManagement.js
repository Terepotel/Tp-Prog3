import fs from "fs";

export const getFileContent = async (path) => {
  try {
    return await fs.promises.readFile(path, "utf-8");
  } catch (error) {
    console.error(`Hubo un error al leer el archivo: ${error.message}`);
    throw error;
  }
};
