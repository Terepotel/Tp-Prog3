// Ejercicio 1.a.
async function getAllCharacters(path) {
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

export { getAllCharacters };
