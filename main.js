import {
  addCharacter,
  addCharacterAtEnd,
  addCharactersAtStart,
  getAllCharacters,
  getPersonajeById,
  persistCharacters,
  reduceCharactersIntoNames,
  sortCharactersByNameDesc,
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
  imageUrl: "https://placecats.com/300/200",
};

addCharacter(API_URL, newCharacter);

//llamado 1.c
console.log(await getPersonajeById(10));

// llamado 1.d
await persistCharacters(API_URL);

// Ejercicio 2.a.
await addCharacterAtEnd("./data/characters.json", {
  id: 54,
  firstName: "Greymon",
  lastName: "Morgado",
  fullName: "Greymon Morgado",
  title: "King of the Greys",
  family: "Ceratosaurus",
  image: "greymon.jpg",
  imageUrl: "https://wikimon.net/images/6/6c/Greymon.jpg",
});

// Ejercicio 2.b.

await addCharactersAtStart("./data/characters.json", [
  {
    id: 55,
    firstName: "Maria",
    lastName: "Gomez",
    fullName: "Maria Gomez",
    title: "Reina",
    family: "Gomezia",
    image: "maria.jpg",
    imageUrl: "https://placecats.com/300/200",
  },
  {
    id: 56,
    firstName: "Pedro",
    lastName: "Lopez",
    fullName: "Pedro Lopez",
    title: "Lord",
    family: "Lopezia",
    image: "pedro.jpg",
    imageUrl: "https://placecats.com/300/200",
  },
]);

//lamado 2.d
await reduceCharactersIntoNames();

// Ejercicio 2.e
await sortCharactersByNameDesc();

