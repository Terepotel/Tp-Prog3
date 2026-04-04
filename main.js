import { charactersAdapter } from "./adapters/characters-adapter.js";
import {
  getFileContent,
  writeFileContent,
} from "./fileManagement/filesManagement.js";
import {
  addCharacter,
  getAllCharacters,
  getPersonajeById,
  persistCharacters,
  reduceCharactersIntoNames,
} from "./services/characters.js";

const API_URL = "https://thronesapi.com/api/v2";

// Ejercicio 1.a.
getAllCharacters(API_URL);

// Ejercicio 1.b.

const newCharacter = {
  id: 53,
  firstName: "Andres",
  lastName: "Fernandez",
  fullName: "Andres Fernandez",
  title: "Rey del Norte del Sur",
  family: "Fernandia",
  image: "andres.jpg",
  imageUrl:
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

addCharacter(API_URL, newCharacter);

//llamado 1.c
console.log(await getPersonajeById(10));

// llamado 1.d
await persistCharacters(API_URL);

//lamado 2.d
await reduceCharactersIntoNames();
