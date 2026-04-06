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
    console.error(error);
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

export const persistCharacters = async (url, outputTarget) => {
  try {
    const characters = await getAllCharacters(url);
    await writeFileContent(
      outputTarget || "./data/characters.json",
      JSON.stringify(characters, null, 2),
    );
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
  }
};

// Ejercicio 2.a.
export const addCharacterAtEnd = async (path, newCharacter) => {
  try {
    const data = await getFileContent(path);
    const characters = JSON.parse(data);
    characters.push(newCharacter);
    await writeFileContent(path, JSON.stringify(characters, null, 2));
    console.log(characters);
  } catch (error) {
    console.error("Error al agregar personaje al final:", error);
    throw error;
  }
};

// Ejercicio 2.b.
export const addCharactersAtStart = async (path, newCharacters) => {
  try {
    const data = await getFileContent(path);
    const characters = JSON.parse(data);
    characters.unshift(...newCharacters);
    await writeFileContent(path, JSON.stringify(characters, null, 2));
    console.log(characters);
  } catch (error) {
    console.error("Error al agregar personajes al inicio:", error);
    throw error;
  }
};

//Punto 2.c 
export const deleteLastCharacter = async () => {
  try {
    const data = await getFileContent("./data/characters.json");
    const characters = JSON.parse(data);
    const deletedLastCharacter = characters.pop();
    console.log("Personaje eliminado:", deletedLastCharacter);
    await writeFileContent("./data/characters.json", JSON.stringify(characters, null, 2));
   
  }
 catch (error) {
    console.error("Error al eliminar el último personaje:", error);
    throw error;
  }
}

// punto 2.d
export const reduceCharactersIntoNames = async (source, output) => {
  try {
    const characters = JSON.parse(
      await getFileContent(source || "./data/characters.json"),
    );

    const transformedData = charactersAdapter(characters);

    // aca no estoy del todo seguro si querian un solo archivo que se va "actualizando", onda "mappedCharacters.json" o que se cree uno nuevo con cada ejecucion. por lo que dice la consigna, el requerimiento es que se genere un archivo nuevo con cada ejecucion, por lo que puse el timestamp para que no se reescriba nunca un archivo que se genero antes.
    // se buguearia si alguien va toqueteando el reloj del sistema y ejecuta el programa en exactamente el mismo milisegundo
    // tambien tengan cuidado con la funcion writeFileContent de no dispararla en loop sin condicion de salida porque les va a generar una bomba de archivos practicamente
    await writeFileContent(
      output || `./data/generated-${Date.now()}.json`,
      JSON.stringify(transformedData, null, 2),
    );
  } catch (error) {
    console.error("Error al reducir los personajes:", error);
    throw error;
  }
};
// Ejercicio 2.e - Ordenar los datos del 2.d por nombre de forma decreciente (Z → A)
export const sortCharactersByNameDesc = async (source) => {
  try {
    const data = await getFileContent(source || "./data/characters.json");
    const characters = JSON.parse(data);

    const transformedData = charactersAdapter(characters);

    const sorted = [...transformedData].sort((a, b) => {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });

    console.log("Personajes ordenados por nombre (Z → A):");
    sorted.forEach((character) => console.log(character.name));

    return sorted;
  } catch (error) {
    console.error("Error al ordenar los personajes:", error);
    throw error;
  }
};
