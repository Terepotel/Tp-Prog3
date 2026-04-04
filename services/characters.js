import { charactersAdapter } from "../adapters/characters-adapter.js";
import {
  getFileContent,
  writeFileContent,
} from "../fileManagement/filesManagement.js";

// Ejercicio 1.a.
export async function getAllCharacters(path) {
  try {
    const response = await fetch(`${path}/Characters`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const personajes = await response.json();
    console.log(personajes);
    return personajes;
  } catch (error) {
    console.error("Algo salió mal:", error);
    throw error;
  }
}

// Ejercicio 1.b.

export async function addCharacter(path, character) {
  try {
    const response = await fetch(`${path}/Characters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });

    if (!response.ok) {
      throw new Error(" Algo fallo al cargar un nuevo personaje");
    }
    console.log("Personaje agregado correctamente.");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

//Punto 1.c
export async function getPersonajeById(id) {
  try {
    const respuesta = await fetch(
      `https://thronesapi.com/api/v2/Characters/${id}`,
    );

    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error al obtener el personaje:", error);
  }
}

// Punto 1.d

export const persistCharacters = async (url) => {
  try {
    const characters = await getAllCharacters(url);
    await writeFileContent(
      "./data/characters.json",
      JSON.stringify(characters, null, 2),
    );
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
  }
};

// punto 2.d
export const reduceCharactersIntoNames = async () => {
  const characters = JSON.parse(await getFileContent("./data/characters.json"));

  console.log(typeof characters);
  const transformedData = charactersAdapter(characters);

  // aca no estoy del todo seguro si querian un solo archivo que se va "actualizando", onda "mappedCharacters.json" o que se cree uno nuevo con cada ejecucion. por lo que dice la consigna, el requerimiento es que se genere un archivo nuevo con cada ejecucion, por lo que puse el timestamp para que no se reescriba nunca un archivo que se genero antes.
  // se buguearia si alguien va toqueteando el reloj del sistema y ejecuta el programa en exactamente el mismo milisegundo
  // tambien tengan cuidado con la funcion writeFileContent de no dispararla en loop sin condicion de salida porque les va a generar una bomba de archivos practicamente
  await writeFileContent(
    `./data/generated-${Date.now()}.json`,
    JSON.stringify(transformedData, null, 2),
  );
};
